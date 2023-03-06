<?php


namespace Modules\Core\Exports;

use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithCustomCsvSettings;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\CustomizeUi;
use Modules\Core\Entities\Item;

class ItemReportExport implements FromCollection, WithHeadings, WithMapping, WithCustomCsvSettings
{
    use Exportable;

    public function getCsvSettings(): array
    {
        return [
            'delimiter' => ',',
            'use_bom' => false,
            'output_encoding' => 'ISO-8859-1',
        ];
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $itemRelation =[
            'category',
            'subcategory',
            'city',
            'township',
            'currency',
            'itemRelation.uiType',
            'itemRelation.customizeUi',
            'owner',
            'itemRelation'
        ];
        return Item::selectRaw($this->getSqlForCustomField())->with($itemRelation)
        ->leftJoin('psx_item_infos', 'psx_item_infos.item_id','=', 'psx_items.id')
        ->leftJoin('psx_customize_ui_details','psx_item_infos.value','=','psx_customize_ui_details.id')
        ->groupBy('psx_items.id')
        ->withCount(['item_touch', 'category_touch', 'subcategory_touch'])
        ->orderBy('item_touch_count', 'desc')
        ->orderBy('category_touch_count', 'desc')
        ->orderBy('subcategory_touch_count', 'desc')
        ->orderBy('favourite_count', 'desc')
        ->latest('psx_items.added_date')
        ->get();
    }

    public function getSqlForCustomField(){
        $sql = "psx_items.*,";
        $customizeUis = CustomizeUi::where('module_name', 'itm')->latest()->get();

        $customizeuideatil_array = [];

        foreach ($customizeUis as $CustomizeUiDetail) {
            if ($CustomizeUiDetail->ui_type_id == Constants::dropDownUi || $CustomizeUiDetail->ui_type_id == Constants::radioUi || $CustomizeUiDetail->ui_type_id == Constants::multiSelectUi) {
                $customizeuideatil_array[$CustomizeUiDetail->core_keys_id . '@@name'] = $CustomizeUiDetail->core_keys_id;
            }
        }

        foreach (array_unique($customizeuideatil_array) as $key => $customizeuideatil) {
            $sql .= "max(case when psx_item_infos.core_keys_id = '$customizeuideatil' then psx_customize_ui_details.name end) as '$key',";
        }
        foreach ($customizeUis as $key => $customizeUi) {
            if ($key + 1 == count($customizeUis)) {
                $sql .= "max(case when psx_item_infos.core_keys_id = '$customizeUi->core_keys_id' then psx_item_infos.value end) as '$customizeUi->core_keys_id'";
            } else {
                $sql .= "max(case when psx_item_infos.core_keys_id = '$customizeUi->core_keys_id' then psx_item_infos.value end) as '$customizeUi->core_keys_id' ,";
            }
        }
        return $sql;
    }

    public function map($item) : array {
        return [
            $item->title,
            $item->category?$item->category->name:'',
            $item->subcategory?$item->subcategory->name:'',
            ($item->currency?$item->currency->currency_symbol:'') .''. $item->price,
            $item[Constants::itmPurchasedOption . '@@name'],
            $item[Constants::itmItemType . '@@name'],
            $item[Constants::itmDealOption . '@@name'],
            $item->item_touch_count? $item->item_touch_count:'0',
            $item->added_date->format('Y/m/d'),
        ];
    }

    /**
     * Write code on Method
     *
     * @return response()
     */
    public function headings(): array
    {
        return ["Item", "Category", "Subcategory", "Price", "Purchased Option", "Item Type", "Deal Option", "Engagement", "Date"];
    }

}
