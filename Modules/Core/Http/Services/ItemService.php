<?php

namespace Modules\Core\Http\Services;

use App\Config\ps_constant;
use App\Config\ps_config;
use App\Http\Services\PsService;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Intervention\Image\Facades\Image;
use Modules\BlockUser\Http\Services\BlockUserService;
use Modules\Core\Entities\CustomizeUi;
use Modules\Core\Entities\CustomizeUiDetail;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\AdPostType;
use Modules\Core\Entities\Category;
use Modules\Core\Entities\CoreFieldFilterSetting;
use Modules\Core\Entities\CoreImage;
use Modules\Core\Entities\Currency;
use Modules\Core\Entities\LocationCity;
use Modules\Core\Entities\LocationTownship;
use Modules\Core\Entities\Item;
use Modules\Core\Entities\ItemInfo;
use Modules\Core\Entities\ScreenDisplayUiSetting;
use Modules\Core\Entities\Shop;
use Modules\Chat\Entities\UserBought;
use Modules\Core\Entities\Subcategory;
use Modules\Core\Entities\SubcatSubscribe;
use Modules\Core\Entities\TransactionDetail;
use Modules\Core\Exports\ItemReportExport;
use Modules\Core\Exports\SoldOutItemReportExport;
use Modules\Core\Exports\SuccessfulDealCountReportExport;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Modules\Core\Entities\BackendSetting;
use Modules\Core\Transformers\Backend\Model\Product\ProductWithKeyResource;
use Modules\ItemPromotion\Entities\PaidItemHistory;
use Modules\Core\Http\Services\UserAccessApiTokenService;
use Modules\Core\Http\Services\PushNotificationTokenService;
use Modules\Core\Transformers\Backend\NoModel\Disable\DisableWithKeyResource;
use Modules\Core\Transformers\Backend\NoModel\ItemReport\ItemReportWithKeyResource;
use Modules\Core\Transformers\Backend\NoModel\Pending\PendingWithKeyResource;
use Modules\Core\Transformers\Backend\NoModel\Reject\RejectWithKeyResource;
use Modules\Core\Transformers\Backend\NoModel\SoldOutItemReport\SoldOutItemReportWithKeyResource;
use Modules\Core\Transformers\Backend\NoModel\SuccessfulDealCountReport\SuccessfulDealCountReportWithKeyResource;
use Modules\Core\Entities\SystemConfig;

class  ItemService extends PsService
{
    protected $customUiDetailCoreKeysIdCol, $itemApiRelation, $loginUserIdParaApi, $deviceTokenParaApi, $okStatusCode, $customUiIdCol, $itmIdCol, $paginationPerPage, $pushNotificationTokenService, $userAccessApiTokenService, $itmStatusCol, $itmPurchasedOption, $itmDealOption, $itmConditionOfItem, $itmItemType, $soldOutItemReportCsvFileName, $successfulDealCountReportCsvFileName, $itemReportCsvFileName, $backendSettingService, $categoryType, $itemType, $userType, $allType, $paidItemFirstWithGoogleAdType, $bumbsAndGoogleAdsBetweenAdType, $onlyPaidItemAdType, $normalAdsOnlyAdType, $paidItemFirstAdType, $googleAdsBetweenAdType, $bumpsUpsBetweenAdType, $searchHistoryService, $searchHistoryItemType, $searchHistoryUserType, $searchHistoryCategoryType, $userInfoService, $CoreFieldFilterSettingIsDelCol, $internalServerErrorStatusCode, $successStatus, $noContentStatusCode, $dropDownUi, $textUi, $radioUi, $checkBoxUi, $dateTimeUi, $numberUi, $textAreaUi, $multiSelectUi, $imageUi, $timeOnlyUi, $dateOnlyUi,$customUiModuleName, $userService, $unBan, $imageService, $currencyService, $locationTownshipService, $locationCityService, $publish, $subcategoryService, $categoryService, $currencyCurrencyShortFormCol, $itmShopIdCol, $itmItemCurrencyIdCol, $itmItemLocationTownshipIdCol, $shopNameCol, $locationTownshipNameCol, $locationCityNameCol, $subCatNameCol, $itmItemLocationIdCol, $itmSubCatIdCol, $shopTableName, $currencyTableName, $locationTownshipTableName, $locationCityTableName, $subCatTableName, $uploadPathForDel, $thumb1xPathForDel, $thumb2xPathForDel, $thumb3xPathForDel, $delete, $unDelete, $enable, $disable, $hide, $show, $thumbnail3xPath, $thumbnail2xPath, $thumbnail1xPath, $originPath, $componentName, $customUiMandatoryCol, $itmInfoCoreKeysIdCol, $customUiIsDelCol, $screenDisplayUiIsShowCol, $catNameCol, $userNameCol, $itmCatIdCol, $itmUserIdCol, $screenDisplayUiIdCol, $coreFieldFilterIdCol, $screenDisplayUiKeyCol, $coreFieldFilterModuleNameCol, $customUiEnableCol, $itmInfoItemIdCol, $customUiCoreKeysIdCol, $itmTableName, $userTableName, $catTableName, $code, $parentPath, $getImgPath, $coreFieldFilterForRelation, $viewAnyAbility ,$createAbility, $editAbility, $deleteAbility, $itmIsPaidCol, $itmAddedUserIdCol, $createdStatusCode, $forbiddenStatusCode, $badRequestStatusCode, $normalUserRoleId, $usrRemainingPost, $shopService, $approvalItem, $rejectItem, $disableItem, $publishItem, $successFlag, $dangerFlag, $warningFlag, $blockUserService, $systemConfigService, $searchHistoryAllType,$unpublishItem,
    $itmIsSoldOutCol, $itmIsDiscountCol, $itmIsAvailableCol, $itmOverallRatingCol, $itmPriceCol, $itmTitleCol, $itmDescriptionCol, $itmLatCol, $itmLngCol, $paidItmTableName, $paidItmItemIdCol, $paidItmStartDateCol, $paidItmEndDateCol, $itmInfoTableName, $itmInfoValueCol, $googleAd,$itmSearchterm, $approvalNotiFlag;

    public function __construct(UserAccessApiTokenService $userAccessApiTokenService, PushNotificationTokenService $pushNotificationTokenService, BackendSettingService $backendSettingService, SearchHistoryService $searchHistoryService, UserService $userService, ImageService $imageService, CurrencyService $currencyService, LocationTownshipService $locationTownshipService, LocationCityService $locationCityService, CategoryService $categoryService, SubcategoryService $subcategoryService, ShopService $shopService, BlockUserService $blockUserService, SystemConfigService $systemConfigService, UserInfoService $userInfoService)
    {
        $this->categoryService = $categoryService;
        $this->userService = $userService;
        $this->imageService = $imageService;
        $this->subcategoryService = $subcategoryService;
        $this->locationCityService = $locationCityService;
        $this->locationTownshipService = $locationTownshipService;
        $this->currencyService = $currencyService;
        $this->shopService = $shopService;
        $this->blockUserService = $blockUserService;
        $this->systemConfigService = $systemConfigService;
        $this->userInfoService = $userInfoService;
        $this->searchHistoryService = $searchHistoryService;
        $this->backendSettingService = $backendSettingService;

        $this->searchHistoryAllType = Constants::searchHistoryAllType;
        $this->searchHistoryItemType = Constants::searchHistoryItemType;
        $this->searchHistoryCategoryType = Constants::searchHistoryCategoryType;
        $this->searchHistoryUserType = Constants::searchHistoryUserType;
        $this->onlyPaidItemAdType = Constants::onlyPaidItemAdType;
        $this->normalAdsOnlyAdType = Constants::normalAdsOnlyAdType;
        $this->paidItemFirstAdType = Constants::paidItemFirstAdType;
        $this->googleAdsBetweenAdType = Constants::googleAdsBetweenAdType;
        $this->bumpsUpsBetweenAdType = Constants::bumpsUpsBetweenAdType;
        $this->bumbsAndGoogleAdsBetweenAdType = Constants::bumbsAndGoogleAdsBetweenAdType;
        $this->paidItemFirstWithGoogleAdType = Constants::paidItemFirstWithGoogleAdType;
        $this->userAccessApiTokenService = $userAccessApiTokenService;
        $this->pushNotificationTokenService = $pushNotificationTokenService;

        $this->approvalItem = Constants::pendingItem;
        $this->unpublishItem = Constants::unpublishItem;
        $this->rejectItem = Constants::rejectItem;
        $this->publishItem = Constants::publishItem;
        $this->disableItem = Constants::disableItem;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->warningFlag = Constants::warning;
        $this->unBan = Constants::unBan;
        $this->code = Constants::item;
        $this->parentPath = Constants::parentPath;
        $this->getImgPath = Constants::imgPath;
        $this->viewAnyAbility = Constants::viewAnyAbility;
        $this->createAbility = Constants::createAbility;
        $this->editAbility = Constants::editAbility;
        $this->deleteAbility = Constants::deleteAbility;
        $this->coreFieldFilterForRelation = ps_config::coreFieldFilterForRelation;
        $this->paginationPerPage = ps_config::pagPerPage;

        $this->itmTableName = Item::tableName;
        $this->itmIdCol = Item::id;
        $this->itmCatIdCol = Item::categoryId;
        $this->itmSubCatIdCol = Item::subCategoryId;
        $this->itmItemLocationIdCol = Item::itemLocationId;
        $this->itmItemLocationTownshipIdCol = Item::itemLocationTownshipId;
        $this->itmUserIdCol = Item::userId;
        $this->itmItemCurrencyIdCol = Item::itemCurrencyId;
        $this->itmShopIdCol = Item::shopId;
        $this->itmIsPaidCol = Item::isPaid;
        $this->itmIsSoldOutCol = Item::isSoldOut;
        $this->itmIsDiscountCol = Item::isDiscount;
        $this->itmIsAvailableCol = Item::isAvailable;
        $this->itmOverallRatingCol = Item::overallRating;
        $this->itmStatusCol = Item::status;
        $this->itmLatCol = Item::lat;
        $this->itmLngCol = Item::lng;
        $this->itmPriceCol = Item::price;
        $this->itmDescriptionCol = Item::description;
        $this->itmSearchterm = Item::searchterm;
        $this->itmTitleCol = Item::title;
        $this->itmAddedUserIdCol = Item::addedUserId;
        $this->itmAddedDateCol = Item::addedDate;
        $this->itmItemTouchCountCol = Item::touchCount;
        $this->itmFavouriteCountCol = Item::favouriteCount;





        $this->catTableName = Category::tableName;
        $this->catNameCol = Category::name;
        $this->catIdCol = Category::id;

        $this->userTableName = User::tableName;
        $this->userNameCol = User::name;
        $this->userIdCol = User::id;

        $this->subCatTableName = Subcategory::tableName;
        $this->subCatNameCol = Subcategory::name;
        $this->subCatIdCol = Subcategory::id;


        $this->locationCityTableName = LocationCity::tableName;
        $this->locationCityNameCol = LocationCity::name;
        $this->locationCityIdCol = LocationCity::id;

        $this->locationTownshipTableName = LocationTownship::tableName;
        $this->locationTownshipNameCol = LocationTownship::name;
        $this->locationTownshipIdCol = LocationTownship::id;


        $this->currencyTableName = Currency::tableName;
        $this->currencyCurrencyShortFormCol = Currency::currencyShortForm;
        $this->currencyIdCol = Currency::id;


        $this->shopTableName = Shop::tableName;
        $this->shopNameCol = Shop::name;

        $this->customUiIdCol = CustomizeUi::id;
        $this->customUiUiTypeIdCol = CustomizeUi::uiTypeId;
        $this->customUiCoreKeysIdCol = CustomizeUi::coreKeysId;
        $this->customUiEnableCol = CustomizeUi::enable;
        $this->customUiIsDelCol = CustomizeUi::isDelete;
        $this->customUiMandatoryCol = CustomizeUi::mandatory;
        $this->customUiModuleName = CustomizeUi::moduleName;

        $this->customUiDetailCoreKeysIdCol = CustomizeUiDetail::coreKeysId;
        $this->customUiDetailTableName = CustomizeUiDetail::tableName;
        $this->customUiDetailNameCol = CustomizeUiDetail::name;
        $this->customUiDetailIdCol = CustomizeUiDetail::id;


        $this->CoreFieldFilterSettingIsDelCol = CoreFieldFilterSetting::isDelete;

        $this->itmInfoItemIdCol = ItemInfo::itemId;
        $this->itmInfoCoreKeysIdCol = ItemInfo::coreKeysId;
        $this->itmInfoTableName = ItemInfo::tableName;
        $this->itmInfoValueCol = ItemInfo::value;

        $this->coreFieldFilterModuleNameCol = CoreFieldFilterSetting::moduleName;
        $this->coreFieldFilterIdCol = CoreFieldFilterSetting::id;

        $this->screenDisplayUiKeyCol = ScreenDisplayUiSetting::key;
        $this->screenDisplayUiIdCol = ScreenDisplayUiSetting::id;
        $this->screenDisplayUiIsShowCol = ScreenDisplayUiSetting::isShow;

        $this->paidItmTableName = PaidItemHistory::tableName;
        $this->paidItmItemIdCol = PaidItemHistory::itemId;
        $this->paidItmStartDateCol = PaidItemHistory::startDate;
        $this->paidItmEndDateCol = PaidItemHistory::endDate;
        $this->paidItmStatusCol = PaidItemHistory::status;

        $this->componentName = "item";

        $this->originPath = Constants::originPath;
        $this->thumbnail1xPath = Constants::thumbnail1xPath;
        $this->thumbnail2xPath = Constants::thumbnail2xPath;
        $this->thumbnail3xPath = Constants::thumbnail3xPath;

        $this->uploadPathForDel = Constants::uploadPathForDel;
        $this->thumb1xPathForDel = Constants::thumb1xPathForDel;
        $this->thumb2xPathForDel = Constants::thumb2xPathForDel;
        $this->thumb3xPathForDel = Constants::thumb3xPathForDel;

        $this->show = Constants::show;
        $this->hide = Constants::hide;
        $this->enable = Constants::enable;
        $this->disable = Constants::disable;
        $this->delete = Constants::delete;
        $this->unDelete = Constants::unDelete;

        $this->dropDownUi = Constants::dropDownUi;
        $this->textUi = Constants::textUi;
        $this->radioUi = Constants::radioUi;
        $this->checkBoxUi = Constants::checkBoxUi;
        $this->dateTimeUi = Constants::dateTimeUi;
        $this->textAreaUi = Constants::textAreaUi;
        $this->numberUi = Constants::numberUi;
        $this->multiSelectUi = Constants::multiSelectUi;
        $this->imageUi = Constants::imageUi;
        $this->timeOnlyUi = Constants::timeOnlyUi;
        $this->dateOnlyUi = Constants::dateOnlyUi;

        $this->noContentStatusCode = Constants::noContentStatusCode;
        $this->internalServerErrorStatusCode = Constants::internalServerErrorStatusCode;
        $this->successStatus = Constants::successStatus;
        $this->createdStatusCode = Constants::createdStatusCode;
        $this->forbiddenStatusCode = Constants::forbiddenStatusCode;
        $this->badRequestStatusCode = Constants::badRequestStatusCode;
        $this->okStatusCode = Constants::okStatusCode;

        $this->normalUserRoleId = Constants::normalUserRoleId;
        $this->usrRemainingPost = Constants::usrRemainingPost;

        $this->googleAd = Constants::googleAd;

        $this->categoryType = Constants::categoryType;
        $this->userType = Constants::userType;
        $this->itemType = Constants::itemType;
        $this->allType = Constants::allType;
        $this->loginUserIdParaApi = ps_constant::loginUserIdParaFromApi;
        $this->deviceTokenParaApi = ps_constant::deviceTokenKeyFromApi;

        $this->itemReportCsvFileName = 'item_report';
        $this->successfulDealCountReportCsvFileName = 'successful_deal_count_report';
        $this->soldOutItemReportCsvFileName = 'sold_out_item_report';

        $this->approvalNotiFlag = Constants::approvalNotiFlag;
        $this->itmItemType = Constants::itmItemType;
        $this->itmDealOption = Constants::itmDealOption;
        $this->itmPurchasedOption = Constants::itmPurchasedOption;
        $this->itmConditionOfItem = Constants::itmConditionOfItem;

        $this->coreImageImgParentIdCol = CoreImage::imgParentId;
        $this->coreImageImgTypeCol = CoreImage::imgType;

        $this->userBoughtTableName = UserBought::tableName;
        $this->userBoughtBuyerUserIdCol = UserBought::buyerUserId;
        $this->userBoughtSellerUserIdCol = UserBought::sellerUserId;
        $this->userBoughtItemIdCol = UserBought::itemId;


        $this->itemApiRelation = ['category', 'subcategory', 'city', 'township', 'currency', 'owner','itemRelation', 'cover', 'video', 'icon'];
    }

    // for Backend
    public function storeCoreFieldValues($request, $status = null){

        DB::beginTransaction();
        try {

            $item = new Item();

            if (isset($request->category_id) && !empty($request->category_id)) {
                $item->category_id = $request->category_id;
            }

            if (isset($request->subcategory_id) && !empty($request->subcategory_id)) {
                $item->subcategory_id = $request->subcategory_id;
            }

            if (isset($request->title) && !empty($request->title)) {
                $item->title = $request->title;
            }

            if (isset($request->location_city_id) && !empty($request->location_city_id)) {
                $item->location_city_id = $request->location_city_id;
            }

            if (isset($request->location_township_id) && !empty($request->location_township_id)) {
                $item->location_township_id = $request->location_township_id;
            }

            if (isset($request->description) && !empty($request->description)) {
                $item->description = $request->description;
            }

            if (isset($request->lat) && !empty($request->lat)) {
                $item->lat = $request->lat;
            }

            if (isset($request->lng) && !empty($request->lng)) {
                $item->lng = $request->lng;
            }

            if (isset($request->status)) {

                if($request->status == false)
                {
                    $item->status = $this->unpublishItem;
                }
                else{
                    $item->status = $request->status;
                }
                // $item->status = $request->status;
            }
            // publish or not
            else if ($status !== null) {
                // dd($status);
                $item->status = $status;
            } else {
                $approval = SystemConfig::first()->is_approved_enable;
                $item->status = $approval == 1 ? 0 : 1;
            }

            if (isset($request->currency_id) && !empty($request->currency_id)) {
                $item->currency_id = $request->currency_id;
            }

            if (isset($request->is_available)) {
                $item->is_available = $request->is_available;
            }

            if (isset($request->is_sold_out)) {
                $item->is_sold_out = $request->is_sold_out;
            }

            if (isset($request->is_discount)) {
                $item->is_discount = $request->is_discount;
            } else {
                $item->is_discount = 0;
            }

            if (isset($request->price) && !empty($request->price)) {
                $item->price = $request->price;
            }

            if (isset($request->original_price) && !empty($request->original_price)) {
                $item->original_price = $request->original_price;
            }

            if (isset($request->phone) && !empty($request->phone)) {
                // dd($request->phone);
                $item->phone = $request->phone;
            }

            if (isset($request->percent)) {
                $item->percent = $request->percent;
                $item->price = $item->original_price - ((floatval($request->percent)/100)*$item->original_price);
            if(floatval($request->percent) > 0){
                $item->is_discount = 1;
            }else{
                $item->is_discount = 0;
            }
            }else{
                $item->price =  $item->original_price;
            }

            if (isset($request->is_paid) && !empty($request->is_paid)) {
                $item->is_paid = $request->is_paid;
            } else {
                $item->is_paid = 0;
            }

            if (isset($request->added_user_id) && !empty($request->added_user_id)) {
                $item->added_user_id = $request->added_user_id;
            } else {
                if(Auth::check()){
                    $item->added_user_id = Auth::user()->id;
                }else{
                    $item->added_user_id = 0;
                }
            }

            $item->save();

            // generate deeplink
            $image = CoreImage::where([$this->coreImageImgParentIdCol => $item->id, $this->coreImageImgTypeCol => 'item'])->first();
            $img = $image?$image->img_path:'';
            $getProduct = $this->getItem($item->id);
            $dynamic_link = deeplinkGenerate($getProduct->id, $getProduct->title, $getProduct->description, $img);
            $getProduct->dynamic_link = $dynamic_link;
            $getProduct->update();

            DB::commit();
            return $item;

        } catch (\Throwable $e) {
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }
    }

    public function storeImage($request, $fileName, $imgType, $imgParentId){
        if ($request->file($fileName)){
            $file = $request->file($fileName);
            $data[$this->coreImageImgParentIdCol] = $imgParentId;
            $data[$this->coreImageImgTypeCol] = $imgType;
            $data['ordering'] = $request->ordering;
            $this->imageService->insertImage($file, $data);
        }
    }

    public function storeVideo($request, $fileName, $imgType, $imgParentId){
        if ($request->file($fileName)){
            $file = $request->file($fileName);
            $data[$this->coreImageImgParentIdCol] = $imgParentId;
            $data[$this->coreImageImgTypeCol] = $imgType;
            $this->imageService->insertVideo($file, $data);
        }
    }

    public function saveDeeplink($imgType, $imgParentId){
        $conds = [$this->coreImageImgParentIdCol => $imgParentId, $this->coreImageImgTypeCol => $imgType];
        $image = $this->imageService->getImage($conds);
        $img = $image? $image->img_path : '';
        $getItem = $this->getItem($imgParentId);
        $dynamic_link = deeplinkGenerate($getItem->id, $getItem->title, $getItem->description, $img);
        $getItem->dynamic_link = $dynamic_link;
        $getItem->update();
    }

    public function store($request){

        DB::beginTransaction();

        try {
            // save in item table
            $item = $this->storeCoreFieldValues($request);
            $itemId= $item->id;

            $this->storeImage($request, "cover", "item", $itemId);

            $this->storeImage($request, "video_icon", "item-video-icon", $itemId);

            $this->storeVideo($request, "video", "item-video", $itemId);

            $this->saveDeeplink('item', $itemId);

            // save in item_info table
            $customizeHeaders = $this->getCustomizeFields($this->code,null,null,0);
            $customizeHeaderIds = $this->getValueByPluck($customizeHeaders,$this->customUiCoreKeysIdCol);

            $this->storeCustomFieldValues($request, $item, $customizeHeaderIds);

            DB::commit();
            return $item;
        } catch (\Throwable $e){
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }
    }

