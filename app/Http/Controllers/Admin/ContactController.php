<?php

namespace App\Http\Controllers\Admin;

use App\Contact;
use Illuminate\View\View;
use App\Http\Requests\UpdateContact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class ContactController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:contacts.viewAny', ['only' => ['index']]);
        $this->middleware('can:contacts.view,contact', ['only' => ['show']]);
        $this->middleware('can:contacts.create', ['only' => ['create', 'store']]);
        $this->middleware('can:contacts.update,contact', ['only' => ['edit', 'update']]);
        $this->middleware('can:contacts.delete,contact', ['only' => ['destroy']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): View
    {
        $contacts = DB::table('contacts')->orderBy('id', 'desc')->paginate(15);
        return view('admin.contacts.index', compact('contacts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Http\Requests\EditContact  $request
     * @param  \App\Contact                   $contact
     * @return \Illuminate\Http\RedirectResponse
     */
    public function edit(Contact $contact)
    {
        return view('admin.contacts.edit', compact('contact'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateContact $request, Contact $contact)
    {
        $contact->name = $request->input('name');
        $contact->save();

        // alert
        $this->alert($request, 'Success', 'You have successfully updated the dealer <b>' . $contact->name . '</b>.');

        //send back
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        //
    }
}
