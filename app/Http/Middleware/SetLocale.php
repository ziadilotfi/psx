<?php

namespace App\Http\Middleware;

use Closure;
use Modules\Core\Entities\Language;

class SetLocale
{
    public function handle($request, Closure $next)
    {
        $lang = Language::where('status',1)->first();
        app()->setLocale($lang? strtolower($lang->symbol) : 'en');

        return $next($request);
    }
}
