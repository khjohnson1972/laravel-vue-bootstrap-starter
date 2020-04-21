<?php

namespace App\Http\Middleware;

use Closure;

class ShareFeedback
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure                  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //share
        view()->share('_state', [
            'modal' => $request->session()->get('modal') ?? new \stdClass,
            'alert' => $request->session()->get('alert') ?? new \stdClass,
        ]);

        //next
        return $next($request);
    }
}
