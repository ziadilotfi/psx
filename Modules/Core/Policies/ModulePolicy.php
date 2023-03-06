<?php

namespace Modules\Core\Policies;

use App\Policies\PsPolicy;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\Category;
use Modules\Core\Entities\Module;

class ModulePolicy extends PsPolicy
{
    public function __construct()
    {
        $module = Constants::moduleModule;
        $model = Module::class;
        parent::__construct($module, $model);
    }
}
