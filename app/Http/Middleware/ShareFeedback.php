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
            'modal' => $request->session()->get('modal') ?? null,
            'alert' => $request->session()->get('alert') ?? null,
        ]);

        //next
        return $next($request);
    }
}
