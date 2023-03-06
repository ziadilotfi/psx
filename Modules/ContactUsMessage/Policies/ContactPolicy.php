<?php

namespace Modules\ContactUsMessage\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use App\Policies\PsPolicy;
use Modules\Core\Constants\Constants;
use Modules\ContactUsMessage\Entities\Contact;

class ContactPolicy extends PsPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        $module = Constants::contactModule;
        $model = Contact::class;
        parent::__construct($module, $model);
    }
}
