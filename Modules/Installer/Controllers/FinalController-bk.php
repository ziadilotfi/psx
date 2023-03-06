<?php

namespace Modules\Installer\Controllers;

use App\Config\ps_constant;
use Carbon\Carbon;
use Illuminate\Routing\Controller;
use Modules\Core\Entities\SystemCode;
use Modules\Installer\Events\LaravelInstallerFinished;
use Modules\Installer\Helpers\EnvironmentManager;
use Modules\Installer\Helpers\FinalInstallManager;
use Modules\Installer\Helpers\InstalledFileManager;

class FinalController extends Controller
{
    /**
     * Update installed file and display finished view.
     *
     * @param \Modules\Installer\Helpers\InstalledFileManager $fileManager
     * @param \Modules\Installer\Helpers\FinalInstallManager $finalInstall
     * @param \Modules\Installer\Helpers\EnvironmentManager $environment
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function finish(InstalledFileManager $fileManager, FinalInstallManager $finalInstall, EnvironmentManager $environment)
    {
        $finalMessages = $finalInstall->runFinal();
        $finalStatusMessage = $fileManager->update();
        $finalEnvFile = $environment->getEnvContent();

        try {
            $freeTrialDuration = new SystemCode();
            $freeTrialDuration->code = base64_encode(Carbon::now()."/n");
//            $freeTrialDuration->start_date = Carbon::now();
//            $freeTrialDuration->end_date = Carbon::now()->addDays(ps_constant::freeTrialTotalDay);
            $freeTrialDuration->save();
        } catch (\Throwable $e) {
//            return $e->getMessage();
        }

        event(new LaravelInstallerFinished);

        return view('vendor.installer.finished', compact('finalMessages', 'finalStatusMessage', 'finalEnvFile'));
    }
}
