<?php

namespace Modules\ComplaintItem\Policies;

use App\Policies\PsPolicy;
use Illuminate\Auth\Access\HandlesAuthorization;
use Modules\ComplaintItem\Entities\ComplaintItem;
use Modules\Core\Constants\Constants;

class ComplaintItemPolicy extends PsPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        $module = Constants::complaintItemReportModule;
        $model = ComplaintItem::class;
        parent::__construct($module, $model);
    }
}
