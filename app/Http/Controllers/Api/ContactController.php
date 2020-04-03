<?php

namespace App\Http\Controllers\Api;

use App\Contact;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $contact = new Contact();
        $contact->name = $request->get('name');
        $contact->email = $request->get('email');
        $contact->save();
        //dd($contact->toJson());

        return $contact->toJson();
    }
}
