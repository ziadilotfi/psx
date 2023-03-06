<?php

namespace Modules\Core\Http\Services;

use App\Http\Services\PsService;
use Modules\Core\Entities\CustomizeUi;

class CustomizeUiService extends PsService
{

    private $customizeUiIsDeleteCol, $customizeUiNameCol, $customizeUiIdCol, $customizeUiTableIdCol, $customizeUiCoreKeysIdCol;

    public function __construct()
    {
        $this->customizeUiNameCol = CustomizeUi::name;
        $this->customizeUiIdCol = CustomizeUi::id;
        $this->customizeUiTableIdCol = CustomizeUi::tableId;
        $this->customizeUiCoreKeysIdCol = CustomizeUi::coreKeysId;
        $this->customizeUiIsDeleteCol = CustomizeUi::isDelete;

    }

    public function getCustomFields($relation = null, $tableId = null, $withNoPag = null, $tableIds = null, $coreKeysIds = null, $sort = null,$order = null,$search = null,$row = null, $isDelete = null, $ids = null){

        $customFields = CustomizeUi::when($relation, function ($q, $relation){
                            $q->with($relation);
                        })
                        ->when($tableIds, function ($q, $tableIds){
                            $q->whereIn($this->customizeUiTableIdCol, $tableIds);
                        })
                        ->when($coreKeysIds, function ($q, $coreKeysIds){
                            $q->whereIn($this->customizeUiCoreKeysIdCol, $coreKeysIds);
                        })
                        ->when($search,function($query,$search){
                            $query->where($this->customizeUiNameCol,'like','%'.$search.'%');
                        })
                        ->when($tableId, function ($q, $tableId){
                            $q->where($this->customizeUiTableIdCol, $tableId);
                        })
                        ->when($sort && $sort !== 'ui_type_id', function ($q) use($sort,$order){

                            $q->orderBy($sort, $order);
                        })
                        ->when($ids, function ($q, $ids){
                            $q->whereIn("id", $ids);
                        })
                        ->when($isDelete !== null, function ($q) use ($isDelete){
                            if ($isDelete !== null){
                                $q->where($this->customizeUiIsDeleteCol, $isDelete);
                            }
                        });
        if ($withNoPag){
            $customFields = $customFields->get();
        } else {
            $customFields = $customFields->paginate($row)->withQueryString();
        }

        return $customFields;
    }

    public function getCustomField($id = null, $tableId = null, $relation = null, $coreKeysId = null){
        $customField = CustomizeUi::when($id, function ($q, $id){
            $q->where($this->customizeUiIdCol, $id);
        })
            ->when($relation, function ($q, $relation){
                $q->with($relation);
            })
            ->when($tableId, function ($q, $tableId){
                $q->where($this->customizeUiTableIdCol, $tableId);
            })
            ->when($coreKeysId, function ($q, $coreKeysId){
                $q->where($this->customizeUiCoreKeysIdCol, $coreKeysId);
            })
            ->first();
        return $customField;
    }

}
