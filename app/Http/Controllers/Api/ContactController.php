<?php

namespace App\Http\Controllers\Api;

use App\Contact;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    /**
     * [store description]
     * @param  Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): string
    {
        $validatedData = $request->validate([
            'name'  => ['required', 'max:255'],
            'email' => ['required', 'email'],
        ]);

        $contact = new Contact;
        $contact->name = $request->get('name');
        $contact->email = $request->get('email');
        $contact->save();

        return $contact->toJson();
    }
}
