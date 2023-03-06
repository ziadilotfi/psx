<?php

namespace Modules\Core\Http\Controllers\Backend\Rests\App\V1_0\SearchHistory;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Core\Http\Services\SearchHistoryService;
use Modules\Core\Transformers\Api\App\V1_0\SearchHistory\SearchHistoryApiResource;
use Modules\Core\Constants\Constants;
use PHPUnit\TextUI\XmlConfiguration\Constant;

class SearchHistoryApiController extends Controller
{

    protected $searchHistoryService, $successStatus;

    public function __construct(SearchHistoryService $searchHistoryService)
    {
        $this->searchHistoryService = $searchHistoryService;
        $this->badRequestStatusCode = Constants::badRequestStatusCode;

        $this->successStatus = Constants::success;
    }

    public function search(Request $request)
    {
        $searchHistories = $this->searchHistoryService->searchFromApi($request);
        if(isset($searchHistories['error'])) {
            if(isset($searchHistories['status'])){
                return responseMsgApi($searchHistories['error'], $searchHistories['status']);
            }else{
                return responseMsgApi($searchHistories['error'], $this->badRequestStatusCode);
            }
            
        } else  {
            $data = SearchHistoryApiResource::collection($searchHistories);
            $hasError = $this->searchHistoryService->noDataError( $request->offset, $data);

            if($hasError)
                return $hasError;
                else {
                return $data;
            }
        }
    }
    
    public function destroy(Request $request)
    {
        $msg = $this->searchHistoryService->destroyFromApi($request);
        if(isset($msg['error'])) {
            if(isset($msg['status'])){
                return responseMsgApi($msg['error'], $msg['status']);
            }else{
                return responseMsgApi($msg['error'], $this->notFoundStatusCode);
            }
        }
        if(isset($msg['success'])) {
            if(isset($msg['status'])){
                return responseMsgApi($msg['success'], $msg['status'], $this->successStatus);
            }else{
                return responseMsgApi($msg['success'], $this->okStatusCode, $this->successStatus);
            }
        }
    }
}    