    public function storeCustomFieldValues($request, $item, $coreKeysIds){

        if (!empty($request->product_relation)){
            foreach ($coreKeysIds as $coreKeysId){
                foreach ($request->product_relation as $key => $value){
                    if (is_array($value)){
                        $coreKeysIdFromReq = $value['core_keys_id'];
                        $valueFromReq = $value['value'];
                    } else {
                        $coreKeysIdFromReq = $key;
                        $valueFromReq = $value;
                    }

                    if ($coreKeysIdFromReq === $coreKeysId){
                        $itemRelation = new ItemInfo();

                        if(is_file($valueFromReq)) {
                            $file = $this->checkFileInCustomFieldValue($valueFromReq);
                        }

                        $itemRelation->item_id = $item->id;

                        if ($valueFromReq === false) {
                            $itemRelation->value = 0;
                        }
                        if(is_file($valueFromReq)) {
                            if (str_contains($valueFromReq->getMimeType(), 'image')) {
                                $itemRelation->value = $file;
                            }
                        }
                        if(!is_file($valueFromReq) && $valueFromReq !== false) {
                            $itemRelation->value = $valueFromReq;
                        }

                        $customizeHeaders = $this->getCustomizeFields($this->code,null,null,0);
                        foreach ($customizeHeaders as $key2=>$customizeHeader){
                            if($coreKeysIdFromReq === $customizeHeader->core_keys_id){
                                $itemRelation->ui_type_id = $customizeHeader->ui_type_id;
                                $itemRelation->core_keys_id = $customizeHeader->core_keys_id;
                            }
                        }

                        if (Auth::check()) {
                            $itemRelation->added_user_id = Auth::id();
                        } else {
                            $itemRelation->added_user_id = 0;
                        }

                        $itemRelation->save();
                    }
                }
            }
        }
    }

    public function updateCoreFieldValues($request, $status = null){
        $item = $this->getItem($request->id);

        if (isset($request->category_id) && !empty($request->category_id))
            $item->category_id = $request->category_id;

        if (isset($request->subcategory_id) && !empty($request->subcategory_id))
            $item->subcategory_id = $request->subcategory_id;

        if (isset($request->title) && !empty($request->title))
            $item->title = $request->title;

        if (isset($request->location_city_id) && !empty($request->location_city_id))
            $item->location_city_id = $request->location_city_id;

        if (isset($request->location_township_id) && !empty($request->location_township_id))
            $item->location_township_id = $request->location_township_id;

        if (isset($request->description) && !empty($request->description))
            $item->description = $request->description;

        if (isset($request->lat) && !empty($request->lat))
            $item->lat = $request->lat;

        if (isset($request->lng) && !empty($request->lng))
            $item->lng = $request->lng;

        if (isset($request->status)) {
            if($request->status == false)
            {
                $item->status = $this->unpublishItem;
            }
            else{
                $item->status = $request->status;
            }
            // $item->status = $request->status;
        }
        // publish or not
        else if ($status !== null) {
            $item->status = $status;
        }

        if (isset($request->currency_id) && !empty($request->currency_id))
            $item->currency_id = $request->currency_id;

        if (isset($request->is_available))
            $item->is_available = $request->is_available;

        if (isset($request->is_sold_out)) {
            $item->is_sold_out = $request->is_sold_out;
        }

        if (isset($request->price) && !empty($request->price))
            $item->price = $request->price;

        if (isset($request->phone) && !empty($request->phone)) {
            $item->phone = $request->phone;
        }

        if (isset($request->original_price) && !empty($request->original_price))
            $item->original_price = $request->original_price;

        if (isset($request->percent)) {
            $item->percent = $request->percent;
            $item->price = $item->original_price-((floatval($request->percent)/100)*$item->original_price);
            if(floatval($request->percent) > 0){
                $item->is_discount = 1;
            }else{
                $item->is_discount = 0;
            }
        }

        if (isset($request->is_discount))
            $item->is_discount = $request->is_discount;
        // else
        //     $item->is_discount = 0;

        if (isset($request->is_paid))
            $item->is_paid = $request->is_paid;
        // else
        //     $item->is_paid = 0;

        if (isset($request->updated_user_id) && !empty($request->updated_user_id)) {
            $item->updated_user_id = $request->updated_user_id;
        } else {
            if (Auth::check()) {
                $item->updated_user_id = Auth::user()->id;
            } else {
                $item->updated_user_id = $item->added_user_id;
            }
        }

        $item->update();

        // generate deeplink
        $image = CoreImage::where([$this->coreImageImgParentIdCol => $item->id, $this->coreImageImgTypeCol => 'item'])->first();
        $img = $image?$image->img_path:'';
        $getProduct = $this->getItem($item->id);
        $dynamic_link = deeplinkGenerate($getProduct->id, $getProduct->title, $getProduct->description, $img);
        $getProduct->dynamic_link = $dynamic_link;
        $getProduct->update();

        return $item;
    }

    public function updateImage($request, $fileName, $imgType, $imgParentId){
        if ($request->file($fileName)){
            $file = $request->file($fileName);

            $conds[$this->coreImageImgParentIdCol] = $imgParentId;
            $conds[$this->coreImageImgTypeCol] = $imgType;
            $image = CoreImage::where($conds)->first();

            // if image, delete existing file
            if(!empty($image)){
                // delete image from storage folder
                $this->imageService->deleteImage($image->img_path);

            }


            $data[$this->coreImageImgParentIdCol] = $imgParentId;
            $data[$this->coreImageImgTypeCol] = $imgType;
            $data['ordering'] = $request->ordering;
            $this->imageService->insertImage($file, $data, $image);
        }
    }

    public function updateVideo($request, $fileName, $imgType, $imgParentId){
        if ($request->file($fileName)){
            $file = $request->file($fileName);

            $conds[$this->coreImageImgParentIdCol] = $imgParentId;
            $codns[$this->coreImageImgTypeCol] = $imgType;
            $image = CoreImage::where($conds)->first();

            // if image, delete existing file
            if(!empty($image)){
                // delete image from storage folder
                $this->imageService->deleteVideo($image->img_path);
            }

            $data[$this->coreImageImgParentIdCol] = $imgParentId;
            $data[$this->coreImageImgTypeCol] = $imgType;
            $this->imageService->insertVideo($file, $data);
        }
    }

    public function update($request){

        DB::beginTransaction();
        try {
            // update in item table
            $item = $this->updateCoreFieldValues($request);

            $itemId = $item->id;

            $this->updateImage($request, "cover", "item", $itemId);

            $this->updateImage($request, "video_icon", "item-video-icon", $itemId);

            $this->updateVideo($request, "video", "item-video", $itemId);

            $this->saveDeeplink('item', $itemId);

            // save in item_infos table
            $data = $this->updateCustomFieldOldValues($request, $item);

            $newDataIndexs = array_diff(array_unique($data['allDataIndex']),array_unique($data['oldDataIndex']));

            $this->storeCustomFieldValues($request, $item, $newDataIndexs);

            DB::commit();
            return $item;
        } catch (\Throwable $e){
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }
    }

    public function updateCustomFieldOldValues($request, $item){
        $allDataIndex = [];
        $oldDataIndex = [];
        if(isset($request->product_relation)) {
            foreach ($request->product_relation as $key => $value) {
                if (is_array($value)) {
                    $coreKeysIdFromReq = $value['core_keys_id'];
                    $valueFromReq = $value['value'];

                    array_push($allDataIndex, $value['core_keys_id']);
                } else {
                    $coreKeysIdFromReq = $key;
                    $valueFromReq = $value;

                    array_push($allDataIndex, $key);
                }

                if ($valueFromReq !== null && $valueFromReq !== "undefined") {

                    $productRelations = ItemInfo::where('item_id', $item->id)->get();

                    foreach ($productRelations as $key3 => $itemRelation) {

                        array_push($oldDataIndex, $itemRelation->core_keys_id);

                        if ($coreKeysIdFromReq == $itemRelation->core_keys_id) {

                            if (is_file($valueFromReq)) {
                                // del file from local first
                                delImageFromCustomFieldValue($itemRelation, $this->uploadPathForDel, $this->thumb1xPathForDel, $this->thumb2xPathForDel, $this->thumbnail3xPath);

                                // save new file in local again
                                $file = $this->checkFileInCustomFieldValue($valueFromReq);
                            }

                            // update in db start
                            $itemRelation->item_id = $item->id;
                            if ($valueFromReq === false) {
                                $itemRelation->value = 0;
                            }
                            if (is_file($valueFromReq)) {
                                if (str_contains($valueFromReq->getMimeType(), 'image')) {
                                    $itemRelation->value = $file;
                                }
                            }
                            if (!is_file($valueFromReq) && $valueFromReq !== false) {
                                $itemRelation->value = $valueFromReq;
                            }

                            $customizeHeaders = CustomizeUi::where($this->customUiModuleName, $this->code)->get();
                            foreach ($customizeHeaders as $key2 => $customizeHeader) {
                                if ($coreKeysIdFromReq === $customizeHeader->core_keys_id) {
                                    $itemRelation->ui_type_id = $customizeHeader->ui_type_id;
                                    $itemRelation->core_keys_id = $customizeHeader->core_keys_id;
                                }
                            }
                            if(Auth::check()){
                                $itemRelation->updated_user_id = Auth::id();
                            }else{
                                $itemRelation->updated_user_id = 0;
                            }
                            $itemRelation->update();
                            // update in db end
                        }
                    }
                }
            }
        }

        $dataArr = [
            'allDataIndex' => $allDataIndex,
            'oldDataIndex' => $oldDataIndex
        ];

        return $dataArr;
    }

    public function updateCustomFieldNewValues($request, $item, $newDataIndexs){
        foreach ($newDataIndexs as $key3=>$newDataIndex){
            foreach ($request->product_relation as $key => $value){

                if ($key3 == $key) {
                    $itemRelation = new ItemInfo();

                    $file = $this->checkFileInCustomFieldValue($value);

                    $itemRelation->item_id = $item->id;

                    if ($value === false) {
                        $itemRelation->value = 0;
                    }
                    if(is_file($value)) {
                        if (str_contains($value->getMimeType(), 'image')) {
                            $itemRelation->value = $file;
                        }
                    }
                    if(!is_file($value) && $value !== false) {
                        $itemRelation->value = $value;
                    }

                    $customizeHeaders = CustomizeUi::where($this->customUiModuleName, $this->code)->get();
                    foreach ($customizeHeaders as $key2=>$customizeHeader){
                        if($key === $key2){
                            $itemRelation->ui_type_id = $customizeHeader->ui_type_id;
                            $itemRelation->core_keys_id = $customizeHeader->core_keys_id;
                        }
                    }

                    if (Auth::check()) {
                        $itemRelation->added_user_id = Auth::id();
                    } else {
                        $itemRelation->added_user_id = 0;
                    }

                    $itemRelation->save();
                }
            }
        }
    }


    public function checkFileInCustomFieldValue($value){

        if (str_contains($value->getMimeType(),'image')){
            $img = Image::make($value);

            // change file to new name
            $file = uniqid()."_product.".$value->getClientOriginalExtension();

            saveImgAsOriginalThumbNail1x2x3x($value, $file,$this->originPath, $this->thumbnail1xPath, $this->thumbnail2xPath, $this->thumbnail3xPath);

        } else if(str_contains($value->getMimeType(),'video')){
            return __('core__be_video');
        } else {
            return __('core__be_other');
        }
        return $file;
    }

    public function getCoreFieldFilteredLists($code){
        return CoreFieldFilterSetting::where($this->coreFieldFilterModuleNameCol, $code)->get();
    }

    public function deleteCoreFilteredOldData($code){
        $oldcoreFields = CoreFieldFilterSetting::with(["screenDisplayUiSetting"])->where($this->coreFieldFilterModuleNameCol, $code)->get();
        $oldcoreFieldIds = $oldcoreFields->pluck($this->coreFieldFilterIdCol);
        $screenDisplayUiSettingIds = ScreenDisplayUiSetting::whereIn($this->screenDisplayUiKeyCol, $oldcoreFieldIds)->get()->pluck($this->screenDisplayUiIdCol);

        // delete core field from screen_display_ui_settings
        ScreenDisplayUiSetting::destroy($screenDisplayUiSettingIds);

        // delete core field from core_fields
//        foreach ($oldcoreFields as $oldcoreField){
//            $oldcoreField->delete();
//        }
        CoreFieldFilterSetting::destroy($oldcoreFieldIds);
    }

    public function createCoreFieldsForFilter($productCoreLists, $labels, $coreFieldsForFilter, $categories, $subCategories, $locationCities, $locationTownships, $users, $currencies, $shops, $code, $coreFieldFilterForRelation){
        foreach ($productCoreLists as $productCoreListKey=>$productCoreList) {
            foreach ($coreFieldsForFilter as $coreFieldKey => $coreFieldForFilter) {
                if (($coreFieldForFilter !== null && $coreFieldForFilter !== false) && $coreFieldKey == $productCoreListKey) {

                    // save in core_field_filter_settings
                    $coreFieldFilterSetting = $this->saveCoreFieldFilterSettings($labels, $productCoreListKey, $coreFieldKey ,$code, $productCoreList, $categories, $subCategories, $locationCities, $locationTownships, $users, $currencies, $shops, $coreFieldFilterForRelation);

                    // save in screen_display_ui_settings table
                    $this->saveScreenDisplayUiSettings($code, $coreFieldFilterSetting);
                }
            }
        }
    }

    public function saveCoreFieldFilterSettings($labels, $productCoreListKey, $coreFieldKey, $code, $productCoreList, $categories, $subCategories, $locationCities, $locationTownships, $users, $currencies, $shops, $coreFieldFilterForRelation)
    {
        $coreFieldFilterSetting = new CoreFieldFilterSetting();
        $coreFieldFilterSetting->module_name = $code;
        if ($productCoreListKey === $coreFieldKey) {
            if ($productCoreList == $this->itmCatIdCol) {
                $coreFieldFilterSetting->field_name = relationForCoreFieldFilter($productCoreList, $this->itmCatIdCol, $categories, $this->catNameCol, $coreFieldFilterForRelation);
            } elseif ($productCoreList == $this->itmSubCatIdCol) {
                $coreFieldFilterSetting->field_name = relationForCoreFieldFilter($productCoreList, $this->itmSubCatIdCol, $subCategories, $this->subCatNameCol, $coreFieldFilterForRelation);
            } elseif ($productCoreList == $this->itmItemLocationIdCol) {
                $coreFieldFilterSetting->field_name = relationForCoreFieldFilter($productCoreList, $this->itmItemLocationIdCol, $locationCities, $this->locationCityNameCol, $coreFieldFilterForRelation);
            } elseif ($productCoreList == $this->itmItemLocationTownshipIdCol) {
                $coreFieldFilterSetting->field_name = relationForCoreFieldFilter($productCoreList, $this->itmItemLocationTownshipIdCol, $locationTownships, $this->locationTownshipNameCol, $coreFieldFilterForRelation);
            } elseif ($productCoreList == $this->itmUserIdCol) {
                $coreFieldFilterSetting->field_name = relationForCoreFieldFilter($productCoreList, $this->itmUserIdCol, $users, $this->userNameCol, $coreFieldFilterForRelation);
            } elseif ($productCoreList == $this->itmItemCurrencyIdCol) {
                $coreFieldFilterSetting->field_name = relationForCoreFieldFilter($productCoreList, $this->itmItemCurrencyIdCol, $currencies, $this->currencyCurrencyShortFormCol, $coreFieldFilterForRelation);
            } elseif ($productCoreList == $this->itmShopIdCol) {
                $coreFieldFilterSetting->field_name = relationForCoreFieldFilter($productCoreList, $this->itmShopIdCol, $shops, $this->shopNameCol, $coreFieldFilterForRelation);
            } else {
                $coreFieldFilterSetting->field_name = $productCoreList;
            }
        }

        foreach ($labels as $labelKey => $label) {
            if ($coreFieldKey === $labelKey) {
                $coreFieldFilterSetting->label_name = $label;
            }
        }

        $integerFields = ['price', 'ordering', 'lat', 'lng', 'original_price', 'overall_rating', 'status', 'is_available'];
        $dateFields = ['added_date', 'updated_date'];
        if (in_array($coreFieldFilterSetting->field_name, $integerFields)) {
            $coreFieldFilterSetting->data_type = 'Integer';
        } elseif (in_array($coreFieldFilterSetting->field_name, $dateFields)){
            $coreFieldFilterSetting->data_type = 'Date';
        } else {
            $coreFieldFilterSetting->data_type = 'String';
        }

        $coreFieldFilterSetting->save();

        return $coreFieldFilterSetting;
    }

    public function saveScreenDisplayUiSettings($code, $coreFieldFilterSetting){
        $screenDisplayUiSetting = new ScreenDisplayUiSetting();
        $screenDisplayUiSetting->module_name = $code;
        $screenDisplayUiSetting->key = $coreFieldFilterSetting->id;
        $screenDisplayUiSetting->is_show = $this->show;
        $screenDisplayUiSetting->save();

        return $screenDisplayUiSetting;
    }

    public function makeColumnHideShown($request){
        $hideShowFields = $request->value;
//        foreach ($hideShowFields as $hideShowField){
//            $ScreenDisplayUiSetting = ScreenDisplayUiSetting::find($hideShowField[$this->screenDisplayUiIdCol]);
//            $ScreenDisplayUiSetting->is_show = $hideShowField['hidden'] ? $this->hide : $this->show;
//            $ScreenDisplayUiSetting->update();
//        }
        foreach ($hideShowFields as $hideShowField){
            $hideShowFieldData[] = [
                $this->screenDisplayUiIdCol => $hideShowField['id'],
                $this->screenDisplayUiIsShowCol => $hideShowField['hidden'] ? $this->hide : $this->show,
            ];
        }
        ScreenDisplayUiSetting::upsert(
            $hideShowFieldData,
            [$this->screenDisplayUiIdCol], [$this->screenDisplayUiIsShowCol]
        );
    }

    public function hiddenShownForCoreAndCustomField($isShown, $code){
        $hiddenShownForFields = ScreenDisplayUiSetting::with(['customizeField' => function ($q){
            $q->where($this->customUiIsDelCol, $this->unDelete)->where($this->customUiIsDelCol, $this->unDelete);
        }, 'coreField'=> function($q){
            $q->where($this->coreFieldFilterModuleNameCol, $this->code);
        }])
            ->where($this->coreFieldFilterModuleNameCol, $code)
            ->where($this->screenDisplayUiIsShowCol, $isShown)
            ->get();

        return $hiddenShownForFields;
    }

    public function getFilteredCoreFields($code, $limit = null, $offset = null,$isDel = null){
        $coreFields = CoreFieldFilterSetting::when($code, function ($q, $code){
                            $q->where($this->coreFieldFilterModuleNameCol, $code);
                        })
                        ->when($limit, function ($query,$limit){
                            $query->limit($limit);
                        })
                        ->when($isDel !== null, function ($query) use ($isDel){
                            $query->where('is_delete', $isDel);
                        })
                        ->when($offset, function ($query,$offset){
                            $query->offset($offset);
                        })
                        ->get();
        return $coreFields;
    }

    public function getCustomizeFields($code = null, $dataWithRelation = null, $coreKeysId = null, $isDel = null, $limit = null, $offset = null){
        $customizeHeader  =  CustomizeUi::when($dataWithRelation, function ($q, $dataWithRelation){
                                $q->with($dataWithRelation);
                             })
                            ->when($code, function ($q, $code){
                                $q->where($this->customUiModuleName, $code);
                            })
                            ->when($isDel !== null,  function ($q) use ($isDel){
                                $q->where($this->customUiIsDelCol, $isDel);
                            })
                            ->when($limit, function ($query,$limit){
                                $query->limit($limit);
                            })
                            ->when($offset, function ($query,$offset){
                                $query->offset($offset);
                            })
                            ->when($coreKeysId, function ($q, $coreKeysId){
                                $q->where($this->customUiCoreKeysIdCol, $coreKeysId);
                            })
                            ->get();
        return $customizeHeader;
    }

    public function getCustomizeField($code = null, $dataWithRelation = null, $coreKeysId = null){
        $customizeHeader  =  CustomizeUi::when($dataWithRelation, function ($q, $data){
                                $q->with($data);
                            })
                            ->when($code, function ($q, $data){
                                $q->where($this->coreFieldFilterModuleNameCol, $data);
                            })
                            ->when($coreKeysId, function ($q, $data){
                                $q->where($this->customUiCoreKeysIdCol, $data);
                            })
                            ->first();
        return $customizeHeader;
    }

    public function getCustomizeFieldAttrs($customizeHeaderId = null){
        $customizeDetails = CustomizeUiDetail::when($customizeHeaderId,function ($q, $data){
                                    $q->where($this->customUiCoreKeysIdCol, $data);
                                })
                                ->latest()->get();
        return $customizeDetails;
    }

    public function getCustomizeFieldAttr($id){
        $customizeDetail = CustomizeUiDetail::find($id);
        return $customizeDetail;
    }

    public function deleteCustomizeFieldAttrs($customizeDetails){
        if ($customizeDetails->isNotEmpty()) {
            $customizeDetailIds = $customizeDetails->pluck($this->customUiIdCol);
            CustomizeUiDetail::destroy($customizeDetailIds);
        }
    }

    public function getSubCategories(){
        $Subcategory = Category::latest($this->catIdCol)->get();

        return $Subcategory;
    }

    public function getValueByPluck($values, $pluckColumn){
        $pluckedValues = $values->pluck($pluckColumn)->unique()->values();
        return $pluckedValues;
    }

    public function getValuesForCustomizeField($customizeHeaderIds = null, $itemId = null){
        $values = ItemInfo::when($customizeHeaderIds,function ($q, $data){
                                    $q->whereIn($this->itmInfoCoreKeysIdCol, $data);
                                })
                                ->when($itemId, function ($q, $data){
                                    $q->where($this->itmInfoItemIdCol,$data);
                                })
                                ->get();
        return $values;
    }

