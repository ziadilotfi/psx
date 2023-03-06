<?php

namespace Modules\Blog\Policies;

use App\Policies\PsPolicy;
use Modules\Core\Constants\Constants;
use Modules\Blog\Entities\Blog;

class BlogPolicy extends PsPolicy
{
    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        $module = Constants::blogModule;
        $model = Blog::class;
        parent::__construct($module, $model);
    }
}
