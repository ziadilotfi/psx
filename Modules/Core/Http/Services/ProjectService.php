<?php

namespace Modules\Core\Http\Services;

use App\Http\Services\PsService;
use Modules\Core\Entities\Project;

class ProjectService extends PsService
{

    public function __construct()
    {

    }

    public function getProject($id = null){
        $project = Project::when($id, function ($q, $id){
            $q->where("id", $id);
        })->first();

        return $project;
    }

}
