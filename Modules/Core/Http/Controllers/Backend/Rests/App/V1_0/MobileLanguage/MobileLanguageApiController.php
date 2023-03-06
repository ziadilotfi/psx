<?php

namespace Modules\Core\Http\Controllers\Backend\Rests\App\V1_0\MobileLanguage;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Core\Entities\MobileLanguage;
use Modules\Core\Http\Services\MobileLanguageService;
use Modules\Core\Constants\Constants;
use Modules\Core\Transformers\Api\App\V1_0\MobileLanguage\MobileLanguageApiResource;

class MobileLanguageApiController extends Controller
{

    protected $mobileLanguageService;

    public function __construct(MobileLanguageService $mobileLanguageService)
    {
        $this->mobileLanguageService = $mobileLanguageService;
        $this->badRequestStatusCode = Constants::badRequestStatusCode;
    }

    public function langs(Request $request)
    {
        // return 'hi';
        $import = file_get_contents(base_path('lang/'.$request->symbol.'.json'));

        // echo json_encode($import);exit;
        if (!$import) {
            $import = file_get_contents(base_path('lang/en.json'));
        }
        return $import;

    }

    public function index(Request $request)
    {
        $mobileLanguages = $this->mobileLanguageService->indexFromApi($request);

        if(isset($mobileLanguages['error'])) {
            if(isset($mobileLanguages['status'])){
                return responseMsgApi($mobileLanguages['error'], $mobileLanguages['status']);
            }else{
                return responseMsgApi($mobileLanguages['error'], $this->badRequestStatusCode);
            }
            
        } else  {
            $data = MobileLanguageApiResource::collection($mobileLanguages);

            $hasError = $this->mobileLanguageService->noDataError( $request->offset, $data);

            if($hasError)
                return $hasError;
            else {
                return $data;
            }
        }
    }
    
    public function search(Request $request)
    {
        $mobileLanguages = $this->mobileLanguageService->searchFromApi($request);
        if(isset($mobileLanguages['error'])) {
            if(isset($mobileLanguages['status'])){
                return responseMsgApi($mobileLanguages['error'], $mobileLanguages['status']);
            }else{
                return responseMsgApi($mobileLanguages['error'], $this->badRequestStatusCode);
            }
            
        } else  {
            $data = MobileLanguageApiResource::collection($mobileLanguages);

            $hasError = $this->mobileLanguageService->noDataError( $request->offset, $data);

            if($hasError)
                return $hasError;
            else {
                return $data;
            }
        }
    }
}
