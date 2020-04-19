<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @param  \Illuminate\Http\Request  $request
     * @param  string                    $title
     * @param  string                    $message
     * @param  string                    $context
     */
    public function alert(Request $request, $title, $message = '', $context = 'success')
    {
        $request->session()->flash('alert', [
            'title'   => $title,
            'message' => $message,
            'context' => $context,
        ]);
    }
}
