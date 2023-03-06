<?php

namespace Modules\Core\Transformers\Backend\Model\Product;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;
use Modules\Core\Entities\CustomizeUiDetail;
use Modules\Core\Constants\Constants;
use Modules\ItemPromotion\Entities\PaidItemHistory;

class ProductWithKeyResource extends JsonResource
{

    public function toArray($request)
    {
        $normalAd = Constants::normalAd;
        $paidAd = Constants::paidAd;
        $paidItemRejected = Constants::paidItemRejected;
        $paidItemProgressStatus = Constants::paidItemProgressStatus;
        $paidItemCompletedStatus = Constants::paidItemCompletedStatus;
        $paidItemNotYetStartStatus = Constants::paidItemNotYetStartStatus;
        $paidItemWaitingForApproval = Constants::paidItemWaitingForApproval;
        $paidItemNotAvailable = Constants::paidItemNotAvailable;

        $dropDownUi = Constants::dropDownUi;
        $textUi = Constants::textUi;
        $radioUi = Constants::radioUi;
        $checkBoxUi = Constants::checkBoxUi;
        $dateTimeUi = Constants::dateTimeUi;
        $textAreaUi = Constants::textAreaUi;
        $numberUi = Constants::numberUi;
        $multiSelectUi = Constants::multiSelectUi;
        $imageUi = Constants::imageUi;
        $timeOnlyUi = Constants::timeOnlyUi;
        $dateOnlyUi = Constants::dateTimeUi;

        $changedCustomFieldFormat = [];
        $customizeDetails = CustomizeUiDetail::latest()->get();

        $customFields = $this->itemRelation;
        foreach ($customFields as $customField){
            if (!empty($customField->customizeUi)){
                if ($customField->customizeUi->enable === 1 && $customField->customizeUi->is_delete === 0){

                    $coreKeysId = $customField->core_keys_id;
                    $value = '';
                    if ($customField->ui_type_id === $dropDownUi){
                        foreach ($customizeDetails as $customizeDetail){
                            if ($customizeDetail->id == $customField->value){
                                $value = $customizeDetail->name;
                            }
                        }
                        $coreKeysId = $customField->core_keys_id."@@name";
                        $changedCustomFieldFormat[$customField->core_keys_id] = $customField->value;

                    } elseif ($customField->ui_type_id === $radioUi){
                        foreach ($customizeDetails as $customizeDetail){
                            if ($customizeDetail->id == $customField->value){
                                $value = $customizeDetail->name;
                            }
                        }
                        $coreKeysId = $customField->core_keys_id."@@name";
                        $changedCustomFieldFormat[$customField->core_keys_id] = $customField->value;

                    } elseif ($customField->ui_type_id === $dateTimeUi){
                        $value = $customField->value->format('d M Y, h : i');
                    } elseif ($customField->ui_type_id === $textAreaUi){
                        $value = Str::words($customField->value, 5, '...');
                    } elseif ($customField->ui_type_id === $timeOnlyUi){
                        $value = $customField->value->format('h:i');
                    } elseif ($customField->ui_type_id === $dateOnlyUi){
                        $value = $customField->value->format('d M Y');
                    } else {
                        $value = $customField->value;
                    }

                    $changedCustomFieldFormat[$coreKeysId] = $value;
                }

            }
        }

        // paid status
        $paid_conds['item_id'] = $this->id;
        $paid_histories = PaidItemHistory::where($paid_conds)->get();

        if (count($paid_histories) == 1) {
            $start_date = $paid_histories[0]->start_date;
            $end_date = $paid_histories[0]->end_date;

            $paid_status = getPaidStatus($start_date, $end_date);
        } else if (count($paid_histories) > 1) {
            if(isset($this->paid_item_id)){
                $paid_conds['id'] = $this->paid_item_id;
                $paid_history = PaidItemHistory::where($paid_conds)->first();
                $start_date = $paid_history->start_date;
                $end_date = $paid_history->end_date;
                $paid_status = getPaidStatus($start_date, $end_date);
            }else{
                foreach($paid_histories as $paid_history){
                    $start_date = $paid_history->start_date;
                    $end_date = $paid_history->end_date;
                    $paid_status = getPaidStatus($start_date, $end_date);
                    if($paid_status==Constants::paidItemProgressStatus){
                        break;
                    }
                }
            }
        } else {
            $paid_status = $paidItemNotAvailable;
        }
        
        return [
            'id' => $this->id,
            'title' => $this->title,
            'category_id' => $this->category_id,
            'category_id@@name' => isset($this->category) && !empty($this->category)? $this->category->name:'',
            'subcategory_id' => $this->subcategory_id,
            'subcategory_id@@name' => isset($this->subcategory) && !empty($this->subcategory)?$this->subcategory->name:'',
            'location_city_id' => $this->location_city_id,
            'location_city_id@@name' => isset($this->city) && !empty($this->city)?$this->city->name:'',
            'location_township_id' => $this->location_township_id,
            'location_township_id@@name' => isset($this->township) && !empty($this->township)?$this->township->name:'',
            'description' => $this->description,
            'price' => $this->price,
            'original_price' => $this->original_price,
            'lat' => $this->lat,
            'lng'=> $this->lng,
            'status' => $this->status,
            'added_date' => $this->added_date,
            'added_user_id' => $this->added_user_id,
            'added_user_id@@name' => isset($this->owner) && !empty($this->owner) ? $this->owner->name : '',
            'updated_date' => $this->updated_date,
            'updated_user_id' => $this->updated_user_id,
            'udpated_user_id@@name' => isset($this->editor) && !empty($this->editor)?(string)$this->editor->name:'',
            'updated_flag' => $this->updated_flag,
            'touch_count' => $this->touch_count,
            'favourite_count' => $this->favourite_count,
            'currency_id' => $this->currency_id,
            'currency_id@@currency_short_form' => isset($this->currency) && !empty($this->currency) ? $this->currency->currency_short_form : '',
            'currency_id@@currency_symbol' => isset($this->currency) && !empty($this->currency) ? $this->currency->currency_symbol : '',
            'dynamic_link' => $this->dynamic_link,
            'ordering' => $this->ordering,
            'overall_rating' => $this->overall_rating,
            'is_available' => $this->is_available,
            'is_sold_out' => $this->is_sold_out,
            'is_discount' => $this->is_discount,
            'paid_status' => isset($paid_status)?(string)$paid_status:'',
            'authorizations' => $this->authorization,
            'city' => $this->city,
            'phone' => $this->phone,
            'township' => $this->township,
            'owner' => $this->owner,
            'cover' => $this->cover,
            'video' => $this->video,
            'icon' => $this->icon,
            'category' => $this->category,
            'subcategory' => $this->subcategory,
            'item_relation' => $this->itemRelation,
        ] + $changedCustomFieldFormat;
    }
}