    public function searching($query, $conds){

        if (isset($conds['keyword']) && $conds['keyword']) {
            $conds['searchterm'] = $conds['keyword'];
        }
        // search term
        if (isset($conds['searchterm']) && $conds['searchterm']) {
            $search = $conds['searchterm'];
            $query->where(function ($query) use ($search) {
                $query->where($this->itmTableName . '.' . $this->itmSearchterm, 'like', '%' . $search . '%')
                    ->orWhere($this->itmTableName . '.' . $this->itmTitleCol, 'like', '%' . $search . '%')
                    ->orWhere($this->itmTableName . '.' . $this->itmDescriptionCol, 'like', '%' . $search . '%');
            });
        }

        // search term
        if (isset($conds['search_buyer_seller']) && $conds['search_buyer_seller']) {

            $search = $conds['search_buyer_seller'];
            if($search){
                $query->join($this->userTableName.' as buyers', 'buyers.'.$this->userIdCol, '=', $this->userBoughtTableName.'.'.$this->userBoughtBuyerUserIdCol);
                $query->join($this->userTableName.' as sellers','sellers.'.$this->userIdCol, '=', $this->userBoughtTableName.'.'.$this->userBoughtSellerUserIdCol);
            }

            $query->where(function ($query) use ($search) {
                $query->where('sellers.'.$this->userNameCol, 'like', '%' . $search . '%');
                $query->orWhere('buyers.'.$this->userNameCol, 'like', '%' . $search . '%');
            });
        }

        if(isset($conds['category_id']) && $conds['category_id']){

            $category_filter=$conds['category_id'];
            $query->whereHas('category', function($q) use($category_filter){
                $q->where($this->itmTableName .'.'.$this->itmCatIdCol, $category_filter);
            });
        }
        if(isset($conds['subcategory_id']) && $conds['subcategory_id']){

            $sub_cat_filter = $conds['subcategory_id'];
            // dd($sub_cat_filter);
            // $query->whereHas('subcategory', function($q) use($sub_cat_filter){
                $query->where('subcategory_id', $sub_cat_filter);
            // });
        }

        if(isset($conds['location_city_id']) && $conds['location_city_id']){
            $city_filter = $conds['location_city_id'];
            $query->whereHas('city', function($q) use($city_filter){
                $q->where($this->itmTableName .'.'.$this->itmItemLocationIdCol, $city_filter);
            });
        }

        if(isset($conds['location_township_id']) && $conds['location_township_id']){
            $township_filter = $conds['location_township_id'];
            $query->whereHas('township', function($q) use($township_filter){
                $q->where($this->itmTableName .'.'.$this->itmItemLocationTownshipIdCol, $township_filter);
            });
        }
        if(isset($conds['currency_id']) && $conds['currency_id']){
            $query->where($this->itmTableName .'.'.$this->itmItemCurrencyIdCol, $conds['currency_id']);
        }
        if(isset($conds['shop_id']) && $conds['shop_id']){
            $query->where($this->itmTableName .'.'.$this->itmShopIdCol, $conds['shop_id']);
        }

        if(isset($conds['status'])){
            $query->where($this->itmTableName .'.'.$this->itmStatusCol, $conds['status']);
            // $query->whereIN('items.id',[8,91,92,93,94,95,96,97,98,100,101,102,103,105,106,107,108,109,110]);



        }
        if(isset($conds['statusFromIndex'])){
            $query->whereIn($this->itmTableName .'.'.$this->itmStatusCol, $conds['statusFromIndex']);

        }

        if(isset($conds['is_available']) ){
            $query->where($this->itmTableName .'.'.$this->itmIsAvailableCol, $conds['is_available']);
        }
        if(isset($conds['is_sold_out']) ){
            $query->where($this->itmTableName .'.'.$this->itmIsSoldOutCol, $conds['is_sold_out']);
        }
        if(isset($conds['is_discount']) ){
            $query->where($this->itmTableName .'.'.$this->itmIsDiscountCol, $conds['is_discount']);
        }
        if(isset($conds['is_paid'])){
            $query->where($this->itmTableName .'.'.$this->itmIsPaidCol, $conds['is_paid']);
        }
        if(isset($conds['price']) ){
            $query->where($this->itmTableName .'.'.$this->itmPriceCol, $conds['price']);
        }
        if (isset($conds['added_user_id']) && $conds['added_user_id']) {
            $query->where($this->itmTableName .'.'.$this->itmAddedUserIdCol, $conds['added_user_id']);
        }
        if(isset($conds['min_price']) ){
            $query->where($this->itmTableName .'.'.$this->itmPriceCol,'>=', $conds['min_price']);
        }
        if(isset($conds['max_price']) ){
            $query->where($this->itmTableName .'.'.$this->itmPriceCol,'<=', $conds['max_price']);
        }
        if (isset($conds['lat']) && $conds['lat'] != '' && isset($conds['lng']) && $conds['lng'] != '') {
            $query->selectRaw("
            ( 3959 * acos( cos( radians(" . $conds['lat'] . ") ) *
            cos( radians(lat) ) *
            cos( radians(lng) - radians(" . $conds['lng'] . ") ) +
            sin( radians(" . $conds['lat'] . ") ) *
            sin( radians(lat) ) ) )
            AS distance");

            if (isset($conds['miles'])) {
                if($conds['miles'] == ''){
                    $conds['miles'] = 0;
                }
                $query->having('distance', '<', $conds['miles']);
            }
        }

        if(isset($conds['added_date_range']) && $conds['added_date_range']){
            $added_date_filter = $conds['added_date_range'];
            if($added_date_filter[1] == ''){
                $added_date_filter[1] = Carbon::now();
            }
            $query->whereBetween('psx_items.added_date', $added_date_filter);
        }

        if(isset($conds['updated_date_range']) && $conds['updated_date_range']){
            $updated_date_filter = $conds['updated_date_range'];
            if($updated_date_filter[1] == ''){
                $updated_date_filter[1] = Carbon::now();
            }
            $query->whereBetween('psx_items.updated_date', $updated_date_filter);
        }

        if (isset($conds['product_relation']) && !empty($conds['product_relation'])) {

            $customizeUis = CustomizeUi::where('module_name', 'itm')->latest()->get();
            foreach ($conds['product_relation'] as $key => $value) {
                if(!empty($value['value'])){
                    foreach ($customizeUis as $CustomizeUiDetail) {
                        if($value['core_keys_id'] == $CustomizeUiDetail->core_keys_id){
                            if ($CustomizeUiDetail->ui_type_id == $this->dropDownUi || $CustomizeUiDetail->ui_type_id == $this->radioUi || $CustomizeUiDetail->ui_type_id == $this->multiSelectUi) {
                                $detail = CustomizeUiDetail::find($value['value']);

                                if($detail){
                                    $query->having($value['core_keys_id'] . '@@name', $detail->name);
                                }
                            } else {
                                $detail = CustomizeUiDetail::find($value['value']);
                                if($detail){
                                    $query->having($value['core_keys_id'], $detail->name);
                                }
                            }
                        }
                    }
                }
            }
        }

        // order by
        if (isset($conds['order_by']) && isset($conds['order_type']) && $conds['order_by'] && $conds['order_type']){
            if($conds['order_by'] == 'id'){
                $query->orderBy($this->itmTableName.'.'.$this->itmIdCol, $conds['order_type']);
            }elseif($conds['order_by'] == 'category_id@@name'){
                $query->orderBy('cat_name', $conds['order_type']);
            }elseif($conds['order_by'] == 'subcategory_id@@name'){
                $query->orderBy('sub_cat_name', $conds['order_type']);
            }elseif($conds['order_by'] == 'currency_id@@currency_short_form'){
                $query->orderBy('curr_short_form', $conds['order_type']);
            }elseif($conds['order_by'] == 'location_city_id@@name'){
                $query->orderBy('city_name', $conds['order_type']);
            }elseif($conds['order_by'] == 'location_township_id@@name'){
                $query->orderBy('township_name', $conds['order_type']);
            }elseif($conds['order_by'] == 'added_user_id@@name'){
                $query->orderBy('owner_name', $conds['order_type']);
            }elseif($conds['order_by'] == 'buyer_user_id@@name'){
                $query->orderBy('buyer_name', $conds['order_type']);
            }elseif($conds['order_by'] == 'seller_user_id@@name'){
                $query->orderBy('seller_name', $conds['order_type']);
            }elseif($conds['order_by'] == 'added_date'){
                $query->orderBy($this->itmTableName.'.'.$this->itmAddedDateCol, $conds['order_type']);
            }
            elseif($conds['order_by'] == 'item_touch_count'){
                $query->orderBy($this->itmTableName.'.'.$this->itmItemTouchCountCol, $conds['order_type']);
            }else{
                $query->orderBy($conds['order_by'], $conds['order_type']);
            }
        }else{
            $query->orderBy($this->itmTableName.'.'.$this->itmTitleCol, 'asc');
        }
// echo json_encode($query);exit;
        return $query;
    }

    public function searchingSuccessfulDealCountItem($query, $conds){
        if (isset($conds['keyword']) && $conds['keyword']) {
            $conds['searchterm'] = $conds['keyword'];
        }
        // search term
        if (isset($conds['searchterm']) && $conds['searchterm']) {
            $search = $conds['searchterm'];
            $query->where(function ($query) use ($search) {
                $query->where($this->itmTableName . '.' . $this->itmSearchterm, 'like', '%' . $search . '%')
                    ->orWhere($this->itmTableName . '.' . $this->itmTitleCol, 'like', '%' . $search . '%')
                    ->orWhere($this->itmTableName . '.' . $this->itmDescriptionCol, 'like', '%' . $search . '%');
            });
        }

        if(isset($conds['category_id']) && $conds['category_id']){
            $category_filter=$conds['category_id'];
            $query->whereHas('category', function($q) use($category_filter){
                $q->where($this->itmTableName .'.'.$this->itmCatIdCol, $category_filter);
            });
        }
        if(isset($conds['subcategory_id']) && $conds['subcategory_id']){
            $sub_cat_filter = $conds['subcategory_id'];
            $query->whereHas('subcategory', function($q) use($sub_cat_filter){
                $q->where($this->itmTableName .'.'.$this->itmSubCatIdCol, $sub_cat_filter);
            });
        }

        if(isset($conds['location_city_id']) && $conds['location_city_id']){
            $city_filter = $conds['location_city_id'];
            $query->whereHas('city', function($q) use($city_filter){
                $q->where($this->itmTableName .'.'.$this->itmItemLocationIdCol, $city_filter);
            });
        }

        if(isset($conds['location_township_id']) && $conds['location_township_id']){
            $township_filter = $conds['location_township_id'];
            $query->whereHas('township', function($q) use($township_filter){
                $q->where($this->itmTableName .'.'.$this->itmItemLocationTownshipIdCol, $township_filter);
            });
        }
        if(isset($conds['currency_id']) && $conds['currency_id']){
            $query->where($this->itmTableName .'.'.$this->itmItemCurrencyIdCol, $conds['currency_id']);
        }
        if(isset($conds['shop_id']) && $conds['shop_id']){
            $query->where($this->itmTableName .'.'.$this->itmShopIdCol, $conds['shop_id']);
        }
        if(isset($conds['status'])){
            $query->where($this->itmTableName .'.'.$this->itmStatusCol, $conds['status']);
        }

        if(isset($conds['is_available']) ){
            $query->where($this->itmTableName .'.'.$this->itmIsAvailableCol, $conds['is_available']);
        }
        if(isset($conds['is_sold_out']) ){
            $query->where($this->itmTableName .'.'.$this->itmIsSoldOutCol, $conds['is_sold_out']);
        }
        if(isset($conds['is_discount']) ){
            $query->where($this->itmTableName .'.'.$this->itmIsDiscountCol, $conds['is_discount']);
        }
        if(isset($conds['is_paid'])){
            $query->where($this->itmTableName .'.'.$this->itmIsPaidCol, $conds['is_paid']);
        }
        if(isset($conds['price']) ){
            $query->where($this->itmTableName .'.'.$this->itmPriceCol, $conds['price']);
        }
        if (isset($conds['added_user_id']) && $conds['added_user_id']) {
            $query->where($this->itmTableName .'.'.$this->itmAddedUserIdCol, $conds['added_user_id']);
        }
        if(isset($conds['min_price']) ){
            $query->where($this->itmTableName .'.'.$this->itmPriceCol,'>=', $conds['min_price']);
        }
        if(isset($conds['max_price']) ){
            $query->where($this->itmTableName .'.'.$this->itmPriceCol,'<=', $conds['max_price']);
        }
        if (isset($conds['lat']) && $conds['lat'] != '' && isset($conds['lng']) && $conds['lng'] != '') {
            $query->selectRaw("
            ( 3959 * acos( cos( radians(" . $conds['lat'] . ") ) *
            cos( radians(lat) ) *
            cos( radians(lng) - radians(" . $conds['lng'] . ") ) +
            sin( radians(" . $conds['lat'] . ") ) *
            sin( radians(lat) ) ) )
            AS distance");

            if (isset($conds['miles'])) {
                if($conds['miles'] == ''){
                    $conds['miles'] = 0;
                }
                $query->having('distance', '<', $conds['miles']);
            }
        }

        if (isset($conds['product_relation']) && !empty($conds['product_relation'])) {
            $customizeUis = CustomizeUi::where($this->customUiModuleName, 'itm')->latest()->get();
            foreach ($conds['product_relation'] as $key => $value) {

                if(!empty($value['value'])){
                    foreach ($customizeUis as $CustomizeUiDetail) {
                        if($value['core_keys_id'] == $CustomizeUiDetail->core_keys_id){
                            if ($CustomizeUiDetail->ui_type_id == $this->dropDownUi || $CustomizeUiDetail->ui_type_id == $this->radioUi || $CustomizeUiDetail->ui_type_id == $this->multiSelectUi) {
                                $detail = CustomizeUiDetail::find($value['value']);
                                if($detail){
                                    $query->having($value['core_keys_id'] . '@@name', $detail->name);
                                }
                            } else {
                                $detail = CustomizeUiDetail::find($value['value']);
                                if($detail){
                                    $query->having($value['core_keys_id'], $detail->name);
                                }
                            }
                        }
                    }
                }
            }
        }

        // order by
        if (isset($conds['order_by']) && isset($conds['order_type']) && $conds['order_by'] && $conds['order_type']){
            if($conds['order_by'] == 'id'){
                $query->orderBy($this->itmTableName.'.'.$this->itmIdCol, $conds['order_type']);
            }elseif($conds['order_by'] == 'category_id@@name'){
                $query->orderBy('cat_name', $conds['order_type']);
            }elseif($conds['order_by'] == 'subcategory_id@@name'){
                $query->orderBy('sub_cat_name', $conds['order_type']);
            }elseif($conds['order_by'] == 'currency_id@@currency_short_form'){
                $query->orderBy('curr_short_form', $conds['order_type']);
            }elseif($conds['order_by'] == 'location_city_id@@name'){
                $query->orderBy('city_name', $conds['order_type']);
            }elseif($conds['order_by'] == 'location_township_id@@name'){
                $query->orderBy('township_name', $conds['order_type']);
            }elseif($conds['order_by'] == 'added_user_id@@name'){
                $query->orderBy('owner_name', $conds['order_type']);
            }else{
                $query->orderBy($this->itmTableName .'.' . $conds['order_by'], $conds['order_type']);
            }
        }

        return $query;
    }

    public function getSqlForCustomField(){
        $sql = "";
        $customizeUis = CustomizeUi::where($this->customUiModuleName, 'itm')->latest()->get();

        // $CustomizeUiDetails = CustomizeUiDetail::latest()->get();
        $customizeuideatil_array = [];
        // $customizeuideatil_sql = "";

        foreach ($customizeUis as $CustomizeUiDetail) {
            if ($CustomizeUiDetail->ui_type_id == $this->dropDownUi || $CustomizeUiDetail->ui_type_id == $this->radioUi || $CustomizeUiDetail->ui_type_id == $this->multiSelectUi) {
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

    public function getItems($relation, $noPagination = null, $pagPerPage = null, $limit = null, $offset = null, $conds = null, $condsIn = null, $condsNotIn = null, $sort = null, $extra = null)
    {
        $sql = $this->getSqlForCustomField();



        // $item_ids=Item::pluck('id');
        // $conds['items_pluck_ids'] = $item_ids;
        // dd($item_ids);
        $sort = '';
        // $pagPerPage = null;
        if(isset($conds['order_by'])){
            $sort = $conds['order_by'];
        }
        // $items = Item::where('status',1)->get();
        // return $items;

        $items = Item::select($this->itmTableName.'.*')
        ->when(isset($conds['order_by']) && $conds['order_by'] , function ($q) use($sort){
            if($sort == 'category_id@@name')
            {
                $q->join($this->catTableName, "$this->catTableName.$this->catIdCol", '=', $this->itmTableName.'.'.$this->itmCatIdCol);
                $q->select("$this->catTableName.$this->catNameCol as cat_name", "$this->itmTableName.*");
            }
            if($sort == 'subcategory_id@@name')
            {
                $q->join($this->subCatTableName, "$this->subCatTableName.$this->subCatIdCol", '=', $this->itmTableName.'.'.$this->itmSubCatIdCol);
                $q->select("$this->subCatTableName.$this->subCatNameCol as sub_cat_name", "$this->itmTableName.*");
            }
            if($sort == 'location_city_id@@name')
            {
                $q->join($this->locationCityTableName, "$this->locationCityTableName.$this->locationCityIdCol", '=', $this->itmTableName.'.'.$this->itmItemLocationIdCol);
                $q->select("$this->locationCityTableName.$this->locationCityNameCol as city_name", "$this->itmTableName.*");
            }
            if($sort == 'location_township_id@@name')
            {
                $q->join($this->locationTownshipTableName, "$this->locationTownshipTableName.$this->locationTownshipIdCol", '=',$this->itmTableName.'.'.$this->itmItemLocationTownshipIdCol);
                $q->select("$this->locationTownshipTableName.$this->locationTownshipNameCol as township_name","$this->itmTableName.*");
            }
            if($sort == 'currency_id@@currency_short_form')
            {
                $q->join($this->currencyTableName, "$this->currencyTableName.$this->currencyIdCol", '=',$this->itmTableName.'.'.$this->itmItemCurrencyIdCol);
                $q->select("$this->currencyTableName.$this->currencyCurrencyShortFormCol as curr_short_form","$this->itmTableName.*");
            }
            if($sort == 'added_user_id@@name')
            {
                $q->join($this->userTableName,"$this->userTableName.$this->userIdCol",'=',$this->itmTableName .'.'.$this->itmUserIdCol);
                $q->select("$this->userTableName.$this->userNameCol as owner_name","$this->itmTableName.*");
            }
        })


        // ->join($this->itmInfoTableName, $this->itmTableName.'.'.$this->itmIdCol,'=',$this->itmInfoTableName.'.'.$this->itmInfoItemIdCol)
        ->leftJoin($this->itmInfoTableName, function($join){
            $join->on($this->itmTableName.'.'.$this->itmIdCol,'=',$this->itmInfoTableName.'.'.$this->itmInfoItemIdCol);
        })

        // ->join('customize_ui_details','item_infos.value','=','customize_ui_details.id')
        ->when($sql, function($query, $sql){
            $query->selectRaw($sql);
        })

        ->leftJoin($this->customUiDetailTableName, "$this->itmInfoTableName.$this->itmInfoValueCol", '=', "$this->customUiDetailTableName.$this->customUiDetailIdCol")
        ->groupBy($this->itmTableName.'.'.$this->itmIdCol)
        ->when($relation, function ($q, $relation) {
            $q->with($relation);
        })
        ->when($limit, function ($query, $limit) {
            $query->limit($limit);
        })->when($conds, function ($query, $conds) {
            $query = $this->searching($query, $conds);
        })->when($condsIn, function ($query, $condsIn) {
            if (isset($condsIn['ids']))
                $query->whereIn($this->itmTableName.'.'.$this->itmIdCol, $condsIn['ids']);

            if (isset($condsIn['added_user_ids']))
                $query->whereIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsIn['added_user_ids']);

        })->when($condsNotIn, function ($query, $condsNotIn) {
            if (isset($condsNotIn['complaintItemIds']))
                $query->whereNotIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsNotIn['complaintItemIds']);

            if (isset($condsNotIn['blockUserIds']))
                $query->whereNotIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsNotIn['blockUserIds']);
        })
        ->when($offset, function ($query, $offset) {

            $query->offset($offset);
        })
        ->when($extra, function ($query, $extra) {
            if($extra == 'itemReport'){
                $query->orderBy($this->itmItemTouchCountCol, 'desc');
                $query->orderBy($this->itmFavouriteCountCol, 'desc');
            }
        })
        ->when(empty($sort), function ($query, $extra) {
            $query->orderBy("$this->itmTableName.$this->itmTitleCol", 'desc')
            ->orderBy("$this->itmTableName.$this->itmStatusCol", 'desc');

        });
        // ->latest($this->itmTableName .'.' . 'added_date');

        if ($pagPerPage){

            // $items_chunk = $items->chunk(10, function($items) {
            //     foreach ($items as $item) {
            //         $items = $item;
            //     }
            // });

            $items = $items->paginate($pagPerPage)->withQueryString();
            // $items = $items->get();
        } elseif ($noPagination){
            $items = $items->get();
        }else{
            $items = $items->get();
        }
        // dd($items);


        return $items;
    }
    public function getSuccessfulDealItem($id, $relations = null){
        $item = Item::select($this->itmTableName.'.*', "$this->userBoughtTableName.$this->userBoughtBuyerUserIdCol", "$this->userBoughtTableName.$this->userBoughtSellerUserIdCol")
                ->leftJoin($this->itmInfoTableName, $this->itmTableName.'.'.$this->itmIdCol,'=',$this->itmInfoTableName.'.'.$this->itmInfoItemIdCol)
                ->leftJoin($this->customUiDetailTableName,"$this->itmInfoTableName.$this->itmInfoValueCol",'=',"$this->customUiDetailTableName.$this->customUiDetailIdCol")
                ->join($this->userBoughtTableName, "$this->userBoughtTableName.$this->userBoughtItemIdCol",'=',$this->itmTableName.'.'.$this->itmIdCol)
                ->groupBy($this->itmTableName.'.'.$this->itmIdCol, "$this->userBoughtTableName.$this->userBoughtBuyerUserIdCol", "$this->userBoughtTableName.$this->userBoughtSellerUserIdCol")
                ->where($this->itmTableName.'.'.$this->itmIdCol, $id)
                ->when($relations, function ($query, $relations) {
                    $query->with($relations);
                })
                ->get();

        return $item;
    }

    public function getSuccessfulDealItems($relation, $noPagination = null, $pagPerPage = null, $limit = null, $offset = null, $conds = null, $condsIn = null, $condsNotIn = null, $sort = null)
    {
        // dd($conds);
        $sql = $this->getSqlForCustomField();

        $sort = '';
        if(isset($conds['order_by'])){
            $sort = $conds['order_by'];
        }
        $items = Item::select($this->itmTableName.'.*', "$this->userBoughtTableName.$this->userBoughtBuyerUserIdCol", "$this->userBoughtTableName.$this->userBoughtSellerUserIdCol")
        ->leftJoin($this->itmInfoTableName, $this->itmTableName.'.'.$this->itmIdCol,'=',$this->itmInfoTableName.'.'.$this->itmInfoItemIdCol)
        ->leftJoin($this->customUiDetailTableName,"$this->itmInfoTableName.$this->itmInfoValueCol",'=',"$this->customUiDetailTableName.$this->customUiDetailIdCol")
        ->join('psx_user_boughts','psx_user_boughts.item_id','=',$this->itmTableName.'.'.$this->itmIdCol)
        ->groupBy($this->itmTableName.'.'.$this->itmIdCol, "$this->userBoughtTableName.$this->userBoughtBuyerUserIdCol", "$this->userBoughtTableName.$this->userBoughtSellerUserIdCol")
        ->when(isset($conds['order_by']) && $conds['order_by'] , function ($q) use($sort){
            if($sort == 'category_id@@name')
            {
                $q->join($this->catTableName, "$this->catTableName.$this->catIdCol", '=', $this->itmCatIdCol);
                $q->select("$this->catTableName.$this->catNameCol as cat_name", "$this->itmTableName.*");
            }
            if($sort == 'subcategory_id@@name')
            {
                $q->join($this->subCatTableName, "$this->subCatTableName.$this->subCatIdCol",'=', $this->itmSubCatIdCol);
                $q->select("$this->subCatTableName.$this->subCatNameCol as sub_cat_name", "$this->itmTableName.*");
            }
            if($sort == 'location_city_id@@name')
            {
                $q->join($this->locationCityTableName, "$this->locationCityTableName.$this->locationCityIdCol",'=', $this->itmItemLocationIdCol);
                $q->select("$this->locationCityTableName.$this->locationCityNameCol as city_name","$this->itmTableName.*");
            }
            if($sort == 'location_township_id@@name')
            {
                $q->join($this->locationTownshipTableName, "$this->locationTownshipTableName.$this->locationTownshipIdCol",'=', $this->itmItemLocationTownshipIdCol);
                $q->select("$this->locationTownshipTableName.$this->locationTownshipNameCol as township_name","$this->itmTableName.*");
            }
            if($sort == 'currency_id@@currency_short_form')
            {
                $q->join($this->currencyTableName, "$this->currencyTableName.$this->currencyIdCol", '=', $this->itmItemCurrencyIdCol);
                $q->select("$this->currencyTableName.$this->currencyCurrencyShortFormCol as curr_short_form","$this->itmTableName.*");
            }
            if($sort == 'added_user_id@@name')
            {
                $q->join($this->userTableName, "$this->userTableName.$this->userIdCol", '=', "added_user_id");
                $q->select("$this->userTableName.$this->userNameCol as owner_name", "$this->itmTableName.*");
            }
            if($sort == 'buyer_user_id@@name')
            {
                $q->join($this->userTableName, "$this->userTableName.$this->userIdCol", '=', 'buyer_user_id');
                $q->select("$this->userTableName.$this->userNameCol as buyer_name", "$this->itmTableName.*");
            }
            if($sort == 'seller_user_id@@name')
            {
                $q->join($this->userTableName, "$this->userTableName.$this->userIdCol", '=', 'seller_user_id');
                $q->select("$this->userTableName.$this->userNameCol as seller_name", "$this->itmTableName.*");
            }
        })
        ->when($sql, function($query, $sql){
            $query->selectRaw($sql);
        })

        ->when($relation, function ($q, $relation) {
            $q->with($relation);
        })
        ->when($limit, function ($query, $limit) {
            $query->limit($limit);
        })->when($conds, function ($query, $conds) {
            $query = $this->searching($query, $conds);
        })->when($condsIn, function ($query, $condsIn) {
            if (isset($condsIn['ids']))
                $query->whereIn($this->itmTableName.'.'.$this->itmIdCol, $condsIn['ids']);

            if (isset($condsIn['added_user_ids']))
                $query->whereIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsIn['added_user_ids']);

        })->when($condsNotIn, function ($query, $condsNotIn) {
            if (isset($condsNotIn['complaintItemIds']))
                $query->whereNotIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsNotIn['complaintItemIds']);

            if (isset($condsNotIn['blockUserIds']))
                $query->whereNotIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsNotIn['blockUserIds']);
        })
        ->when($offset, function ($query, $offset) {
            $query->offset($offset);
        })
        ->when(empty($sort), function ($query, $conds){
            $query->orderBy("$this->itmTableName.$this->itmTitleCol", 'asc');
        });

