@extends('layouts.admin')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        {{ $contact->name }}
        <form method="post" action="{{ route('admin.contact.update', $contact->id) }}">
            <!--hidden-->
            <input name="_token" type="hidden" value="{{ csrf_token() }}" />
            <input name="_method" type="hidden" value="put" />
            <input type="text" name="name" value="{{ $contact->name }}"/>
            <input type="submit"/>
        </form>
    </div>
</div>
@endsection
