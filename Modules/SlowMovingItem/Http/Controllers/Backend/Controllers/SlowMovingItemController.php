<?php

namespace Modules\SlowMovingItem\Http\Controllers\Backend\Controllers;

use App\Config\ps_constant;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Modules\Core\Http\Services\ItemService;
// use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Modules\SlowMovingItem\Http\Services\SlowMovingItemService;
use Validator;


class SlowMovingItemController extends Controller
{
    const parentPath = "slow_moving_items/slow_moving_item/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "slow_moving_item.index";
    const createRoute = "slow_moving_item.create";
    const editRoute = "slow_moving_item.edit";

    protected $slowMovingItemService, $successFlag, $dangerFlag, $csvFile, $itemService;

    public function __construct(SlowMovingItemService $slowMovingItemService, ItemService $itemService)
    {
        $this->slowMovingItemService = $slowMovingItemService;
        $this->itemService = $itemService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->csvFile = Constants::csvFile;
    }

    public function index(Request $request)
    {
        $dataArr = $this->slowMovingItemService->index($request);
        if (!permissionControl(Constants::slowMovingItemModule,ps_constant::readPermission)){
            return redirect()->route('admin.index');
        }
        return renderView(self::indexPath, $dataArr);
    }

    public function edit($id)
    {
        if (!permissionControl(Constants::slowMovingItemModule,ps_constant::updatePermission)){
            return redirect()->route('admin.index');
        }
        $dataArr = $this->slowMovingItemService->edit($id);
        return renderView(self::editPath, $dataArr);
    }

    public function update(Request $request)
    {
        //prepare for validation
        $errors = validateForCustomField('itm',$request->product_relation);
// dd($request->all());
        //validation
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:3|unique:psx_items,title,'.$request->id,
            'description' => 'required',
            // 'category_id' => Rule::when($request->category_id, ['required|exists:psx_subcategories,id']),
           
            'category_id' => 'required|exists:psx_categories,id',
            'subcategory_id' => 'required|exists:psx_subcategories,id',
            'location_city_id' => 'required|exists:psx_location_cities,id',
            'currency_id' => 'required|exists:psx_currencies,id',
            'location_township_id' => 'required|exists:psx_location_townships,id',
            // 'subcategory_id' => Rule::when($request->subcategory_id, ['required|exists:psx_subcategories,id']),
            // 'location_city_id' => Rule::when($request->location_city_id, ['required|exists:psx_location_cities,id']),
            // 'currency_id' => Rule::when($request->currency_id, ['required|exists:psx_currencies,id']),
            // 'location_township_id' => Rule::when($request->location_township_id, ['required|exists:psx_location_townships,id']),
            'price' => 'required',
            'lat' => 'required',
            'lng' => 'required',
            // 'video_icon' => 'nullable|file|mimes:jpg,png,jpeg',
            // 'video' => 'nullable|file|mimes:mp4|max:1500'
        ]);


        if ($validator->fails()) {
            // dd("here");
            return redirect()->route('slow_moving_item.edit',$request->id)->with('product_relation_errors',$errors)
                ->withErrors($validator)
                ->withInput();
        } else {

            if (collect($errors)->isNotEmpty()){
                return redirect()->route('slow_moving_item.edit',$request->id)->with('product_relation_errors',$errors);
            }
        }

        // dd("here");
        $product = $this->itemService->update($request);

        if (isset($product['error'])){
            // go back to index
            $msg = $product['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

    public function destroy($id)
    {
        if (!permissionControl(Constants::slowMovingItemModule,ps_constant::deletePermission)){
            return redirect()->route('admin.index');
        }
        $dataArr = $this->slowMovingItemService->destroy($id);
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }
}
