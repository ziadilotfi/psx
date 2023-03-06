<?php

namespace App\Http\Middleware;

use App\Http\Services\PsService;
use Inertia\Middleware;
use Illuminate\Http\Request;
use Modules\Core\Entities\ActivatedFileName;
use Modules\Core\Entities\SystemCode;
use Modules\Core\Entities\Language;
use Illuminate\Support\Facades\Auth;
use Modules\Core\Entities\CoreImage;
use Modules\Core\Entities\CoreMenuGroup;
use Modules\Core\Entities\LanguageString;
use Modules\Core\Entities\BackendSetting;
use Illuminate\Support\Facades\Route;
use Modules\Core\Entities\CoreSubMenuGroup;

use Modules\Core\Entities\Project;
use Modules\Core\Constants\Constants;
use App\Config\ps_constant;


class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        $route = Route::current();
        $name = $route->getName();
        $psService = new PsService();
        $folder_path_uploads= 'storage/' .Constants::folderPath. '/uploads';
        $folder_path_thumbnail1x= 'storage/' .Constants::folderPath. '/thumbnail';
        $folder_path_thumbnail2x= 'storage/' .Constants::folderPath. '/thumbnail2x';
        $folder_path_thumbnail3x='storage/' .Constants::folderPath. '/thumbnail3x';

        return array_merge(parent::share($request), [
            'dateFormat' => BackendSetting::first()->date_format,
            'systemCode2' => $psService->getSystemCode(),
            'activatedFileName' => ActivatedFileName::first(),
            'hasError' => session('hasError'),
            'purchaseCodeOrUrlNotSame' => session('purchaseCodeOrUrlNotSame'),
            'zipFileName' => session('zipFileName') ? session('zipFileName') : session('zipFileName2'),
            'selectedZipFileName' => session('selectedZipFileName'),
            'logMessages' => session('logMessages'),
            'project' => Project::first(),
            'purchased_code' => session('purchased_code') ? session('purchased_code') : '',
            'currentRoute' => $name,
            'defaultProfileImg' => asset('/images/assets/default_profile.png'),
            'authUser' => Auth::user(),
            'status' => session('status') ? session('status') : '',
            'product_relation_errors' => session('product_relation_errors') ? session('product_relation_errors') : '',
            'user_relation_errors' => session('user_relation_errors') ? session('user_relation_errors') : '',
            'city_relation_errors' => session('city_relation_errors') ? session('city_relation_errors') : '',
            'menuGroups' => CoreMenuGroup::where('is_show_on_menu',1)->with('sub_menu_group')->has('sub_menu_group.module')->orderBy('ordering', 'asc')->get(),
            'subMenuGroups' => CoreSubMenuGroup::with('module')->whereNull('core_menu_group_id')->orderBy('ordering', 'asc')->get(),
            'languages' => Language::get(),
            'importSuccessMsg' => session('importSuccessMsg'),
            'diffIds' => session('diffIds'),
            'importedFileName' => session('importedFileName'),
            'recentImportedFileName' => session('recentImportedFileName'),
            'baseProjectNotSameMsg' => session('baseProjectNotSameMsg'),
            'baseProjectSameMsg' => session('baseProjectSameMsg'),
            'backendLogo' => CoreImage::where('img_type', 'backend-logo')->first(),
            'favIcon' => CoreImage::where('img_type', 'fav-icon')->first(),
            'uploadUrl' => asset($folder_path_uploads),
            'thumb1xUrl' => asset($folder_path_thumbnail1x),
            'thumb2xUrl' => asset($folder_path_thumbnail2x),
            'thumb3xUrl' => asset($folder_path_thumbnail3x),
            'sysImageUrl' => asset('images/assets'),
            'csrf' => csrf_token(),
            'can' => [
                'createItem' => Auth::check() ? auth()->user()->can('create-item') : '',
                'createProduct' => Auth::check() ? auth()->user()->can('create-product') : '',
               'createSubcategory' => Auth::check() ? auth()->user()->can('create-subCategory') : '',
                'createCategory' => Auth::check() ? auth()->user()->can('create-category') : '',
                'createUser' => Auth::check() ? auth()->user()->can('create-user') : '',
                'createRole' => Auth::check() ? auth()->user()->can('create-role') : '',
                'createPayment' => Auth::check() ? auth()->user()->can('create-payment') : '',

                'createAvailableCurrency' => Auth::check() ? auth()->user()->can('create-availableCurrency') : '',
                'createLanguage' => Auth::check() ? auth()->user()->can('create-language') : '',
                'createLanguageString' => Auth::check() ? auth()->user()->can('create-languageString') : '',
                'createBlog' => Auth::check() ? auth()->user()->can('create-blog') : '',
                'createPhoneCountryCode' => Auth::check() ? auth()->user()->can('create-phoneCountryCode') : '',
                'createMobileSetting' => Auth::check() ? auth()->user()->can('create-mobileSetting') : '',
                'createApiToken' => Auth::check() ? auth()->user()->can('create-apiToken') : '',
                'createCurrency' => Auth::check() ? auth()->user()->can('create-currency') : '',
                'createCoreMenu' => Auth::check() ? auth()->user()->can('create-coreMenuGroup') : '',
                'createSystemConfig' => Auth::check() ? auth()->user()->can('create-systemConfig') : '',
                'createCoreSubMenu' => Auth::check() ? auth()->user()->can('create-coreSubMenuGroup') : '',
                'createCoreModule' => Auth::check() ? auth()->user()->can('create-coreModule') : '',
                'createLocationTownship' => Auth::check() ? auth()->user()->can('create-locationTownship') : '',
                'createLocationCity' => Auth::check() ? auth()->user()->can('create-locationCity') : '',
                'createContactUsMessage' => Auth::check() ? auth()->user()->can('create-contactUsMessage') : '',
                'createPushNotificationMessage' => Auth::check() ? auth()->user()->can('create-pushNotificationMessage') : '',
                'createMobileLanguage' => Auth::check() ? auth()->user()->can('create-mobileLanguage') : '',
                'createMobileLanguageString' => Auth::check() ? auth()->user()->can('create-mobileLanguageString') : '',
                'createPackageReport' => permissionControl(Constants::packageReportModule, ps_constant::createPermission) ? true : false,

                'createModule' => Auth::check() ? auth()->user()->can('create-module') : '',
                'updateBackendSetting' => permissionControl(Constants::backendSettingModule, ps_constant::updatePermission) ? true : false,


                'deleteDataReset' => permissionControl(\Modules\DemoDataDeletion\Constants\Constants::dataReset, ps_constant::deletePermission) ? true : false,
                'updateContact' => permissionControl(Constants::contactModule, ps_constant::updatePermission) ? true : false,
                'deleteContact' => permissionControl(Constants::contactModule, ps_constant::deletePermission) ? true : false,
                'updateGenerateDeepLink' => permissionControl(Constants::DeepLinkGenerateModule, ps_constant::updatePermission) ? true : false,
                'updatePaymentSetting' => permissionControl(Constants::paymentSettingModule, ps_constant::updatePermission) ? true : false,
                'createTable' => Auth::check() ? auth()->user()->can('create-table') : '',
                'createCustomizeUiDetail' => Auth::check() ? auth()->user()->can('create-customizeUiDetail') : '',
                'createPrivacyModule' => Auth::check() ? auth()->user()->can('create-privacyModule') : '',
                'createDataDeletionModule' => Auth::check() ? auth()->user()->can('create-dataDeletionModule') : '',

            ],
        ]);
        // dd($test);


    }
}