        if ($pagPerPage){
            $items = $items->paginate($pagPerPage)->onEachSide(1)->withQueryString();
        } elseif ($noPagination){
            $items = $items->get();
        }
        return $items;
    }

    public function getSlowMovingItems($relation, $noPagination = null, $pagPerPage = null, $limit = null, $offset = null, $conds = null, $condsIn = null, $condsNotIn = null, $sort = null, $extra = null)
    {
        $sql = $this->getSqlForCustomField();

        $sort = '';
        if(isset($conds['order_by'])){
            $sort = $conds['order_by'];
        }

        $slow_moving_item_limit = $this->backendSettingService->getBackendSetting()->slow_moving_item_limit;

        $items = Item::select($this->itmTableName.'.*')
        ->when(isset($conds['order_by']) && $conds['order_by'] , function ($q) use($sort){
            if($sort == 'category_id@@name')
            {
                $q->join($this->catTableName,'psx_categories.id','=',$this->itmTableName.'.'.'category_id');
                $q->select('psx_categories.name as cat_name','psx_items.*');
            }
            if($sort == 'subcategory_id@@name')
            {
                $q->join($this->subCatTableName,'psx_subcategories.id','=',$this->itmTableName.'.'.'subcategory_id');
                $q->select('psx_subcategories.name as sub_cat_name','psx_items.*');
            }
            if($sort == 'location_city_id@@name')
            {
                $q->join($this->locationCityTableName,'psx_location_cities.id','=',$this->itmTableName.'.'.'location_city_id');
                $q->select('psx_location_cities.name as city_name','psx_items.*');
            }
            if($sort == 'location_township_id@@name')
            {
                $q->join($this->locationCityTableName,'psx_location_townships.id','=',$this->itmTableName.'.'.'location_township_id');
                $q->select('psx_location_townships.name as township_name','psx_items.*');
            }
            if($sort == 'currency_id@@currency_short_form')
            {
                $q->join($this->currencyTableName,'psx_currencies.id','=',$this->itmTableName.'.'.'currency_id');
                $q->select('psx_currencies.currency_short_form as curr_short_form','psx_items.*');
            }
            if($sort == 'added_user_id@@name')
            {
                $q->join($this->userTableName,'users.id','=',$this->itmTableName .'.'. 'added_user_id');
                $q->select('users.name as owner_name','psx_items.*');
            }
        })
        ->when($sql, function($query, $sql){
            $query->selectRaw($sql);
        })
        ->where('psx_items.added_date', '<=', Carbon::now()->subDays($slow_moving_item_limit))
        ->leftJoin($this->itmInfoTableName, $this->itmTableName.'.'.$this->itmIdCol,'=',$this->itmInfoTableName.'.'.$this->itmInfoItemIdCol)
        ->leftJoin($this->customUiDetailTableName,"$this->itmInfoTableName.$this->itmInfoValueCol",'=',"$this->customUiDetailTableName.$this->customUiDetailIdCol")
        ->groupBy($this->itmTableName.'.'.$this->itmIdCol)
        ->when($relation, function ($q, $relation) {
            $q->with($relation);
        })
        ->when($limit, function ($query, $limit) {
            $query->limit($limit);
        })->when($conds, function ($query, $conds) {
            $query = $this->searching($query, $conds);
        })->when($condsIn, function ($query, $condsIn) {
            if (isset($condsIn['ids']))
                $query->whereIn($this->itmTableName.'.'.$this->itmIdCol, $condsIn['ids']);

            if (isset($condsIn['added_user_ids']))
                $query->whereIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsIn['added_user_ids']);

        })->when($condsNotIn, function ($query, $condsNotIn) {
            if (isset($condsNotIn['complaintItemIds']))
                $query->whereNotIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsNotIn['complaintItemIds']);

            if (isset($condsNotIn['blockUserIds']))
                $query->whereNotIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsNotIn['blockUserIds']);
        })
        ->when($offset, function ($query, $offset) {
            $query->offset($offset);

        })
        ->when($extra, function ($query, $extra) {
            if($extra == 'itemReport'){
                $query->orderBy('item_touch_count', 'desc');
                $query->orderBy('favourite_count', 'desc');
            }
        })
        ->when(empty($sort), function ($query, $conds){
            $query->orderBy('psx_items.status', 'desc')->orderBy('psx_items.title', 'asc');
        })
        ->latest($this->itmTableName .'.' . 'added_date');


        if ($pagPerPage){
            $items = $items->paginate($pagPerPage)->onEachSide(1)->withQueryString();
        } elseif ($noPagination){
            $items = $items->get();
        }else{
            $items = $items->get();
        }
        return $items;
    }

    public function getSoldOutItems($relation, $noPagination = null, $pagPerPage = null, $limit = null, $offset = null, $conds = null, $condsIn = null, $condsNotIn = null, $sort = null)
    {
        $sql = $this->getSqlForCustomField();

        $idList = [];

        $userboughts = UserBought::all();

        foreach($userboughts as $userbought){
            if(!in_array($userbought->item_id,$idList)){
                array_push($idList,$userbought->item_id);
            }
        }

        $sort = '';
        if(isset($conds['order_by'])){
            $sort = $conds['order_by'];
        }

        // $items = Item::select($this->itmTableName.'.*')
        // ->when(isset($conds['order_by']) && $conds['order_by'] , function ($q) use($sort){
        //     if($sort == 'category_id@@name')
        //     {
        //         $q->join('psx_categories','psx_categories.id','=','category_id');
        //         $q->select('psx_categories.name as cat_name','psx_items.*');
        //     }
        //     if($sort == 'subcategory_id@@name')
        //     {
        //         $q->join('psx_subcategories','psx_subcategories.id','=','subcategory_id');
        //         $q->select('psx_subcategories.name as sub_cat_name','psx_items.*');
        //     }
        //     if($sort == 'location_city_id@@name')
        //     {
        //         $q->join('psx_location_cities','psx_location_cities.id','=','location_city_id');
        //         $q->select('psx_location_cities.name as city_name','psx_items.*');
        //     }
        //     if($sort == 'location_township_id@@name')
        //     {
        //         $q->join('psx_location_townships','psx_location_townships.id','=','location_township_id');
        //         $q->select('psx_location_townships.name as township_name','psx_items.*');
        //     }
        //     if($sort == 'currency_id@@currency_short_form')
        //     {
        //         $q->join('psx_currencies','psx_currencies.id','=','currency_id');
        //         $q->select('psx_currencies.currency_short_form as curr_short_form','psx_items.*');
        //     }
        //     if($sort == 'added_user_id@@name')
        //     {
        //         $q->join('users','users.id','=','added_user_id');
        //         $q->select('users.name as owner_name','psx_items.*');
        //     }
        // })
        // ->when($sql, function($query, $sql){
        //     $query->selectRaw($sql);
        // })
        // ->leftJoin($this->itmInfoTableName, $this->itmTableName.'.'.$this->itmIdCol,'=',$this->itmInfoTableName.'.'.$this->itmInfoItemIdCol)
        // ->leftJoin($this->customUiDetailTableName,"$this->$this->itmInfoTableName.$this->$this->itmInfoValueCol",'=',"psx_cus$this->$this->customUiDetailTableName>$this->customUiDetailIdCol")
        // ->join('psx_user_boughts','psx_user_boughts.item_id','=',$this->itmTableName.'.'.$this->itmIdCol)
        // ->groupBy($this->itmTableName.'.'.$this->itmIdCol)
        // ->when($relation, function ($q, $relation) {
        //     $q->with($relation);
        // })
        // ->when($limit, function ($query, $limit) {
        //     $query->limit($limit);
        // })
        // ->when($conds, function ($query, $conds) {
        //     $query = $this->searching($query, $conds);
        // })
        // ->when($condsIn, function ($query, $condsIn) {
        //     if (isset($condsIn['ids']))
        //         $query->whereIn($this->itmTableName.'.'.$this->itmIdCol, $condsIn['ids']);

        //     if (isset($condsIn['added_user_ids']))
        //         $query->whereIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsIn['added_user_ids']);

        // })
        // ->when($condsNotIn, function ($query, $condsNotIn) {
        //     if (isset($condsNotIn['complaintItemIds']))
        //         $query->whereNotIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsNotIn['complaintItemIds']);

        //     if (isset($condsNotIn['blockUserIds']))
        //         $query->whereNotIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsNotIn['blockUserIds']);
        // })
        // ->when($offset, function ($query, $offset) {
        //     $query->offset($offset);
        // })
        // ->orderBy('item_touch_count', 'desc')
        // ->orderBy('favourite_count', 'desc')
        // ->latest();

        $items = Item::select($this->itmTableName.'.*')
        ->when(isset($conds['order_by']) && $conds['order_by'] , function ($q) use($sort){
            if($sort == 'category_id@@name')
            {
                $q->join($this->catTableName,'psx_categories.id','=','category_id');
                $q->select('psx_categories.name as cat_name','psx_items.*');
            }
            if($sort == 'subcategory_id@@name')
            {
                $q->join($this->subCatTableName,'psx_subcategories.id','=','subcategory_id');
                $q->select('psx_subcategories.name as sub_cat_name','psx_items.*');
            }
            if($sort == 'location_city_id@@name')
            {
                $q->join($this->locationCityTableName,'psx_location_cities.id','=','location_city_id');
                $q->select('psx_location_cities.name as city_name','psx_items.*');
            }
            if($sort == 'location_township_id@@name')
            {
                $q->join($this->locationTownshipTableName,'psx_location_townships.id','=','location_township_id');
                $q->select('psx_location_townships.name as township_name','psx_items.*');
            }
            if($sort == 'currency_id@@currency_short_form')
            {
                $q->join($this->currencyTableName,'psx_currencies.id','=','currency_id');
                $q->select('psx_currencies.currency_short_form as curr_short_form','psx_items.*');
            }
            if($sort == 'added_user_id@@name')
            {
                $q->join($this->userTableName,'users.id','=','added_user_id');
                $q->select('users.name as owner_name','psx_items.*');
            }
        })
        ->when($sql, function($query, $sql){
            $query->selectRaw($sql);
        })
        ->leftJoin($this->itmInfoTableName, $this->itmTableName.'.'.$this->itmIdCol,'=',$this->itmInfoTableName.'.'.$this->itmInfoItemIdCol)
        ->leftJoin($this->customUiDetailTableName,"$this->itmInfoTableName.$this->itmInfoValueCol",'=',"$this->customUiDetailTableName.$this->customUiDetailIdCol")
        ->where('is_sold_out', 1)
        ->orWhereIn('psx_items.id',$idList)
        ->groupBy($this->itmTableName.'.'.$this->itmIdCol)
        ->when($relation, function ($q, $relation) {
            $q->with($relation);
        })
        ->when($limit, function ($query, $limit) {
            $query->limit($limit);
        })->when($conds, function ($query, $conds) {
            $query = $this->searching($query, $conds);
        })->when($condsIn, function ($query, $condsIn) {
            if (isset($condsIn['ids']))
                $query->whereIn($this->itmTableName.'.'.$this->itmIdCol, $condsIn['ids']);

            if (isset($condsIn['added_user_ids']))
                $query->whereIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsIn['added_user_ids']);

        })->when($condsNotIn, function ($query, $condsNotIn) {
            if (isset($condsNotIn['complaintItemIds']))
                $query->whereNotIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsNotIn['complaintItemIds']);

            if (isset($condsNotIn['blockUserIds']))
                $query->whereNotIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsNotIn['blockUserIds']);
        })
        ->when($offset, function ($query, $offset) {
            $query->offset($offset);
        })
        ->latest();

        // $items = $items->union($soldOutItems);
        if ($pagPerPage){
            $items = $items->paginate($pagPerPage)->onEachSide(1)->withQueryString();
        } elseif ($noPagination){
            $items = $items->get();
        }
        return $items;
    }

    public function getPaidItems($relation, $limit = null, $offset = null, $conds = null, $condsNotIn = null)
    {
        $today = Carbon::now();
        $todayDate = $today->toDateTimeString();
        $sql = $this->getSqlForCustomField();
        $paidItems = Item::select($this->itmTableName.'.*')
                    ->when($sql, function($query, $sql){
                        $query->selectRaw($sql);
                    })
                    ->leftJoin($this->paidItmTableName, $this->itmTableName.'.'.$this->itmIdCol, '=', $this->paidItmTableName.'.'.$this->paidItmItemIdCol)
                    ->leftJoin($this->itmInfoTableName, $this->itmTableName.'.'.$this->itmIdCol,'=',$this->itmInfoTableName.'.'.$this->itmInfoItemIdCol)
                    ->leftJoin($this->customUiDetailTableName,"$this->itmInfoTableName.$this->itmInfoValueCol",'=',"$this->customUiDetailTableName.$this->customUiDetailIdCol")
                    ->groupBy($this->itmTableName.'.'.$this->itmIdCol)
                    ->where("$this->itmTableName.$this->itmIsPaidCol", '=', 1 )
                    ->where("$this->paidItmTableName.$this->paidItmStartDateCol", '<=', $todayDate )
                    ->where($this->paidItmTableName.'.'.$this->paidItmEndDateCol, '>=', $todayDate )
                    ->when($relation, function ($query, $relation) {
                        $query->with($relation);
                    })
                    ->when($conds, function ($query, $conds) {
                        $query = $this->searching($query, $conds);
                    })
                    ->when($condsNotIn, function ($query, $condsNotIn) {
                        if (isset($condsNotIn['complaintItemIds']))
                            $query->whereNotIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsNotIn['complaintItemIds']);

                        if (isset($condsNotIn['blockUserIds']))
                            $query->whereNotIn($this->itmTableName.'.'.$this->itmAddedUserIdCol, $condsNotIn['blockUserIds']);
                    })
                    ->when($limit, function ($query, $limit) {
                        $query->limit($limit);
                    })
                    ->when($offset, function ($query, $offset) {
                        $query->offset($offset);
                    })
                    ->distinct()
                    ->latest()
                    ->get();
        return $paidItems;
    }

    public function getNormalItems($relation, $limit = null, $offset = null, $conds = null, $condsNotIn = null)
    {
        

        $today = Carbon::now();

        $todayDate = $today->toDateTimeString();
        $sql = $this->getSqlForCustomField();

        $paidItemIds = PaidItemHistory::where($this->paidItmStatusCol, '=', 1 )
        ->where($this->paidItmTableName.'.'.$this->paidItmStartDateCol, '<=', $todayDate )
        ->where($this->paidItmTableName.'.'.$this->paidItmEndDateCol, '>=', $todayDate )
        ->get()->pluck($this->paidItmItemIdCol);

        $normalItems = Item::select($this->itmTableName.'.*')
                    ->when($sql, function($query, $sql){
                        $query->selectRaw($sql);
                    })
                    // ->leftJoin($this->paidItmTableName, $this->itmTableName.'.'.$this->itmIdCol, '=', $this->paidItmTableName.'.'.$this->paidItmItemIdCol)
                    // ->leftJoin($this->paidItmTableName, function ($leftJoin) use ($todayDate) {
                    //     $leftJoin->on('psx_paid_item_histories.item_id', '=', 'psx_items.id')
                    //         ->whereNot(function($query) use($todayDate){
                    //             $query->where($this->paidItmTableName.'.'.$this->paidItmStartDateCol, '<=', $todayDate )
                    //             ->where($this->paidItmTableName.'.'.$this->paidItmEndDateCol, '>=', $todayDate);
                    //         });
                    // })
                    ->whereNotIn($this->itmTableName.'.'.$this->itmIdCol,$paidItemIds)
                    ->leftJoin($this->itmInfoTableName, $this->itmTableName.'.'.$this->itmIdCol,'=',$this->itmInfoTableName.'.'.$this->itmInfoItemIdCol)
                    ->leftJoin($this->customUiDetailTableName, "$this->itmInfoTableName.$this->itmInfoValueCol",'=',"$this->customUiDetailTableName.$this->customUiDetailIdCol")
                    ->groupBy($this->itmTableName.'.'.$this->itmIdCol)
                    ->when($relation, function ($q, $relation) {
                        $q->with($relation);
                    })->when($conds, function ($query, $conds) {
                        $query = $this->searching($query, $conds);
                    })->when($condsNotIn, function ($query, $condsNotIn) {
                        if (isset($condsNotIn['complaintItemIds']))
                            $query->whereNotIn($this->itmTableName .'.'.$this->itmAddedUserIdCol, $condsNotIn['complaintItemIds']);

                        if (isset($condsNotIn['blockUserIds']))
                            $query->whereNotIn($this->itmTableName .'.'.$this->itmAddedUserIdCol, $condsNotIn['blockUserIds']);

                        if (isset($condsNotIn['ids']))
                            $query->whereNotIn($this->itmTableName .'.'.$this->itmIdCol, $condsNotIn['ids']);
                    })
                    ->when($limit, function ($query, $limit) {
                        $query->limit($limit);
                    })
                    ->when($offset, function ($query, $offset) {
                        $query->offset($offset);
                    })
                    ->distinct()
                    ->latest()
                    ->get();

        return $normalItems;
    }

    public function getItem($id, $dataWithRelation = null){
        $item = Item::when($dataWithRelation, function ($query, $dataWithRelation) {
            $query->with($dataWithRelation);
        })->where('id', $id)->first();

        return $item;
    }

    public function getLimitForAdPostType($limit = null, $offset = 0, $interval = null, $ad_post_type = null){
        // $paidLimit = $limit;
        // $normalLimit = $limit;
        // if($limit){
        //     if($interval == 1){
        //         $normalLimit = (int)floor($limit/2);
        //         $paidLimit = (int)ceil($limit/2);
        //     }else if($interval == $limit){
        //         $normalLimit = $limit;
        //         $paidLimit = 0;
        //     }else{
        //         $paidLimit = (int)$limit / ($interval + 1);
        //         $normalLimit = $limit - (int)$paidLimit;
        //     }

        //     if($offset == $interval || $offset == $interval-1){
        //         $normalLimit = $normalLimit -1;
        //         $paidLimit = $paidLimit + 1;
        //     }
        // }
        $total_limit = $limit + $offset;
        $exampleArray = [];
        $tempInterval = $interval;
        for ($i = 1; $i <= $total_limit; $i++) {
            if( $i > $tempInterval){
                array_push($exampleArray, 'zero');
                $tempInterval = $i + $interval;
            }else{
                array_push($exampleArray, 'one');
            }
        }
        $example_output = array_slice($exampleArray, $offset);
        $example_count = array_count_values($example_output);

        $dataArr['normalLimit'] = $example_count['one'];
        $dataArr['paidLimit'] = $example_count['zero'];
        $dataArr['exampleOutput'] = $example_output;

        return $dataArr;
    }

    public function getOffsetForAdPostType($offset = null, $interval){
        $paidOffset = $offset;
        $normalOffset = $offset;

        if($offset>0){
            $paidOffset = (int)$offset / ($interval+1);
            $normalOffset = $offset - (int)$paidOffset;
        }

        $dataArr['paidOffset'] = (int)$paidOffset;
        $dataArr['normalOffset'] = (int)$normalOffset;
        return $dataArr;
    }

    public function deleteCustomizeFieldData($productRelations){
        foreach ($productRelations as $itemRelation) {
            delImageFromCustomFieldValue($itemRelation, $this->uploadPathForDel, $this->thumb1xPathForDel, $this->thumb2xPathForDel, $this->thumbnail3xPath);
        }
        ItemInfo::destroy($productRelations->pluck('id'));
    }

    public function takingForColumnProps($label, $field, $type, $isShowSorting, $ordering){
        $hideShowCoreAndCustomFieldObj = new \stdClass();
        $hideShowCoreAndCustomFieldObj->label = $label;
        $hideShowCoreAndCustomFieldObj->field = $field;
        $hideShowCoreAndCustomFieldObj->type = $type;
        $hideShowCoreAndCustomFieldObj->sort = $isShowSorting;
        $hideShowCoreAndCustomFieldObj->ordering = $ordering;
        if ($type !== "Image" && $type !== "MultiSelect" && $type !== "Action"){
            $hideShowCoreAndCustomFieldObj->action = __('core__be_action_label');
        }

        return $hideShowCoreAndCustomFieldObj;
    }

    public function takingForColumnFilterProps($id, $label, $field, $hidden, $moduleName, $keyId){
        $hideShowCoreAndCustomFieldObj = new \stdClass();
        $hideShowCoreAndCustomFieldObj->id = $id;
        $hideShowCoreAndCustomFieldObj->label = $label;
        $hideShowCoreAndCustomFieldObj->key = $field;
        $hideShowCoreAndCustomFieldObj->hidden = $hidden;
        $hideShowCoreAndCustomFieldObj->module_name = $moduleName;
        $hideShowCoreAndCustomFieldObj->key_id = $keyId;

        return $hideShowCoreAndCustomFieldObj;
    }

    public function takingForColumnAndFilterOption($status = null){

        // for table
        $hideShowCoreFieldForColumnArr = [];
        $hideShowCustomFieldForColumnArr = [];

        $showProductCols = [];

        // for eye
        $hideShowFieldForColumnFilterArr = [];

        // for control
        $controlFieldArr = [];

        if($status == $this->approvalItem){
            $controlFieldObj = $this->takingForColumnProps(__('core__be_action_label'), "action", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

            $controlFieldObj = $this->takingForColumnProps(__('core__be_detail_lbl'), "detail", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

            $controlFieldObj = $this->takingForColumnProps(__('core__be_accept_lbl'), "accept", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

            $controlFieldObj = $this->takingForColumnProps(__('core__be_reject_lbl'), "reject", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

            $controlFieldObj = $this->takingForColumnProps(__('core__be_disable_lbl'), "disable", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

        }else if($status == $this->rejectItem){
            $controlFieldObj = $this->takingForColumnProps(__('core__be_action_label'), "action", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

            $controlFieldObj = $this->takingForColumnProps(__('core__be_detail'), "detail", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

            $controlFieldObj = $this->takingForColumnProps(__('core__be_accept_lbl'), "accept", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

            $controlFieldObj = $this->takingForColumnProps(__('core__be_disable_lbl'), "disable", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

        }else if($status == $this->disableItem){
            $controlFieldObj = $this->takingForColumnProps(__('core__be_action_label'), "action", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

            $controlFieldObj = $this->takingForColumnProps(__('core__be_detail'), "detail", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

            $controlFieldObj = $this->takingForColumnProps(__('core__be_accept_lbl'), "accept", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

            $controlFieldObj = $this->takingForColumnProps(__('core__be_reject_lbl'), "reject", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

        }else if($status == 'item'){
            $controlFieldObj = $this->takingForColumnProps(__('core__be_action_label'), "action", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);

        }else if($status == 'itemReport' || $status == 'slowMovingItemReport' || $status == 'soldOutItemReport' || $status = 'successfulDealCountReport'){
            $controlFieldObj = $this->takingForColumnProps(__('core__be_detail'), "detail", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);
        }else{
            $controlFieldObj = $this->takingForColumnProps(__('core__be_action_label'), "action", "Action", false, 0);
            array_push($controlFieldArr, $controlFieldObj);
        }

        $code = $this->code;
        $hiddenForCoreAndCustomField = $this->hiddenShownForCoreAndCustomField($this->hide, $code);
        $shownForCoreAndCustomField = $this->hiddenShownForCoreAndCustomField($this->show, $code);
        $hideShowForCoreAndCustomFields = $shownForCoreAndCustomField->merge($hiddenForCoreAndCustomField);


        foreach ($hideShowForCoreAndCustomFields as $showFields){
            if ($showFields->coreField !== null) {

                $label = $showFields->coreField->label_name;

               if (str_contains($showFields->coreField->field_name, "@@")){
                   $afterNeedleField = strstr($showFields->coreField->field_name, "@@");
                   $afterNeedleField = str_replace("@@", "", $afterNeedleField);
                   $beforeNeedleField = strstr($showFields->coreField->field_name, "@@", 'true');
                   $field = $beforeNeedleField."@@".$afterNeedleField;
               } else {
                   $field = $showFields->coreField->field_name;
               }
                // $field = $showFields->coreField->field_name;
                $colName = $showFields->coreField->field_name;
                $type = $showFields->coreField->data_type;
                $isShowSorting = $showFields->coreField->is_show_sorting;
                $ordering = $showFields->coreField->ordering;

                $cols = $colName;
                $id = $showFields->id;
                $hidden = $showFields->is_show ? false : true;
                $moduleName = $showFields->coreField->module_name;
                $keyId = $showFields->coreField->id;

                $coreFieldObjForColumnsProps = $this->takingForColumnProps($label, $field, $type, $isShowSorting, $ordering);
                $coreFieldObjForColumnFilter = $this->takingForColumnFilterProps($id, $label, $field, $hidden, $moduleName, $keyId);

                array_push($hideShowFieldForColumnFilterArr, $coreFieldObjForColumnFilter);
                array_push($hideShowCoreFieldForColumnArr, $coreFieldObjForColumnsProps);
                array_push($showProductCols, $cols);

            }
            if ($showFields->customizeField !== null) {

                $label = $showFields->customizeField->name;
                $uiHaveAttribute = [$this->dropDownUi, $this->radioUi];
                if (in_array($showFields->customizeField->ui_type_id, $uiHaveAttribute)){
                    $field = $showFields->customizeField->core_keys_id."@@name";
                } else {
                    $field = $showFields->customizeField->core_keys_id;
                }
                $type = $showFields->customizeField->data_type;
                $isShowSorting = $showFields->customizeField->is_show_sorting;
                $ordering = $showFields->customizeField->ordering;

                $id = $showFields->id;
                $hidden = $showFields->is_show ? false : true;
                $moduleName = $showFields->customizeField->module_name;
                $keyId = $showFields->customizeField->core_keys_id;

                $customFieldObjForColumnsProps = $this->takingForColumnProps($label, $field, $type, $isShowSorting, $ordering);
                $customFieldObjForColumnFilter = $this->takingForColumnFilterProps($id, $label, $field, $hidden, $moduleName, $keyId);

                array_push($hideShowFieldForColumnFilterArr, $customFieldObjForColumnFilter);
                array_push($hideShowCustomFieldForColumnArr, $customFieldObjForColumnsProps);

            }
        }

        // for columns props
        $showCoreAndCustomFieldArr = array_merge($hideShowCoreFieldForColumnArr, $controlFieldArr, $hideShowCustomFieldForColumnArr);
        // dd($showCoreAndCustomFieldArr);
        $sortedColumnArr = columnOrdering("ordering", $showCoreAndCustomFieldArr);


        // for eye
        $hideShowCoreAndCustomFieldArr = array_merge($hideShowFieldForColumnFilterArr);

        $dataArr = [
            "arrForColumnProps" => $sortedColumnArr,
            "arrForColumnFilterProps" => $hideShowCoreAndCustomFieldArr,
            "showCoreField" => $showProductCols,
        ];
        return $dataArr;

    }
    public function custompaginate($items, $perPage = null, $page = null, $options = [])
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);

        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }

    public function index($request){


        $code = $this->code;
        $customizeUis = CustomizeUi::where($this->customUiModuleName, $code)->where($this->customUiUiTypeIdCol, 'uit00001')->latest()->get();
        $uis = CustomizeUiDetail::whereIn($this->customUiDetailCoreKeysIdCol, $customizeUis->pluck($this->customUiDetailCoreKeysIdCol))->get()->groupBy($this->customUiDetailCoreKeysIdCol)->toArray();
        $productRelations = [];
//        $uis = [];
//        foreach($customizeUis as $customizeUi){
//
//            $uis[$customizeUi->core_keys_id] = CustomizeUiDetail::where('core_keys_id',$customizeUi->core_keys_id)->get()->toArray();
//        }
        $ps_itm00002 = $uis['ps-itm00002'];

        $customizeHeader = $this->getCustomizeFields($code,null,null,0);
        // dd($customizeHeader);



        // check permission
        $checkPermission = $this->checkPermission($this->viewAnyAbility, Item::class, "admin.index");

        // Search and filter
        $conds['searchterm'] = $request->input('search') ?? '';
        $conds['category_id'] = $request->input('category_filter') == 'all'? null  : $request->category_filter;
        $conds['subcategory_id'] =$request->input('sub_category_filter') == "all" ? null : $request->sub_category_filter;
        $conds['location_city_id'] =$request->input('city_filter') == "all" ? null : $request->city_filter;
        $conds['location_township_id'] =$request->input('township_filter') == "all" ? null : $request->township_filter;
        $conds['added_user_id'] =$request->input('owner_filter') == "all" ? null : $request->owner_filter;
        $conds['updated_date_range'] =$request->input('updated_date_filter') == "all" ? null : $request->updated_date_filter;
        $conds['added_date_range'] =$request->input('added_date_filter') == "all" ? null : $request->added_date_filter;
        $conds['is_sold_out'] =$request->input('available_filter') == "all" ? null : $request->available_filter;
        $conds['price'] =$request->input('price_filter') == "all" ? null : $request->price_filter;
        $conds['ps_itm00002'] =$request->input('ps_itm00002') == "all" ? null : $request->ps_itm00002;

        if(!empty($conds['ps_itm00002']))
        {
            if($conds['ps_itm00002'] != "all")
            {
                $object['core_keys_id'] = "ps-itm00002";
                $object['value'] = $conds['ps_itm00002'];
                array_push($productRelations, $object);
            }
        }

// dd($productRelations);

        if(!empty($productRelations))
        {
            $conds['product_relation'] =$productRelations;
        }

        $conds['order_by']= null;
        $conds['order_type'] = null;
        $row = $request->input('row') ?? Constants::dataTableDefaultRow;

        if($request->sort_field)
        {
            $conds['order_by'] = $request->sort_field;
            $conds['order_type'] = $request->sort_order;
        }

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
        $conds['statusFromIndex'] = [$this->publishItem,$this->unpublishItem];
        // $testitems = $this->getItems($itemRelation, false, $row, null,null,$conds );
        // return $testitems;
        $items = ProductWithKeyResource::collection($this->getItems($itemRelation, false, $row, null,null,$conds ));

        // taking for column and columnFilterOption
        $columnAndColumnFilter = $this->takingForColumnAndFilterOption('item');
        $showProductCols = $columnAndColumnFilter['showCoreField'];
        $columnProps = $columnAndColumnFilter['arrForColumnProps'];
        $columnFilterOptionProps = $columnAndColumnFilter['arrForColumnFilterProps'];

        // changing item arr object with new format
        $changedProductObj = $items;
        // $categories = $this->categoryService->getCategories(null, $this->publish);
        // $subcategories = $this->subcategoryService->getSubCategories(null, $this->publish);
        // $cities = $this->locationCityService->getLocationCities(null, $this->publish);
        // $townships = $this->locationTownshipService->getLocationTownships(null, $this->publish);
        // $owners = $this->userService->getUsers(null, $this->publish);


        // $selected_Subcategory = $this->subcategoryService->getSubCategory(empty($conds['subcategory_id']) ? "0" : $conds['subcategory_id'] );
        $selected_category = $this->categoryService->getCategory($conds['category_id']);
        $selected_Subcategory = Subcategory::where($this->subCatIdCol, $conds['subcategory_id'])->first();
        $selected_City = $this->locationCityService->getLocationCity($conds['location_city_id']);
        $selected_Township = LocationTownship::where($this->locationTownshipIdCol, $conds['location_township_id'])->first();
        $selected_owner = User::where($this->userIdCol, $conds['added_user_id'])->first();
        // dd($selected_Subcategory);

        // $categories = '';
        $subcategories='';
        $cities = '';
        $townships = '' ;
        $owners = '';



        $prices = Item::select('id', 'price')->groupBy('price')->get();

        $availables = [
            [
                "id" => '0',
                "name" => "Yes"
            ],
            [
                "id" => '1',
                "name" => "Sold Out"
            ]
        ];

        if($conds['order_by'])
        {
            $dataArr = [
                "checkPermission" => $checkPermission,
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,
                'availables' => $availables,
                'prices' => $prices,
                'items' => $changedProductObj,
                'sort_field' =>$conds['order_by'],
                'sort_order'=>$request->sort_order,
                'search'=>$conds['searchterm'] ,
                'selectedCategory'=>$selected_category ? $selected_category : ''  ,
                'selectedSubcategory'=>$selected_Subcategory?$selected_Subcategory : '',
                'selectedCity'=>$selected_City?$selected_City : '',
                'selectedTownship'=>$selected_Township ? $selected_Township : '' ,
                'selectedOwner'=>$selected_owner?$selected_owner:"" ,
                'selectedAvailable'=>$conds['is_sold_out'] ,
                'selectedPrice'=>$conds['price'] ,
                'selectedAddedDate'=>$conds['added_date_range'] ,
                'selectedUpdatedDate'=>$conds['updated_date_range'] ,
                'itmItemType' => $this->itmItemType,
                'itmPurchasedOption' => $this->itmPurchasedOption,
                'itmConditionOfItem' => $this->itmConditionOfItem,
                'itmDealOption' => $this->itmDealOption,
                'uis'=>$uis,
                'ps_itm00002'=>$ps_itm00002,
                'customizeHeaders'=>$customizeHeader,
            ];
        }
        else
        {
            $dataArr = [
                "checkPermission" => $checkPermission,
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,
                'availables' => $availables,
                'prices' => $prices,
                'items' => $changedProductObj,
                'search'=>$conds['searchterm'] ,
                'selectedCategory'=>$selected_category ? $selected_category: ''  ,
                'selectedSubcategory'=>$selected_Subcategory?$selected_Subcategory : '',
                'selectedCity'=>$selected_City?$selected_City : '',
                'selectedTownship'=>$selected_Township ? $selected_Township : '' ,
                'selectedOwner'=>$selected_owner?$selected_owner:"",
                'selectedAvailable'=>$conds['is_sold_out'] ,
                'selectedPrice'=>$conds['price'] ,
                'selectedAddedDate'=>$conds['added_date_range'] ,
                'selectedUpdatedDate'=>$conds['updated_date_range'] ,
                'itmItemType' => $this->itmItemType,
                'itmPurchasedOption' => $this->itmPurchasedOption,
                'itmConditionOfItem' => $this->itmConditionOfItem,
                'itmDealOption' => $this->itmDealOption,
                'uis'=>$uis,
                'ps_itm00002'=>$ps_itm00002,
                'customizeHeaders'=>$customizeHeader,
            ];
        }

        return $dataArr;
    }

    public function create($routeName){

        // check permission start
        $checkPermission = $this->checkPermission($this->createAbility, Item::class, "admin.index");
        // check permission end

        $code = $this->code;

        $coreFieldFilterSettings = $this->getCoreFieldFilteredLists($code);
        $customizeHeader = $this->getCustomizeFields($code,null,null,0);
        $customizeDetail = $this->getCustomizeFieldAttrs();
        $categories = $this->categoryService->getCategories(null, $this->publish);
        $subCategories = $this->subcategoryService->getSubCategories(null, $this->publish);
        $locationCities = $this->locationCityService->getLocationCities(null, $this->publish);
        $locationTownships = $this->locationTownshipService->getLocationTownships(null, $this->publish);
        $currencies = $this->currencyService->getCurrencies($this->publish);
        $itmTableColumns = getAllCoreFields($this->itmTableName);

        $dataArr = [
            "checkPermission" => $checkPermission,
            "customizeHeaders" => $customizeHeader,
            "customizeDetails" => $customizeDetail,
            'categories' => $categories,
            'subcategories' => $subCategories,
            "cities" => $locationCities,
            "townships" => $locationTownships,
            'currencies' => $currencies,
            'coreFieldFilterSettings' => $coreFieldFilterSettings,
            "itmTableColumns" => $itmTableColumns
        ];

        return $dataArr;
    }

    public function edit($id, $routeName){
        $dataWithRelation = ['city', 'category', 'owner', 'cover', 'video', 'icon', "itemRelation"];
        $item = $this->getItem($id, $dataWithRelation);
        $code = $this->code;

        // check permission start
        $checkPermission = $this->checkPermission($this->editAbility, $item, "admin.index");
        // check permission end

        $item = new ProductWithKeyResource($item);

        $coreFieldFilterSettings = $this->getCoreFieldFilteredLists($code);
        $customizeHeader = $this->getCustomizeFields($code,null,null,0);
        $customizeDetail = $this->getCustomizeFieldAttrs();

        $categories = $this->categoryService->getCategories(null, $this->publish);
        $subCategories = $this->subcategoryService->getSubCategories(null, $this->publish);
        $locationCities = $this->locationCityService->getLocationCities(null, $this->publish, null, null, null, true);
        $locationTownships = $this->locationTownshipService->getLocationTownships(null, $this->publish);
        $currencies = $this->currencyService->getCurrencies($this->publish);

        $paidItemProgressStatus = Constants::paidItemProgressStatus;


        $dataArr = [
            'checkPermission' => $checkPermission,
            'item'   => $item,
            'categories' => $categories,
            'subcategories' => $subCategories,
            "cities" => $locationCities,
            "townships" => $locationTownships,
            'currencies' => $currencies,
            "customizeHeaders" => $customizeHeader,
            "customizeDetails" => $customizeDetail,
            'coreFieldFilterSettings' => $coreFieldFilterSettings,
            'paidItemProgressStatus' => $paidItemProgressStatus,
        ];

        return $dataArr;
    }

    public function destroy($id, $routeName = null){
        //delete in items table
        $item = $this->getItem($id);

        // check permission
        $checkPermission = $this->checkPermission($this->deleteAbility, $item, "admin.index");

        $images = $this->imageService->getImages($id, 'item');
        $this->imageService->deleteImagesFromBoth($images);

        //delete in item_infos table
        $productRelations = $this->getValuesForCustomizeField('',$id);

        $title = $item->title;
        $item->delete();

        $this->deleteCustomizeFieldData($productRelations);

        $dataArr = [
            "checkPermission" => $checkPermission,
            'msg' => __('core__be_delete_success', ['attribute' => $title]),
            'flag' => $this->dangerFlag,
        ];

        return $dataArr;
    }

    public function filterForCoreField()
    {
        $productCoreLists = getAllCoreFields($this->itmTableName);
        $coreFieldFilterSettings = $this->getCoreFieldFilteredLists($this->code);

        $dataArr = [
            'productCoreLists' => $productCoreLists,
            'coreFieldFilterSettings' => $coreFieldFilterSettings,
        ];

        return $dataArr;
    }

    public function filterForCoreFieldStore($request)
    {
        // delete old data start
        $this->deleteCoreFilteredOldData($this->code);
        // delete old data end

        // prepare for needing data start
        $productCoreLists = getAllCoreFields($this->itmTableName);
        $categories = getAllCoreFields($this->catTableName);
        $subCategories = getAllCoreFields($this->subCatTableName);
        $locationCities = getAllCoreFields($this->locationCityTableName);
        $locationTownships = getAllCoreFields($this->locationTownshipTableName);
        $users = getAllCoreFields($this->userTableName);
        $currencies = getAllCoreFields($this->currencyTableName);
        $shops = getAllCoreFields($this->shopTableName);

        $code = $this->code;
        $coreFieldFilterForRelation = $this->coreFieldFilterForRelation;

        $coreFieldsForFilter = $request->coreFieldsForFilter;
        $labels = $request->label;
        // prepare for needing data end

        $this->createCoreFieldsForFilter(
            $productCoreLists,
            $labels,
            $coreFieldsForFilter,
            $categories,
            $subCategories,
            $locationCities,
            $locationTownships,
            $users,
            $currencies,
            $shops,
            $code,
            $coreFieldFilterForRelation
        );
    }

    // Item Approval (Pending, Diable, Reject)
    public function disableOrPendingOrRejectIndex($status, $request){
        // dd("here");


        // $code = $this->code;
        $customizeUis = CustomizeUi::where($this->customUiModuleName, 'itm')->where($this->customUiUiTypeIdCol, 'uit00001')->latest()->get();
        $uis = [];
        $productRelations = [];
        foreach($customizeUis as $customizeUi){

            $uis[$customizeUi->core_keys_id] = CustomizeUiDetail::where('core_keys_id',$customizeUi->core_keys_id)->get()->toArray();
        }

        // check permission
        $checkPermission = $this->checkPermission($this->viewAnyAbility,Item::class, "admin.index");
        // $customizeDetails = $this->getCustomizeFieldAttrs();

        // status
        $conds['status'] = $status;

        // Search and filter
        $conds['searchterm'] = $request->input('search') ?? '';
        $conds['category_id'] = $request->input('category_filter') == 'all'? null  : $request->category_filter;
        $conds['subcategory_id'] =$request->input('sub_category_filter') == "all" ? null : $request->sub_category_filter;
        $conds['location_city_id'] =$request->input('city_filter') == "all" ? null : $request->city_filter;
        $conds['location_township_id'] =$request->input('township_filter') == "all" ? null : $request->township_filter;
        $conds['added_user_id'] =$request->input('owner_filter') == "all" ? null : $request->owner_filter;
        $conds['updated_date_range'] =$request->input('updated_date_filter') == "all" ? null : $request->updated_date_filter;
        $conds['added_date_range'] =$request->input('added_date_filter') == "all" ? null : $request->added_date_filter;
        $conds['is_sold_out'] =$request->input('available_filter') == "all" ? null : $request->available_filter;
        $conds['price'] =$request->input('price_filter') == "all" ? null : $request->price_filter;

        if(!empty($productRelations))
        {
            $conds['product_relation'] =$productRelations;
        }

        $conds['order_by']= null;
        $conds['order_type'] = null;
        $row = $request->input('row') ?? Constants::dataTableDefaultRow;

        if($request->sort_field)
        {
            $conds['order_by'] = $request->sort_field;
            $conds['order_type'] = $request->sort_order;
        }

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

        if($status == $this->approvalItem){
            // dd($this->approvalItem);
            $items = PendingWithKeyResource::collection($this->getItems($itemRelation, false, $row, null,null,$conds));
        }else if($status == $this->disableItem){
            // dd($this->disableItem);
            $items = DisableWithKeyResource::collection($this->getItems($itemRelation, false, $row, null,null,$conds));
        }else if($status == $this->rejectItem){
            // dd($this->rejectItem);
            $items = RejectWithKeyResource::collection($this->getItems($itemRelation, false, $row, null,null,$conds));
        }

        // taking for column and columnFilterOption
        $columnAndColumnFilter = $this->takingForColumnAndFilterOption($status);
        $showProductCols = $columnAndColumnFilter['showCoreField'];
        $columnProps = $columnAndColumnFilter['arrForColumnProps'];
        $columnFilterOptionProps = $columnAndColumnFilter['arrForColumnFilterProps'];

        // changing item arr object with new format
        $changedProductObj = $items;
        // $categories = $this->categoryService->getCategories(null, $this->publish);
        // $subcategories = $this->subcategoryService->getSubCategories(null, $this->publish);
        // $cities = $this->locationCityService->getLocationCities(null, $this->publish);
        // $townships = $this->locationTownshipService->getLocationTownships(null, $this->publish);
        // $owners = $this->userService->getUsers(null, $this->publish);
        // $prices = Item::select('id', 'price')->groupBy('price')->get();
        $selected_category = $this->categoryService->getCategory($conds['category_id']);
        $selected_Subcategory = Subcategory::where($this->subCatIdCol, $conds['subcategory_id'])->first();
        $selected_City = $this->locationCityService->getLocationCity($conds['location_city_id']);
        $selected_Township = LocationTownship::where($this->locationTownshipIdCol, $conds['location_township_id'])->first();
        $selected_owner = User::where($this->userIdCol, $conds['added_user_id'])->first();

        $availables = [
            [
                "id" => '0',
                "name" => "Yes"
            ],
            [
                "id" => '1',
                "name" => "Sold Out"
            ]
        ];

        if($conds['order_by'])
        {
            $dataArr = [
                "checkPermission" => $checkPermission,
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,
                'availables' => $availables,
                'items' => $changedProductObj,
                'sort_field' =>$conds['order_by'],
                'sort_order'=>$request->sort_order,
                'search'=>$conds['searchterm'] ,
                'selectedCategory'=>$selected_category ? $selected_category : ''  ,
                'selectedSubcategory'=>$selected_Subcategory?$selected_Subcategory : '',
                'selectedCity'=>$selected_City?$selected_City : '',
                'selectedTownship'=>$selected_Township ? $selected_Township : '' ,
                'selectedOwner'=>$selected_owner?$selected_owner:"" ,
                'selectedAvailable'=>$conds['is_sold_out'] ,
                'selectedPrice'=>$conds['price'] ,
                'selectedAddedDate'=>$conds['added_date_range'] ,
                'selectedUpdatedDate'=>$conds['updated_date_range'] ,
                'uis'=>$uis,
            ];
        }
        else
        {
            $dataArr = [
                "checkPermission" => $checkPermission,
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,
                'availables' => $availables,
                'items' => $changedProductObj,
                'search'=>$conds['searchterm'] ,
                'selectedCategory'=>$selected_category ? $selected_category : ''  ,
                'selectedSubcategory'=>$selected_Subcategory?$selected_Subcategory : '',
                'selectedCity'=>$selected_City?$selected_City : '',
                'selectedTownship'=>$selected_Township ? $selected_Township : '' ,
                'selectedOwner'=>$selected_owner?$selected_owner:"" ,
                'selectedAvailable'=>$conds['is_sold_out'] ,
                'selectedPrice'=>$conds['price'] ,
                'selectedAddedDate'=>$conds['added_date_range'] ,
                'selectedUpdatedDate'=>$conds['updated_date_range'] ,
                'uis'=>$uis,
            ];
        }

        return $dataArr;
    }

    public function disableOrPendingOrRejectEdit($relation, $id){

        $item = $this->getItem($id, $relation);
        $code = $this->code;

        $coreFieldFilterSettings = $this->getCoreFieldFilteredLists($code);
        $customizeHeader = $this->getCustomizeFields($code,null,null,0);
        $customizeDetail = $this->getCustomizeFieldAttrs();

        $dataArr = [
            'item'   => $item,
            "customizeHeaders" => $customizeHeader,
            "customizeDetails" => $customizeDetail,
            'coreFieldFilterSettings' => $coreFieldFilterSettings
        ];

        return $dataArr;
    }

    public function disableOrPendingOrRejectDestroy($id){
        //delete in items table
        $item = $this->getItem($id);

        $images = $this->imageService->getImages($id, 'item');
        $this->imageService->deleteImagesFromBoth($images);

        //delete in item_infos table
        $productRelations = $this->getValuesForCustomizeField('',$id);

        $title = $item->title;
        $item->delete();

        $this->deleteCustomizeFieldData($productRelations);

        $dataArr = [
            'msg' => __('core__be_delete_success', ['attribute' => $title]),
            'flag' => $this->dangerFlag,
        ];

        return $dataArr;
    }

    public function makePublishOrUnpublish($id){
        // dd($this->unPublish);

        $iten = Item::find($id);

        if($iten->status == $this->publishItem){
            // dd("here");
            $iten->status = $this->unpublishItem;
        }else{
            // dd($this->publishItem);
            $iten->status = $this->publishItem;
        }
        $iten->updated_user_id = Auth::user()->id;
        $iten->update();
    }

    public function disableOrPendingOrRejectStatusChange($id, $request){
        $item = $this->getItem($id);
        if($request->status == 'accept'){
            $item->status = $this->publishItem;
            $msg = __('core__be_item_accepted');
            $flag = $this->successFlag;
        }elseif($request->status == 'reject'){
            $item->status = $this->rejectItem;
            $msg = __('core__be_item_rejected');
            $flag = $this->dangerFlag;
        }
        if($request->status == 'disable'){
            $item->status = $this->disableItem;
            $msg = __('core__be_item_disabled');
            $flag = $this->warningFlag;
        }
        if($request->status == 'apply'){
            $approval = SystemConfig::first()->is_approved_enable;
            if($approval == 1){
                $item->status = $this->approvalItem;
                $msg = __('core__be_item_pending');
                $flag = $this->successFlag;
            }else{
                $item->status = $this->publishItem;
                $msg = __('core__be_item_accepted');
                $flag = $this->successFlag;


            }

        }
        $item->update();

        $this->sendApprovalNoti($item->id);

        $dataArr = [
            'msg' => $msg,
            'flag' => $flag,
        ];
        return $dataArr;
    }

    // item report
    public function itemReportIndex($request){

        $code = $this->code;
        $customizeUis = CustomizeUi::where($this->customUiModuleName, $code)->where($this->customUiUiTypeIdCol, 'uit00001')->latest()->get();
        $uis = [];
        $productRelations = [];
        foreach($customizeUis as $customizeUi){

            $uis[$customizeUi->core_keys_id] = CustomizeUiDetail::where($this->customUiDetailCoreKeysIdCol, $customizeUi->core_keys_id)->get()->toArray();
        }

        // Search and filter
        $conds['searchterm'] = $request->input('search') ?? '';
        $conds['category_id'] = $request->input('category_filter') == 'all'? null  : $request->category_filter;
        $conds['subcategory_id'] =$request->input('sub_category_filter') == "all" ? null : $request->sub_category_filter;
        $conds['added_date_range'] =$request->input('date_filter') == "all" ? null : $request->date_filter;

        if($request->deal_option_filter){
            $productRelations[] =  ['core_keys_id' => $this->itmDealOption,'value'=>$request->deal_option_filter];
        }

        if($request->purchase_option_filter){
            $productRelations[] =  ['core_keys_id' => $this->itmPurchasedOption,'value'=>$request->purchase_option_filter];
        }

        if(!empty($productRelations))
        {
            $conds['product_relation'] =$productRelations;
        }
        $conds['order_by']= null;
        $conds['order_type'] = null;
        $row = $request->input('row') ?? Constants::dataTableDefaultRow;

        if($request->sort_field)
        {
            $conds['order_by'] = $request->sort_field;
            $conds['order_type'] = $request->sort_order;
        }

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

        $items = ItemReportWithKeyResource::collection($this->getItems($itemRelation, false, $row, null,null,$conds, null, null,null ,null,null,null,null,'itemReport'));

        // taking for column and columnFilterOption
        $columnAndColumnFilter = $this->takingForColumnAndFilterOption('itemReport');
        $showProductCols = $columnAndColumnFilter['showCoreField'];
        $columnProps = $columnAndColumnFilter['arrForColumnProps'];
        $columnFilterOptionProps = $columnAndColumnFilter['arrForColumnFilterProps'];

        // changing item arr object with new format
        $changedProductObj = $items;
        // $categories = $this->categoryService->getCategories(null, $this->publish);
        // $subcategories = $this->subcategoryService->getSubCategories(null, $this->publish);
        // $cities = $this->locationCityService->getLocationCities(null, $this->publish);
        // $townships = $this->locationTownshipService->getLocationTownships(null, $this->publish);
        $selected_category = $this->categoryService->getCategory($conds['category_id']);
        $selected_Subcategory = Subcategory::where('id',$conds['subcategory_id'])->first();
        $selected_purchaseOption = CustomizeUiDetail::where('id',$request->purchase_option_filter)->first();
        $selected_dealOption = CustomizeUiDetail::where('id',$request->deal_option_filter)->first();

        if($conds['order_by'])
        {
            $dataArr = [
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,

                'items' => $changedProductObj,
                'sort_field' =>$conds['order_by'],
                'sort_order'=>$request->sort_order,
                'search'=>$conds['searchterm'] ,
                'selectedCategory'=>$selected_category ? $selected_category : ''  ,
                'selectedSubcategory'=>$selected_Subcategory?$selected_Subcategory : '',
                'selectedDealOption'=>$selected_dealOption ?$selected_dealOption : '' ,
                'selectedPurchaseOption'=>$selected_purchaseOption?$selected_purchaseOption : '',
                'selectedDate'=>$conds['added_date_range'] ,
                'itmPurchasedOption' => $this->itmPurchasedOption,
                'itmItemType' => $this->itmItemType,
                'itmConditionOfItem' => $this->itmConditionOfItem,
                'itmDealOption' => $this->itmDealOption,
                'uis'=>$uis,
            ];
        }
        else
        {
            $dataArr = [
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,

                'items' => $changedProductObj,
                'search'=>$conds['searchterm'] ,
                'selectedCategory'=>$selected_category ? $selected_category : ''  ,
                'selectedSubcategory'=>$selected_Subcategory?$selected_Subcategory : '',
                'selectedDealOption'=>$selected_dealOption ?$selected_dealOption : '' ,
                'selectedPurchaseOption'=>$selected_purchaseOption?$selected_purchaseOption : '',
                'selectedDate'=>$conds['added_date_range'] ,
                'itmPurchasedOption' => $this->itmPurchasedOption,
                'itmItemType' => $this->itmItemType,
                'itmConditionOfItem' => $this->itmConditionOfItem,
                'itmDealOption' => $this->itmDealOption,
                'uis'=>$uis,
            ];
        }

        return $dataArr;
    }

    public function itemReportShow($id, $relation){
        $item = $this->getItem($id, $relation);
        $code = $this->code;

        $coreFieldFilterSettings = $this->getCoreFieldFilteredLists($code);
        $customizeHeader = $this->getCustomizeFields($code,null,null,0);
        $customizeDetail = $this->getCustomizeFieldAttrs();

        $dataArr = [
            'item'   => $item,
            "customizeHeaders" => $customizeHeader,
            "customizeDetails" => $customizeDetail,
            'coreFieldFilterSettings' => $coreFieldFilterSettings
        ];

        return $dataArr;
    }

    public function itemReportCsvExport(){
        $filename = newFileNameForExport($this->itemReportCsvFileName);
        return (new ItemReportExport)->download($filename, \Maatwebsite\Excel\Excel::CSV, [
            'Content-Type' => 'text/csv',
        ]);
    }

    // successful deal count report
    public function successfulDealCountReportIndex($request){

        // $code = $this->code;
        $customizeUis = CustomizeUi::where($this->customUiModuleName, 'itm')->where($this->customUiUiTypeIdCol, 'uit00001')->latest()->get();
        $uis = [];
        $productRelations = [];
        foreach($customizeUis as $customizeUi){

            $uis[$customizeUi->core_keys_id] = CustomizeUiDetail::where($this->customUiCoreKeysIdCol,$customizeUi->core_keys_id)->get()->toArray();
        }

        // Search and filter
        $conds['search_buyer_seller'] = $request->input('search') ?? '';
        $conds['category_id'] = $request->input('category_filter') == 'all'? null  : $request->category_filter;
        $conds['added_date_range'] =$request->input('date_filter') == "all" ? null : $request->date_filter;

        if($request->item_type_filter){
            $productRelations[] =  ['core_keys_id' => $this->itmItemType,'value'=>$request->item_type_filter];
        }

        if($request->deal_option_filter){
            $productRelations[] =  ['core_keys_id' => $this->itmDealOption,'value'=>$request->deal_option_filter];
        }

        if($request->purchase_option_filter){
            $productRelations[] =  ['core_keys_id' => $this->itmPurchasedOption,'value'=>$request->purchase_option_filter];
        }

        if(!empty($productRelations))
        {
            $conds['product_relation'] =$productRelations;
        }
        $conds['order_by']= null;
        $conds['order_type'] = null;
        $row = $request->input('row') ?? Constants::dataTableDefaultRow;

        if($request->sort_field)
        {
            $conds['order_by'] = $request->sort_field;
            $conds['order_type'] = $request->sort_order;
        }

        $itemRelation =[
            'category',
            'subcategory',
            'city',
            'township',
            'currency',
            'itemRelation.uiType',
            'itemRelation.customizeUi',
            'owner',
            'itemRelation',
            'buyer',
            'seller',
        ];

        $items = SuccessfulDealCountReportWithKeyResource::collection($this->getSuccessfulDealItems($itemRelation, false, $row, null,null,$conds, null, null,null ,null,null,null,null ));

        // taking for column and columnFilterOption
        $columnAndColumnFilter = $this->takingForColumnAndFilterOption('successfulDealCountReport');
        $showProductCols = $columnAndColumnFilter['showCoreField'];
        $columnProps = $columnAndColumnFilter['arrForColumnProps'];
        $columnFilterOptionProps = $columnAndColumnFilter['arrForColumnFilterProps'];


        // changing item arr object with new format
        $changedProductObj = $items;
        // $categories = $this->categoryService->getCategories(null, $this->publish);

        $selected_category = $this->categoryService->getCategory($conds['category_id']);
        $selected_purchaseOption = CustomizeUiDetail::where($this->customUiDetailIdCol, $request->purchase_option_filter)->first();
        $selected_dealOption = CustomizeUiDetail::where($this->customUiDetailIdCol, $request->deal_option_filter)->first();
        $selected_itemType = CustomizeUiDetail::where($this->customUiDetailIdCol, $request->item_type_filter)->first();

        if($conds['order_by'])
        {
            $dataArr = [
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,

                'items' => $changedProductObj,
                'sort_field' =>$conds['order_by'],
                'sort_order'=>$request->sort_order,
                'search'=>$conds['search_buyer_seller'] ,

                'selectedCategory'=>$selected_category ? $selected_category : ''  ,
                'selectedItemType'=>$selected_itemType ? $selected_itemType : '',
                'selectedDealOption'=>$selected_dealOption ?$selected_dealOption : '' ,
                'selectedPurchaseOption'=>$selected_purchaseOption?$selected_purchaseOption : '',
                'selectedDate'=>$conds['added_date_range'] ,
                'itmPurchasedOption' => $this->itmPurchasedOption,
                'itmItemType' => $this->itmItemType,
                'itmDealOption' => $this->itmDealOption,
                'uis'=>$uis,
            ];
        }
        else
        {
            $dataArr = [
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,

                'items' => $changedProductObj,
                'search'=>$conds['search_buyer_seller'] ,
                'selectedCategory'=>$selected_category ? $selected_category : ''  ,
                'selectedItemType'=>$selected_itemType ? $selected_itemType : '',
                'selectedDealOption'=>$selected_dealOption ?$selected_dealOption : '' ,
                'selectedPurchaseOption'=>$selected_purchaseOption?$selected_purchaseOption : '',
                'selectedDate'=>$conds['added_date_range'] ,
                'itmPurchasedOption' => $this->itmPurchasedOption,
                'itmItemType' => $this->itmItemType,
                'itmDealOption' => $this->itmDealOption,
                'uis'=>$uis,
            ];
        }

        return $dataArr;
    }

    public function successfulDealCountReportShow($id){

        $catRelation = ['subcategory'];
        $cityRelation = ['township'];
        $itemRelation = ['category', 'itemRelation.uiType',
            'itemRelation.customizeUi', 'subcategory', 'city', 'township', 'currency', 'owner','itemRelation', 'cover', 'video', 'icon', 'buyer', 'seller'];

        $item = SuccessfulDealCountReportWithKeyResource::collection($this->getSuccessfulDealItem($id, $itemRelation));
        $categories = $this->categoryService->getCategories($catRelation, $this->publish);
        $currencies = $this->currencyService->getCurrencies($this->publish);
        $cities = $this->locationCityService->getLocationCities($cityRelation, $this->publish);

        $code = $this->code;
        $coreFieldFilterSettings = $this->getCoreFieldFilteredLists($code);
        $customizeHeader = $this->getCustomizeFields($code,null,null,0);
        $customizeDetail = $this->getCustomizeFieldAttrs();

        $dataArr = [
            'item' => $item,
            'categories' => $categories,
            'currencies' => $currencies,
            'cities' => $cities,
            "customizeHeaders" => $customizeHeader,
            "customizeDetails" => $customizeDetail,
            'coreFieldFilterSettings' => $coreFieldFilterSettings,
            'itmPurchasedOption' => $this->itmPurchasedOption,
            'itmItemType' => $this->itmItemType,
            'itmDealOption' => $this->itmDealOption,
        ];
        return $dataArr;
    }

    public function successfulDealCountReportCsvExport(){
        $filename = newFileNameForExport($this->successfulDealCountReportCsvFileName);
        return (new SuccessfulDealCountReportExport)->download($filename, \Maatwebsite\Excel\Excel::CSV, [
            'Content-Type' => 'text/csv',
        ]);
    }

    // soldOutItemReport
    public function soldOutItemReportIndex($request){

        $withCount = ['item_touch'];

        // $code = $this->code;
        $customizeUis = CustomizeUi::where($this->customUiModuleName, 'itm')->where($this->customUiUiTypeIdCol, 'uit00001')->latest()->get();
        $uis = [];
        $productRelations = [];
        foreach($customizeUis as $customizeUi){

            $uis[$customizeUi->core_keys_id] = CustomizeUiDetail::where($this->customUiDetailCoreKeysIdCol, $customizeUi->core_keys_id)->get()->toArray();
        }

        // Search and filterq
        $conds['searchterm'] = $request->input('search') ?? '';
        $conds['category_id'] = $request->input('category_filter') == 'all'? null  : $request->category_filter;
        $conds['added_date_range'] =$request->input('date_filter') == "all" ? null : $request->date_filter;

        if($request->purchase_option_filter){
            $productRelations[] =  ['core_keys_id' => $this->itmPurchasedOption,'value'=>$request->purchase_option_filter];
        }

        if(!empty($productRelations))
        {
            $conds['product_relation'] =$productRelations;
        }
        $conds['order_by']= null;
        $conds['order_type'] = null;
        $row = $request->input('row') ?? Constants::dataTableDefaultRow;

        if($request->sort_field && $request->sort_field != 'total_offer')
        {
            $conds['order_by'] = $request->sort_field;
            $conds['order_type'] = $request->sort_order;

        }

        $itemRelation =[
            'category',
            'subcategory',
            'city',
            'township',
            'currency',
            'itemRelation.uiType',
            'itemRelation.customizeUi',
            'owner',
            'itemRelation',
        ];

        $items = SoldOutItemReportWithKeyResource::collection($this->getSoldOutItems($itemRelation, false, $row, null,null,$conds, null, null,null ,null,null,null,null));

        // taking for column and columnFilterOption
        $columnAndColumnFilter = $this->takingForColumnAndFilterOption('soldOutItemReport');
        $showProductCols = $columnAndColumnFilter['showCoreField'];
        $columnProps = $columnAndColumnFilter['arrForColumnProps'];
        $columnFilterOptionProps = $columnAndColumnFilter['arrForColumnFilterProps'];

        // changing item arr object with new format
        $changedProductObj = $items;
        // $categories = $this->categoryService->getCategories(null, $this->publish);
        $selected_category = $this->categoryService->getCategory($conds['category_id']);
        $selected_purchaseOption = CustomizeUiDetail::where('id', $request->purchase_option_filter)->first();

        if($conds['order_by'])
        {
            $dataArr = [
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,
                // 'categories' => $categories,
                'items' => $changedProductObj,
                'sort_field' =>$conds['order_by'],
                'sort_order'=>$request->sort_order,
                'search'=>$conds['searchterm'] ,
                'selectedCategory'=>$selected_category ? $selected_category : ''  ,
                'selectedPurchaseOption'=>$selected_purchaseOption?$selected_purchaseOption : '',
                'selectedDate'=>$conds['added_date_range'] ,
                'itmPurchasedOption' => $this->itmPurchasedOption,
                'itmItemType' => $this->itmItemType,
                'itmDealOption' => $this->itmDealOption,
                'uis'=>$uis,
            ];
        }
        else
        {
            $dataArr = [
                'showCoreAndCustomFieldArr' => $columnProps,
                'hideShowFieldForFilterArr' => $columnFilterOptionProps,
                // 'categories' => $categories,
                'items' => $changedProductObj,
                'search'=>$conds['searchterm'] ,
                'selectedCategory'=>$selected_category ? $selected_category : ''  ,
                'selectedPurchaseOption'=>$selected_purchaseOption?$selected_purchaseOption : '',
                'selectedDate'=>$conds['added_date_range'] ,
                'itmPurchasedOption' => $this->itmPurchasedOption,
                'itmItemType' => $this->itmItemType,
                'itmDealOption' => $this->itmDealOption,
                'uis'=>$uis,
            ];
        }

        return $dataArr;
    }

    public function soldOutItemReportShow($id, $relations){

        $catRelation = ['subcategory'];
        $cityRelation = ['township'];
        $itemRelation = ['category', 'subcategory', 'psx_user_boughts', 'city', 'township', 'currency', 'owner',
        'itemRelation', 'cover', 'video', 'icon'];

        $item = new SoldOutItemReportWithKeyResource($this->getItem($id, $relations));
        $categories = $this->categoryService->getCategories($catRelation, $this->publish);
        $currencies = $this->currencyService->getCurrencies($this->publish);
        $cities = $this->locationCityService->getLocationCities($cityRelation, $this->publish);

        $code = $this->code;
        $coreFieldFilterSettings = $this->getCoreFieldFilteredLists($code);
        $customizeHeader = $this->getCustomizeFields($code,null,null,0);
        $customizeDetail = $this->getCustomizeFieldAttrs();

        $dataArr = [
            'item' => $item,
            'categories' => $categories,
            'currencies' => $currencies,
            'cities' => $cities,
            "customizeHeaders" => $customizeHeader,
            "customizeDetails" => $customizeDetail,
            'coreFieldFilterSettings' => $coreFieldFilterSettings,
            'itmItemType' => $this->itmItemType,
            'itmPurchasedOption' => $this->itmPurchasedOption,
         ];

        return $dataArr;
    }

    public function soldOutItemReportCsvExport(){
        $filename = newFileNameForExport($this->soldOutItemReportCsvFileName);
        return (new SoldOutItemReportExport)->download($filename, \Maatwebsite\Excel\Excel::CSV, [
            'Content-Type' => 'text/csv',
        ]);
    }

    // for api
    public function indexFromApi($request){
        $offset = $request->offset;
        $limit = $request->limit;

        $itemApiRelation = ['category', 'subcategory', 'city', 'township', 'currency', 'owner','itemRelation', 'cover', 'video', 'icon'];

        $items = $this->getItems($itemApiRelation, true, null, $limit, $offset);

        return $items;

    }
    public function getByIdFromApi($request){
        $itemId = $request->id;

        $itemApiRelation = ['category', 'subcategory', 'city', 'township', 'currency', 'owner','itemRelation', 'cover', 'video', 'icon'];

        $item = $this->getItem($itemId,$itemApiRelation);
        if (!$item){
            return  ['error' =>  __('core__api_record_not_found',[],$request->language_symbol),'status' =>  $this->noContentStatusCode ];
        } else {
            return $item;
        }
    }

    public function createFromApi($request){
        $offset = $request->offset;
        $limit = $request->limit;
        $code = $this->code;


        $customizeUiRelation = ['uiTypeId'];
        $custom = $this->getCustomizeFields($code, $customizeUiRelation, null, $this->unDelete, $limit, $offset);

        $coreFieldFilterSettings = $this->getFilteredCoreFields($code, $limit, $offset,0);

        $coreFields = Schema::getColumnListing($this->itmTableName);

        $core = [];

        foreach ($coreFields as $coreField){
            foreach ($coreFieldFilterSettings as $coreFieldFilterSetting){
                if (str_contains($coreFieldFilterSetting->field_name,"@@")) {
                    $originFieldName = strstr($coreFieldFilterSetting->field_name,"@@",true);
                } else {
                    $originFieldName = $coreFieldFilterSetting->field_name;
                }

                if ($coreField == $originFieldName){
                    // $coreFieldObj = new \stdClass(); ,[],$request->language_symbol

                    $coreFieldFilterSetting->placeholder = __($coreFieldFilterSetting->placeholder,[],$request->language_symbol);
                    $coreFieldFilterSetting->label_name = __($coreFieldFilterSetting->label_name,[],$request->language_symbol);


                    // $coreFieldObj->placeholder = isset($coreFieldFilterSetting->placeholder)?(string)$coreFieldFilterSetting->placeholder:'';
                    // $coreFieldObj->data_type = isset($coreFieldFilterSetting->data_type)?(string)$coreFieldFilterSetting->data_type:'';
                    // $coreFieldObj->is_core_field = isset($coreFieldFilterSetting->is_core_field)?(string)$coreFieldFilterSetting->is_core_field:'';
                    // $coreFieldObj->is_visible = isset($coreFieldFilterSetting->enable)?(string)$coreFieldFilterSetting->enable:'';
                    // $coreFieldObj->mandatory = isset($coreFieldFilterSetting->mandatory)?(string)$coreFieldFilterSetting->mandatory:'';
                    array_push($core,$coreFieldFilterSetting);
                }
            }

        }

        foreach ($custom as $customField){

            $customField->placeholder = __($customField->placeholder,[],$request->language_symbol);
            $customField->name = __($customField->name,[],$request->language_symbol);

        }

        return [
            "custom" => $custom,
            "core" => $core
        ];
    }

    public function storeFromApi($request, $moduleName){

        // check permission start
        $deviceToken = $request->header($this->deviceTokenParaApi);

        $userAccessApiToken = $this->userAccessApiTokenService->getUserAccessApiToken( $request->login_user_id, $deviceToken);

        if (empty($userAccessApiToken)){
            $msg = __('core__api_update_no_permission',[],$request->language_symbol);
            return ['error' =>  $msg,'status' =>  $this->forbiddenStatusCode ];
        }

        if(isset($request->added_user_id) && !empty($request->added_user_id)){
            $added_user_id = $request->added_user_id;
        }else{
            $added_user_id = $request->login_user_id;
        }
        $systemConfig = $this->systemConfigService->getSystemConfig();

        // check approval on?

        $status = $systemConfig->is_approved_enable == 1 ? $this->approvalItem : $this->publishItem;
        if($status == 0){
            $request->status = null;
        }else{
            $request->status = $this->publishItem;
        }
        if($systemConfig->is_paid_app == 1){
            $conds['user_id'] = $added_user_id;
            $userInfo = $this->userInfoService->getUserInfo(null, null, $this->usrRemainingPost, $conds);

            if(empty($userInfo) || $userInfo->value == 0){
                return ['error' =>  __('core__api_not_enought_to_post',[],$request->language_symbol), 'status' =>  $this->badRequestStatusCode ];
            }else{
                $item = $this->storeCoreFieldValues($request, $status);

                // same from be
                $customizeHeaders = $this->getCustomizeFields($this->code,null,null,0);
                $customizeHeaderIds = $this->getValueByPluck($customizeHeaders, $this->customUiCoreKeysIdCol);
                $this->storeCustomFieldValues($request, $item, $customizeHeaderIds);
                // same from be

                // update remaining post count
                $user_data = new \stdClass();
                $user_data->value = $userInfo->value - 1;
                $this->userInfoService->update($userInfo->id, $user_data);

            }
        }else{
            $item = $this->storeCoreFieldValues($request, $status);

            // same from be
            $customizeHeaders = $this->getCustomizeFields($this->code,null,null,0);
            $customizeHeaderIds = $this->getValueByPluck($customizeHeaders, $this->customUiCoreKeysIdCol);
            $this->storeCustomFieldValues($request, $item, $customizeHeaderIds);
            // same from be
        }

        // send noti to subcat scribers start
        if($status == $this->publishItem){
            $this->sendSubscribeNoti($item);
        }
        //  send noti to subcat scribers end

        return $item;
    }

    public function updateFromApi($request, $item){
        // check permission start
        $deviceToken = $request->header($this->deviceTokenParaApi);
        $userAccessApiToken = $this->userAccessApiTokenService->getUserAccessApiToken( $request->login_user_id, $deviceToken);

        if (empty($userAccessApiToken)){
            $msg = __('core__api_update_no_permission',[],$request->language_symbol);
            return ['error' =>  $msg,'status' =>  $this->forbiddenStatusCode ];
        }
        // check permission end

        $systemConfig = $this->systemConfigService->getSystemConfig();
        $status = $systemConfig->is_approved_enable == 1 ? $this->approvalItem : $this->publishItem;
        if(isset($request->status)){
            $request->status = null;
        }


        // same from be
        $item = $this->updateCoreFieldValues($request,$status);
        $data = $this->updateCustomFieldOldValues($request, $item);
        $newDataIndexs = array_diff(array_unique($data['allDataIndex']), array_unique($data['oldDataIndex']));
        $this->storeCustomFieldValues($request, $item, $newDataIndexs);
        // same from be

        return $item->id;
    }

    public function destroyFromApi($request, $id){
        // check permission start
        $deviceToken = $request->header($this->deviceTokenParaApi);
        $userAccessApiToken = $this->userAccessApiTokenService->getUserAccessApiToken( $request->login_user_id, $deviceToken);

        $item = $this->getItem($id);
        if (empty($item)){
            return  ['error' =>  __('core__be_item_invalid',[],$request->language_symbol),'status' =>  $this->badRequestStatusCode ];
        }

        $checkOwnerShip = checkOwnerShip($item, $request->login_user_id);

        if (empty($userAccessApiToken) || !$checkOwnerShip){
            $msg = __('core__api_update_no_permission',[],$request->language_symbol);
            return ['error' =>  $msg,'status' =>  $this->forbiddenStatusCode ];
        }
        // check permission end

        //delete in posts table
        $item = $this->getItem($id);

        if (!empty($item)){
            $item->delete();

            $images = $this->imageService->getImages($id, 'item');
            $this->imageService->deleteImagesFromBoth($images);

            //delete in product_relations table
            $productRelations = $this->getValuesForCustomizeField('',$item->id);
            $this->deleteCustomizeFieldData($productRelations);
        }

        if (empty($item)){
            return  ['error' =>  __('core__be_item_invalid',[],$request->language_symbol),'status' =>  $this->badRequestStatusCode ];
        } else {
            return  ['success' =>  __('core__api_item_delete_success',[],$request->language_symbol),'status' =>  $this->okStatusCode ];
        }
    }

    public function getGalleryListFromApi($request){
        $itemId =  $request->img_parent_id;
        $limit = $request->limit;
        $offset = $request->offset;
        $imageType = $request->img_type ?? null;

        $dataConds = [];

        $item = $this->getItem($itemId);

        if (!$item) {
            return  ['error' =>  __('core__api_invalid_item',[],$request->language_symbol),'status' =>  $this->badRequestStatusCode ];
        } else {

            $images = $this->imageService->getImages($itemId,$imageType,$limit,$offset);
            return $images;

        }
    }
    public function destoryImageFromApi($request, $id)
    {
        // check permission start
        $deviceToken = $request->header($this->deviceTokenParaApi);
        $userAccessApiToken = $this->userAccessApiTokenService->getUserAccessApiToken( $request->login_user_id, $deviceToken);

        if (empty($userAccessApiToken)){
            $msg = __('core__api_update_no_permission',[],$request->language_symbol);
            return ['error' =>  $msg,'status' =>  $this->forbiddenStatusCode ];
        }
        // check permission end

        $cond['id'] = $id;
        $image = $this->imageService->getImage($cond);

        if (empty($image)){
            $msg = __('core__api_no_image_with_this_id',[],$request->language_symbol);
            return  ['error' => $msg ,'status' =>  $this->noContentStatusCode ];
        } else {
            try {
                $this->imageService->destroy($id);
            } catch (\Throwable $e){
                return  ['error' => __('core__api_db_error',[],$request->language_symbol) ,'status' =>  $this->internalServerErrorStatusCode ];
            }

            return  ['success' =>  __('core__api_delete_image_success',[],$request->language_symbol),'status' =>  $this->okStatusCode ];
        }
    }
    public function destoryVideoFromApi($request, $id)
    {
        // check permission start
        $deviceToken = $request->header($this->deviceTokenParaApi);
        $userAccessApiToken = $this->userAccessApiTokenService->getUserAccessApiToken( $request->login_user_id, $deviceToken);

        if (empty($userAccessApiToken)){
            $msg = __('core__api_update_no_permission',[],$request->language_symbol);
            return ['error' =>  $msg,'status' =>  $this->forbiddenStatusCode ];
        }
        // check permission end

        $cond['id'] = $id;
        $image = $this->imageService->getImage($cond);
        $msg = __('core__api_delete_video_success',[],$request->language_symbol);

        if (empty($image)){
            $msg = __('core__api_no_video_with_this_id',[],$request->language_symbol);
            return  ['error' => $msg ,'status' =>  $this->noContentStatusCode ];
        } else {
            if($image->img_type == 'item-video-icon'){
                $msg = __('core__api_delete_icon_success',[],$request->language_symbol);
            }

            try {
                $this->imageService->destroy($id);

            } catch (\Throwable $e){
                return  ['error' => __('core__api_db_error',[],$request->language_symbol) ,'status' =>  $this->internalServerErrorStatusCode ];
            }

            return  ['success' =>  $msg,'status' =>  $this->okStatusCode ];
        }
    }

    public function uploadCoverFromApi($request){
        $itemId = $request->item_id;
        $imgId = $request->img_id;
        $coverImgType = 'item';

        // check permission start
        $deviceToken = $request->header($this->deviceTokenParaApi);
        $userAccessApiToken = $this->userAccessApiTokenService->getUserAccessApiToken( $request->login_user_id, $deviceToken);

        if (empty($userAccessApiToken)){
            $msg = __('core__api_update_no_permission',[],$request->language_symbol);
            return ['error' =>  $msg,'status' =>  $this->forbiddenStatusCode ];
        }
        // check permission end

        $item = $this->getItem($itemId);
        $owner_id = $item->added_user_id;

        if ($request->login_user_id == $owner_id) {

            DB::beginTransaction();
            try {
                if (empty($imgId)){

                    $systemConfig = $this->systemConfigService->getSystemConfig();
                    $images = $this->imageService->getImages($itemId, 'item');
                    if (!empty($images) && $systemConfig->max_img_upload_of_item < count($images->toArray())) {
                        return  ['error' => __('core__api_err_max_img_upload',[],$request->language_symbol) ,'status' =>  $this->badRequestStatusCode ];
                    }

                    $this->storeImage($request, 'cover', $coverImgType, $itemId);
                } else {
                    $this->updateImage($request, 'cover', $coverImgType, $itemId);
                }
                $this->saveDeeplink($coverImgType, $itemId);
                DB::commit();
            } catch (\Throwable $e){
                DB::rollBack();
                return  ['error' => __('core__api_db_error',[],$request->language_symbol) ,'status' =>  $this->internalServerErrorStatusCode ];
            }

            $conds = [$this->coreImageImgParentIdCol => $itemId, $this->coreImageImgTypeCol => $coverImgType];
            $uploadedCover = $this->imageService->getImage($conds);
            if (empty($uploadedCover)){
                return  ['error' => __('core__api_record_not_found',[],$request->language_symbol) ,'status' =>  $this->noContentStatusCode ];
            } else {
                return  $uploadedCover;
            }
        }
        else{
            return ['error' => __('core__api_unauthorize_item_edit',[],$request->language_symbol) ,'status' =>  $this->forbiddenStatusCode ];
        }
    }

    public function uploadIconFromApi($request){
        $itemId = $request->item_id;
        $imgId = $request->img_id;
        $coverImgType = 'item-video-icon';

        // check permission start
        $deviceToken = $request->header($this->deviceTokenParaApi);
        $userAccessApiToken = $this->userAccessApiTokenService->getUserAccessApiToken( $request->login_user_id, $deviceToken);

        if (empty($userAccessApiToken)){
            $msg = __('core__api_update_no_permission',[],$request->language_symbol);
            return ['error' =>  $msg,'status' =>  $this->forbiddenStatusCode ];
        }
        // check permission end

        $owner_id = $this->getItem($itemId)->added_user_id;

        if ($request->login_user_id == $owner_id) {

            DB::beginTransaction();
            try {
                if (empty($imgId)){
                    $this->storeImage($request, 'video_icon', $coverImgType, $itemId);
                } else {
                    $this->updateImage($request, 'video_icon', $coverImgType, $itemId);
                }
                DB::commit();
            } catch (\Throwable $e){
                DB::rollBack();
                return  ['error' => __('core__api_db_error',[],$request->language_symbol) ,'status' =>  $this->internalServerErrorStatusCode ];
            }

            $conds = [$this->coreImageImgParentIdCol => $itemId, $this->coreImageImgTypeCol => $coverImgType];
            $uploadedCover = $this->imageService->getImage($conds);
            if (empty($uploadedCover)){
                return  ['error' => __('core__api_record_not_found',[],$request->language_symbol) ,'status' =>  $this->noContentStatusCode ];
            } else {
                return $uploadedCover;
            }
        }
        else{
            return ['error' => __('core__api_unauthorize_item_edit') ,'status' =>  $this->forbiddenStatusCode ];
        }
    }

    public function uploadVideoFromApi($request){
        $itemId = $request->item_id;
        $imgId = $request->img_id;
        $coverImgType = 'item-video';

        // check permission start
        $deviceToken = $request->header($this->deviceTokenParaApi);
        $userAccessApiToken = $this->userAccessApiTokenService->getUserAccessApiToken( $request->login_user_id, $deviceToken);

        if (empty($userAccessApiToken)){
            $msg = __('core__api_update_no_permission',[],$request->language_symbol);
            return ['error' =>  $msg,'status' =>  $this->forbiddenStatusCode ];
        }
        // check permission end

        $owner_id = $this->getItem($itemId)->added_user_id;

        if ($request->login_user_id == $owner_id) {

            DB::beginTransaction();
            try {
                if (empty($imgId)){
                    $this->storeVideo($request, 'video', $coverImgType, $itemId);
                } else {
                    $this->updateVideo($request, 'video', $coverImgType, $itemId);
                }
                DB::commit();
            } catch (\Throwable $e){
                DB::rollBack();
                return ['error' => __('core__api_db_error',[],$request->language_symbol) ,'status' =>  $this->internalServerErrorStatusCode ];
            }

            $conds = [$this->coreImageImgParentIdCol => $itemId, $this->coreImageImgTypeCol => $coverImgType];
            $uploadedCover = $this->imageService->getImage($conds);
            if (empty($uploadedCover)){
                return ['error' => __('core__api_record_not_found',[],$request->language_symbol) ,'status' =>  $this->noContentStatusCode ];
            } else {
                return $uploadedCover;
            }
        }
        else{
            return ['error' => __('core__api_unauthorize_item_edit',[],$request->language_symbol) ,'status' =>  $this->forbiddenStatusCode ];
        }
    }

    public function reorderImagesFromApi($request){
        // check permission start
        $deviceToken = $request->header($this->deviceTokenParaApi);
        $userAccessApiToken = $this->userAccessApiTokenService->getUserAccessApiToken( $request->login_user_id, $deviceToken);

        if (empty($userAccessApiToken)){
            $msg = __('core__api_update_no_permission',[],$request->language_symbol);
            return ['error' =>  $msg,'status' =>  $this->forbiddenStatusCode ];
        }
        // check permission end

        $login_user_id = $request->login_user_id;
        $image_orders = $request->json()->all();
        foreach ($image_orders as $image_order) {
            if (isset($image_order['img_id'])) {
                $conds['id'] = $image_order['img_id'];
                $image = $this->imageService->getImage($conds);
                if(empty($image)){
                    return ['error' => __('core__api_image_not_exist',[],$request->language_symbol) ,'status' =>  $this->badRequestStatusCode ];
                }

                $owner_id = $this->getItem($image->img_parent_id)->added_user_id;

                if ($login_user_id == $owner_id) {
                    $data = new \stdClass();
                    $data->ordering = $image_order['ordering'];
                    $image = $this->imageService->updateOrdering($data, $image_order['img_id']);
                    if (isset($image['error'])) {
                        return ['error' => __('core__api_db_error',[],$request->language_symbol) ,'status' =>  $this->internalServerErrorStatusCode ];
                    }
                } else {
                    return ['error' => __('core__api_unauthorize_reorder_img_edit',[],$request->language_symbol) ,'status' =>  $this->forbiddenStatusCode ];
                }
            }
        }
        return ['success' => __('core__api_success_image_reorder',[],$request->language_symbol) ,'status' =>  $this->createdStatusCode ];
    }

    public function noDataError($offset, $data){
        if ($offset > 0 && $data->isEmpty()) {
            // no paginate data
            $data = [];
            return responseDataApi($data);

        } else if($data->isEmpty()) {
            // no data db
            return responseMsgApi(__('core__api_no_data'), $this->noContentStatusCode, $this->successStatus);
        }
    }

    public function searchFromApi($request){
        $offset = $request->offset;
        $limit = $request->limit;
        $systemConfig = $this->systemConfigService->getSystemConfig();

        $conds['searchterm'] = $request->searchterm;
        $conds['category_id'] = $request->cat_id;
        $conds['subcategory_id'] = $request->sub_cat_id;
        $conds['currency_id'] = $request->item_currency_id;
        $conds['location_city_id'] = $request->item_location_id;
        $conds['location_township_id'] = $request->item_location_township_id;
        $conds['max_price'] = $request->max_price;
        $conds['min_price'] = $request->min_price;
        $conds['lat'] = $request->lat;
        $conds['lng'] = $request->lng;
        $conds['miles'] = $request->miles;
        $conds['order_by'] = $request->order_by;
        $conds['order_type'] = $request->order_type;
        $conds['added_user_id'] = $request->added_user_id;
        $conds['status'] = $request->status;
        $conds['is_sold_out'] = $request->is_sold_out;
        $conds['is_discount'] = $request->is_discount;
        $conds['product_relation'] = $request->product_relation;

        // dd( $conds['product_relation']);
        /* Start For Block User */
        $condsNotIn = [];
        if ($systemConfig->is_block_user == 1) {
            $block_ids = $this->blockUserService->getBlockUserIds($request->login_user_id);
            if (!empty($block_ids)) {
                $condsNotIn['blockUserIds'] = $block_ids;
            }
        }
        /* End For Block User */

        $itemApiRelation = ['category', 'subcategory', 'city', 'township', 'currency', 'owner', 'itemRelation', 'cover', 'video', 'icon'];

        $interval = $systemConfig->promo_cell_interval_no;
        $ad_post_types = AdPostType::get()->pluck("key")->toArray();
        $ad_post_type = AdPostType::find($systemConfig->ad_type)->key;
        // get ad_post_type
        if(isset($request->ad_post_type) && !empty($request->ad_post_type)){
            if(in_array($request->ad_post_type, $ad_post_types)){
                $ad_post_type = $request->ad_post_type;
            }else if($request->ad_post_type == $this->onlyPaidItemAdType){
                $ad_post_type = $request->ad_post_type;
            }
        }

        if ($ad_post_type == $this->onlyPaidItemAdType) {
            $items = $this->getPaidItems($itemApiRelation, $limit, $offset, $conds, $condsNotIn);
        } else if ($ad_post_type == $this->normalAdsOnlyAdType) {
            $items = $this->getNormalItems($itemApiRelation, $limit, $offset, $conds, $condsNotIn);
        } else if ($ad_post_type == $this->paidItemFirstAdType) {
            $paidItems = $this->getPaidItems($itemApiRelation, $limit, $offset, $conds, $condsNotIn);
            $paidCount = $paidItems->count();
            if (!empty($limit) && !empty($offset)) {
                if ($paidCount < $limit) {
                    $limit = $limit - $paidCount;
                    $paid = $this->getPaidItems($itemApiRelation, $limit, null, $conds, $condsNotIn);
                    $offset = $offset - $paid->count();
                    if($offset<0){
                        $offset=0;
                    }
                }
            }else if(!empty($limit)){
                $limit = $limit - $paidCount;
            }

            $normalItems = $this->getNormalItems($itemApiRelation, $limit, $offset, $conds, $condsNotIn);

            if($paidItems->count()>0){
                $items = $paidItems->merge($normalItems);
            }else{
                $items = $normalItems;
            }
        } else if ($ad_post_type == $this->googleAdsBetweenAdType) {
            $dataLimit = $this->getLimitForAdPostType($limit, $offset, $interval, 'google_ads_between');
            $normalLimit = $dataLimit['normalLimit'];
            $dataOffset = $this->getOffsetForAdPostType($offset, $interval);
            $normalOffset = $dataOffset['normalOffset'];

            $normalItems = $this->getNormalItems($itemApiRelation, $normalLimit, $normalOffset, $conds, $condsNotIn);

            $googleItem = new \stdClass;
            $googleItem->ad_type = $this->googleAd;

            // $total = $normalItems->count() ? $normalItems->count() : 0;
            $items = array();
            // $start = $offset ? (int) $offset % ($interval+1) : 0;

            $normalItemsIndex = 0;
            // $googleIndex = 0;
            for ($x = 0; $x < count($dataLimit['exampleOutput']); $x ++) {
                if($dataLimit['exampleOutput'][$x] == 'one' && $normalItemsIndex < $normalItems->count() && $normalItems->count() > 0){
                    array_push($items, $normalItems[$normalItemsIndex]);
                    $normalItemsIndex = $normalItemsIndex + 1;
                }else{
                    array_push($items, $googleItem);
                    // $googleIndex = $googleIndex + 1;
                }
            }


        } else if ($ad_post_type == $this->bumpsUpsBetweenAdType) {
            $dataLimit = $this->getLimitForAdPostType($limit, $offset, $interval, 'bumps_ups_between');
            $normalLimit = $dataLimit['normalLimit'];
            $paidLimit = $dataLimit['paidLimit'];
            $dataOffset = $this->getOffsetForAdPostType($offset, $interval);
            $normalOffset = $dataOffset['normalOffset'];
            $paidOffset = $dataOffset['paidOffset'];
            $dataOffset = $this->getOffsetForAdPostType($offset, $interval);
            $paidItems = $this->getPaidItems($itemApiRelation, $paidLimit, $paidOffset, $conds, $condsNotIn);
            if($paidItems->count()<$paidLimit){
                $paid = $this->getPaidItems($itemApiRelation, $paidLimit, null, $conds, $condsNotIn);
                $normalLimit = $normalLimit + ($paidLimit - $paidItems->count());
                if($paidItems->count() < $paidOffset){
                    $normalOffset = $normalOffset + ($paidOffset - $paid->count());
                }
            }
            $normalItems = $this->getNormalItems($itemApiRelation, $normalLimit, $normalOffset, $conds, $condsNotIn);
            $normalItemsIndex = 0;
            $paidIndex = 0;
            $items = array();
            for ($x = 0; $x < count($dataLimit['exampleOutput']); $x ++) {

                if(($dataLimit['exampleOutput'][$x] == 'one' || $paidIndex+1 > $paidItems->count()) && $normalItemsIndex < $normalItems->count() && $normalItems->count() > 0){
                    array_push($items, $normalItems[$normalItemsIndex]);
                    $normalItemsIndex = $normalItemsIndex + 1;
                }else if($paidItems->count() != 0 && $paidIndex < $paidItems->count()){
                    array_push($items, $paidItems[$paidIndex]);
                    $paidIndex = $paidIndex + 1;
                }else if($normalItemsIndex < $normalItems->count() && $normalItems->count() > 0){
                    array_push($items, $normalItems[$normalItemsIndex]);
                    $normalItemsIndex = $normalItemsIndex + 1;
                }
            }
            // $total = $normalItems->count() ? $normalItems->count() : 0;
            // $items = array();
            // $paidIndex = 0;
            // $start = $offset ? (int) $offset % ($interval+1) : 0;
            // for ($x = 0; $x < $total; $x += $interval) {
            //     for ($i = 0; $i < $interval; $i++) {
            //         if($x+$i < $total){
            //             array_push($items, $normalItems[$x + $i]);
            //         }
            //     }
            //     $start = 0;
            //     if ($x + $i < $total && $paidIndex<$paidItems->count()) {
            //         array_push($items, $paidItems[$paidIndex++]);
            //     }
            // }

        } else if ($ad_post_type == $this->bumbsAndGoogleAdsBetweenAdType) {
            $dataLimit = $this->getLimitForAdPostType($limit, $offset, $interval, 'bumps_and_google_ads_between');
            $normalLimit = $dataLimit['normalLimit'];
            $paidLimit = $dataLimit['paidLimit'] / 2;
            $dataOffset = $this->getOffsetForAdPostType($offset, $interval);
            $normalOffset = $dataOffset['normalOffset'];
            $paidOffset = $dataOffset['paidOffset'];
            $paidItems = $this->getPaidItems($itemApiRelation, $paidLimit, $paidOffset, $conds, $condsNotIn);
            $normalItems = $this->getNormalItems($itemApiRelation, $normalLimit, $normalOffset, $conds, $condsNotIn);
            $googleItem = new \stdClass;
            $googleItem->ad_type = $this->googleAd;

            $total = $normalItems->count() ? $normalItems->count() : 0;
            $items = array();

            $normalItemsIndex = 0;
            $paidIndex = 0;
            $showGoogle = false;
            for ($x = 0; $x < count($dataLimit['exampleOutput']); $x ++) {
                if($dataLimit['exampleOutput'][$x] == 'one'  && $normalItemsIndex < $normalItems->count() && $normalItems->count() > 0 ){
                    array_push($items, $normalItems[$normalItemsIndex]);
                    $normalItemsIndex = $normalItemsIndex + 1;
                }else if($showGoogle == false && $paidIndex < $paidItems->count() && $paidItems->count() > 0){
                    array_push($items, $paidItems[$paidIndex]);
                    $paidIndex = $paidIndex + 1;
                    $showGoogle = !$showGoogle;
                }else{
                    array_push($items, $googleItem);
                    $showGoogle = !$showGoogle;
                }
            }

            // $paidIndex = 0;
            // $isPaidItem = 1;
            // $start = $offset ? (int) $offset % ($interval+1) : 0;
            // $paidExist = $paidItems->count()>0?1:0;
            // for ($x = 0; $x < $total; $x += $interval) {
            //     for ($i = 0; $i < $interval; $i++) {
            //         if($x+$i < $total){
            //             array_push($items, $normalItems[$x + $i]);
            //         }
            //     }
            //     $start = 0;
            //     if ($isPaidItem == 1 && $paidExist == 1) {
            //         if($x+$i < $total ){
            //             array_push($items, $paidItems[$paidIndex++]);
            //             $isPaidItem = 0;
            //             if($paidIndex < $paidItems->count()){
            //                 $paidExist = 1;
            //             }else{
            //                 $paidExist = 0;
            //             }
            //         }
            //     } else {
            //         if($x+$i < $total){
            //             array_push($items, $googleItem);
            //             $isPaidItem = 1;
            //         }
            //     }
            // }
        } else if ($ad_post_type == $this->paidItemFirstWithGoogleAdType) {
            $paidItems = $this->getPaidItems($itemApiRelation, $limit, $offset, $conds, $condsNotIn);
            $paidCount = $paidItems->count();

            if (!empty($limit) && !empty($offset)) {
                if ($paidCount < $limit) {
                    $limit = $limit - $paidCount;
                    $paid = $this->getPaidItems($itemApiRelation, $limit, null, $conds, $condsNotIn);
                    $offset = $offset - $paid->count();
                    if ($offset < 0) {
                        $offset = 0;
                    }
                }
            } else if (!empty($limit)) {
                $limit = $limit - $paidCount;
            }

            $dataLimit = $this->getLimitForAdPostType($limit, $offset, $interval, 'paid_item_first_with_google');
            $normalLimit = $dataLimit['normalLimit'];
            $dataOffset = $this->getOffsetForAdPostType($offset, $interval);
            $normalOffset = $dataOffset['normalOffset'];

            $googleItem = new \stdClass;
            $googleItem->ad_type = $this->googleAd;

            $normalItems = $this->getNormalItems($itemApiRelation, $normalLimit, $normalOffset, $conds, $condsNotIn);

            $normalItemsIndex = 0;
            $paidIndex = 0;
            $showGoogle = false;
            $items = array();
            for ($x = 0; $x < count($dataLimit['exampleOutput']); $x ++) {
                if($paidIndex<$paidItems->count() && $paidItems->count() != 0 ){
                    array_push($items, $paidItems[$paidIndex]);
                    $paidIndex = $paidIndex + 1;
                }else if($dataLimit['exampleOutput'][$x] == 'one'  && $normalItemsIndex < $normalItems->count() && $normalItems->count() > 0){
                    array_push($items, $normalItems[$normalItemsIndex]);
                    $normalItemsIndex = $normalItemsIndex + 1;
                }else{
                    array_push($items, $googleItem);
                    $showGoogle = !$showGoogle;
                }
            }
            // $total = $normalItems->count() ? $normalItems->count() : 0;
            // $items = array();
            // $paidIndex = 0;
            // foreach($paidItems as $p){
            //     array_push($items, $p);
            // }
            // $start = $offset?(int)$offset%$interval:0;
            // for ($x = 0; $x < $total; $x += $interval) {
            //     for ($i = 0; $i < $interval; $i++) {
            //         if ($x + $i < $total) {
            //             array_push($items, $normalItems[$x + $i]);
            //         }
            //     }
            //     $start = 0;
            //     if ($x + $i < $total) {
            //         array_push($items, $googleItem);
            //     }
            // }
        }

        // save search history
        if(isset($request->searchterm) && !empty($request->searchterm)){
            $searchdata = new \stdClass;
            $searchdata->user_id = $request->login_user_id;
            $searchdata->keyword = $request->searchterm;
            $searchdata->type = $this->searchHistoryItemType;
            $searchdata->added_user_id = $request->login_user_id;
            $this->searchHistoryService->store($searchdata);
        }

        return $items;
    }

    public function allSearchFromApi($request){
        $offset = $request->offset;
        $limit = $request->limit;

        $type = $request->type;
        $backendSetting = $this->backendSettingService->getBackendSetting();

        $searchItemLimit = $backendSetting->search_item_limit;
        $searchCategoryLimit = $backendSetting->search_category_limit;
        $searchUserLimit = $backendSetting->search_user_limit;

        $conds['keyword'] = $request->keyword; // for others
        $conds1['searchterm'] = $request->keyword; // for item search

        if($type == $this->categoryType){
            if($limit){
                $limit = $limit;
            }else{
                $limit = $searchCategoryLimit;
            }
            $categoryApiRelation = ['defaultPhoto', 'defaultIcon'];
            $categories = $this->categoryService->getCategories($categoryApiRelation, true, $limit, $offset, $conds);

            // save search history
            if(isset($request->keyword) && !empty($request->keyword) && isset($request->login_user_id) && !empty($request->login_user_id)){
                $searchdata = new \stdClass;
                $searchdata->user_id = $request->login_user_id;
                $searchdata->keyword = $request->keyword;
                $searchdata->type = $this->searchHistoryCategoryType;
                $searchdata->added_user_id = $request->login_user_id;
                $this->searchHistoryService->store($searchdata);
            }

            return [
                'items' => [],
                'categories' => $categories,
                'users' => [],
            ];

        }else if($type == $this->userType){
            if($limit){
                $limit = $limit;
            }else{
                $limit = $searchUserLimit;
            }
            $users = $this->userService->getUsers(null, true, null, $conds, $limit, $offset);

            // save search history
            if(isset($request->keyword) && !empty($request->keyword) && isset($request->login_user_id) && !empty($request->login_user_id)){
                $searchdata = new \stdClass;
                $searchdata->user_id = $request->login_user_id;
                $searchdata->keyword = $request->keyword;
                $searchdata->type = $this->searchHistoryUserType;
                $searchdata->added_user_id = $request->login_user_id;
                $this->searchHistoryService->store($searchdata);
            }

            return [
                'items' => [],
                'categories' => [],
                'users' => $users,
            ];

        }else if($type == $this->itemType){
            if($limit){
                $limit = $limit;
            }else{
                $limit = $searchItemLimit;
            }
            $itemApiRelation = $this->itemApiRelation;
            $items = $this->getItems($itemApiRelation, true, null. $limit, $offset, $conds1);

            // save search history
            if(isset($request->keyword) && !empty($request->keyword) && isset($request->login_user_id) && !empty($request->login_user_id)){
                $searchdata = new \stdClass;
                $searchdata->user_id = $request->login_user_id;
                $searchdata->keyword = $request->keyword;
                $searchdata->type = $this->searchHistoryItemType;
                $searchdata->added_user_id = $request->login_user_id;
                $this->searchHistoryService->store($searchdata);
            }

            return [
                'items' => $items,
                'categories' => [],
                'users' => [],
            ];

        }else if($type == $this->allType){
            if($limit){
                $searchCategoryLimit = $limit;
                $searchItemLimit = $limit;
                $searchUserLimit = $limit;
            }

            $categoryApiRelation = ['defaultPhoto', 'defaultIcon'];
            $categories = $this->categoryService->getCategories($categoryApiRelation, true, $searchCategoryLimit, $offset, $conds);

            $users = $this->userService->getUsers(null, true, null, $conds, $searchUserLimit, $offset);

            $itemApiRelation = $this->itemApiRelation;
            $items = $this->getItems($itemApiRelation, true, null, $searchItemLimit, $offset, $conds1);

            // save search history
            if(isset($request->keyword) && !empty($request->keyword) && isset($request->login_user_id) && !empty($request->login_user_id)){
                $searchdata = new \stdClass;
                $searchdata->user_id = $request->login_user_id;
                $searchdata->keyword = $request->keyword;
                $searchdata->type = $this->searchHistoryAllType;
                $searchdata->added_user_id = $request->login_user_id;
                $this->searchHistoryService->store($searchdata);
            }

            return [
                'items' => $items,
                'categories' => $categories,
                'users' => $users,
            ];
        }
    }

    public function getRelatedTrendingFromApi($request){
        $offset = $request->offset;
        $limit = $request->limit;
        $systemConfig = $this->systemConfigService->getSystemConfig();

        $conds['category_id'] = $request->cat_id;
        $conds['order_by'] = 'item_touch_count';
        $conds['order_type'] = 'desc';



        /* Start For Block User */
        $condsNotIn = [];
        if ($systemConfig->is_block_user == 1) {
            $block_ids = $this->blockUserService->getBlockUserIds($request->login_user_id);
            if (!empty($block_ids)) {
                $condsNotIn['blockUserIds'] = $block_ids;
            }
        }
        /* End For Block User */

        $condsNotIn['ids'] = [$request->id];

        $itemApiRelation = ['category', 'subcategory', 'city', 'township', 'currency', 'owner', 'itemRelation', 'cover', 'video', 'icon'];

        $items = $this->getNormalItems($itemApiRelation, $limit, $offset, $conds, $condsNotIn);
        return $items;

    }

    public function soldOutFromItemDetailFromApi($request){

        $item_sold_out = Item::where('id', $request->item_id)->first();

        // check permission start
        $deviceToken = $request->header($this->deviceTokenParaApi);
        $userAccessApiToken = $this->userAccessApiTokenService->getUserAccessApiToken( $request->login_user_id, $deviceToken);

        $checkOwnerShip = checkOwnerShip($item_sold_out, $request->login_user_id);

        if (empty($userAccessApiToken) || !$checkOwnerShip){
            $msg = __('core__api_update_no_permission',[],$request->language_symbol);
            return ['error' =>  $msg,'status' =>  $this->forbiddenStatusCode ];
        }
        // check permission end


            if (!$item_sold_out){
                return  ['error' => __('core__api_record_not_found',[],$request->language_symbol) ,'status' =>  $this->noContentStatusCode ];
            }

            $item_sold_out->id = $request->item_id;
            $item_sold_out->is_sold_out = '1';
            $item_sold_out->update();


            if(isset($item_sold_out['error'])){
                return  ['error' => __('core__api_db_error',[],$request->language_symbol) ,'status' =>  $this->internalServerErrorStatusCode ];
            } else {
                $itemApiRelation = $this->itemApiRelation;

                $item = $this->getItem($request->item_id,$itemApiRelation);
                return $item;
            }
    }

    public function sendApprovalNoti($id){
        $item = $this->getItem($id);
        // send approval noti
        $user = $this->userService->getUser($item->added_user_id);
        $token_conds['user_id'] = $user->id;
        $notiTokens = $this->pushNotificationTokenService->getNotiTokens(null, $token_conds);
        $device_ids = [];
        $platform_names = [];
        foreach ($notiTokens as $token) {
            $device_ids[] = $token->device_token;
            $platform_names[] = $token->platform_name;
        }

        if($item->status == $this->publishItem){
            $message = __('core__be_item_approved_msg', ['item'=>$item->title]);
            $subject = __('core__be_item_approved');

            // if item approved, send subscribe noti
            $this->sendSubscribeNoti($item);

        }else if($item->status == $this->rejectItem){
            $message = __('core__be_item_rejected_msg', ['item'=>$item->title]);
            $subject = __('core__be_item_rejected');
        }else if($item->status == $this->disableItem){
            $message = __('core__be_item_disabled_msg', ['item'=>$item->title]);
            $subject = __('core__be_item_disabled');
        }else if($item->status == $this->approvalItem){
            $message = __('core__be_item_pending_msg', ['item'=>$item->title]);
            $subject = __('core__be_item_pending');
        }

        $data['message'] = $message;
        $data['flag'] = $this->approvalNotiFlag;
        // $data['item_id'] = $item->id;
        $status = send_android_fcm($device_ids, $data, $platform_names);
        // send approval mail
        $to = $user->email;
        $subject = $subject;
        $to_name = $user->name;
        $body = $message;
        sendMail($to, $to_name, null, $subject, $body);
    }

    public function sendSubscribeNoti($item){

        $updated_flag = $item->updated_flag;
        if($updated_flag == 0){
            $subcategory_id =  $item->subcategory_id;
            $subcategory = $this->subcategoryService->getSubcategory($subcategory_id);
            if($subcategory){

                $name = $subcategory->name;

                $subscribe_msg = __( 'core__new_item_upload_label') . ' ' . $name;




                $data['message'] = $subscribe_msg;
                $data['subscribe'] = 1;
                $data['push'] = 0;
                $data['subcategory_id'] = $subcategory_id;
                $data['item_id'] = $item->id;


                $dyn_link_deep_url = $this->backendSettingService->getBackendSetting()->dyn_link_deep_url;

                $prj_url = explode('/', $dyn_link_deep_url);
                $i = count($prj_url)-3;
                $prj_name = $prj_url[$i];




                // send subscribe noti to mobile or ios
                $status = send_android_fcm_topics_subscribe($data);

                // send subscribe noti to frontend
                // $status_fe = send_android_fcm_topics_subscribe_fe( $data, $prj_name );

                // update the updated_flag 1
                $item_data = new \stdClass;
                $item_data->id = $item->id;
                $item->updated_flag = 1;
                $this->updateCoreFieldValues($item_data);
            }
        }

    }
}
