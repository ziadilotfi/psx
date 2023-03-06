<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class UserMobileToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if(!$request->user()->tokenCan('userMobileToken')){
            return response()->json([
                'status' => 'error',
                'message' => "Your Api Token don't have permission."
            ],403);
        }
        return $next($request);
    }
}
