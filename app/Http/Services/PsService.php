<?php

namespace App\Http\Services;

use App\Config\ps_constant;
use Carbon\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Http;
use Modules\Core\Entities\ActivatedFileName;
use Modules\Core\Entities\Project;
use Modules\Core\Entities\SystemCode;

class PsService extends PsCoreService
{

    protected static $meta = [];

    public static function addMeta($name, $content)
    {
        static::$meta[$name] = $content;
    }

    public static function render()
    {
        $html = '';
        foreach (static::$meta as $name => $content) {
            $html .= '<meta name="'.$name.'" content="'.$content.'" />'.PHP_EOL;
            $html .= '<meta property="og:'.$name.'" content="'.$content.'"  inertia="o-'.$name.'">'.PHP_EOL;
            $html .= '<meta itemprop="g-'.$name.'" content="'.$content.'" inertia="o-'.$name.'">'.PHP_EOL;
            $html .= '<meta inertia="g-:'.$name.'" itemprop="'.$name.'" content="'.$content.'" >'.PHP_EOL;
            $html .= '<meta inertia="t-:'.$name.'" name="twitter:'.$name.'" content="'.$content.'" >'.PHP_EOL;
        }
        return $html;
    }

    public static function cleanup()
    {
        static::$meta = [];
    }

    function checkPermission($ability=null, $model=null, $routeName=null, $msg = null){
        if($msg == null){
            $msg = __("no_permission");
        }
        if (Gate::denies($ability,$model)){
            return redirectView($routeName, $msg, "danger");
        }
    }

    public function getSystemCode(){
        $old = SystemCode::first();
        if (!empty($old)) {
            $oldExploaded = explode("/n",base64_decode($old->code));

            if (empty($oldExploaded[2])){

                $installationDate = base64_decode($old->code);
                $code1 = Carbon::now();
                $code2 = Carbon::now()->addDays(ps_constant::freeTrialTotalDay);

                $systemCode = SystemCode::first();
                $systemCode->code = base64_encode($installationDate.$code1."/n".$code2);
                $systemCode->update();
            }

            $new = SystemCode::first();
            $allCodes = explode("/n",base64_decode($new->code));
    //        $date = date_create("2022-12-31 18:40:00");
            $date = date_create($allCodes[2]);
            $code2FromNew = date_format($date,"M d, Y h:i:s");
            return $code2FromNew;
        }

    }

    public function updateLicense($request){
        if (!config('app.development')) {
            if (App::environment("production")){
                // for production
                $purchaseCode = $request->purchased_code;
                $response = json_decode(Http::withHeaders([
                    'Authorization' => config('app.envato_token_type')." ".config('app.envato_token'),
                ])->get(ps_constant::envatoApiUri.ps_constant::envatoApiVersion.'/market/buyer/purchase?code='.$purchaseCode));
            } else {
                // for development start
                $purchaseCode = $request->purchased_code;
                if ($purchaseCode == "2aed1984-4f0e-480a-9d66-146959cfd75c"){
                    $response = json_decode(file_get_contents(public_path('json/buyser-purchase-response.json'), true));
                } else {
                    $response = "";
                }
                // for development end
            }
            $message = checkPurchasedCode($response);
            if (!empty($message)){
                return $message;
            }
        }

        $project = Project::first();
        if (empty($project)){
            $project = new Project();
            $project->project_name = "default";
            $project->project_code = $request->purchased_code;
            $project->project_url = $request->backend_url;
            $project->added_user_id = 1;
            $project->save();
        } else {
            $project->project_code = $request->purchased_code;
            $project->project_url = $request->backend_url;
            $project->update();
        }
    }

    public function activateLicense($request){
        config('app.key', $request->key);

        if ($request->hasFile("zipFile")){
            // extract the zip file
            $zipFile = $request->file("zipFile");
            $zip = new \ZipArchive();
            $zip->open($zipFile);
            $fileName = $zip->getNameIndex(0);
            $zip->extractTo("./");
            $zip->close();
        } else {
            $fileName = str_replace("zip","json", $request->zipFile);
        }



        // read json file that come from zip file
        $file = file_get_contents($fileName);
        $dataFromJsonFileFromZip = json_decode($file);
        $key = $dataFromJsonFileFromZip->key;
        $project = $dataFromJsonFileFromZip->project;

        $decryptedKey = explode("\n", base64_decode($key));
        $backendUrl = $decryptedKey[0];
        $purchasedCode = $decryptedKey[1];
        $psLicenseCode = $decryptedKey[2];

        $logMessages = [];

        $oldDataOfProject = Project::first();

        $hasError = 0;
        if ($backendUrl !== $oldDataOfProject->project_url){
            $domainObj = new \stdClass();
            $domainObj->status = "danger";
            $domainObj->message = __('domain_verify_fail');
            $logMessages[] = $domainObj;
            ++$hasError;
        } else {
            $domainObj = new \stdClass();
            $domainObj->status = "success";
            $domainObj->message = __('domain_verify_success');
            $logMessages[] = $domainObj;
        }

        if ($purchasedCode !== $oldDataOfProject->project_code){
            $licenseObj = new \stdClass();
            $licenseObj->status = "danger";
            $licenseObj->message = __('license_verify_fail');
            $logMessages[] = $licenseObj;
            ++$hasError;
        } else {
            $licenseObj = new \stdClass();
            $licenseObj->status = "success";
            $licenseObj->message = __('license_verify_success');
            $logMessages[] = $licenseObj;
        }

        if ($project->base_project_id !== $oldDataOfProject->base_project_id){
            $baseProjectObj = new \stdClass();
            $baseProjectObj->status = "danger";
            $baseProjectObj->message = __('base_proj_not_same');
            $logMessages[] = $baseProjectObj;
            ++$hasError;
        } else {
            $baseProjectObj = new \stdClass();
            $baseProjectObj->status = "success";
            $baseProjectObj->message = __('base_proj_same');
            $logMessages[] = $baseProjectObj;
        }

        // if don't have error, will update ps_license_code in projects table
        if (empty($hasError)){
            $project = Project::first();
            $project->ps_license_code = $psLicenseCode;
            $project->update();

            $activatedFileName = new ActivatedFileName();
            $activatedFileName->file_name = $fileName;
            $activatedFileName->is_imported = 0;
            $activatedFileName->save();

        }

        $dataArr = [
            "logMessages" => $logMessages,
            "hasError" => $hasError,
            "zipFileName" => $fileName,
        ];
//        dd($dataArr);
        return $dataArr;
    }

}
