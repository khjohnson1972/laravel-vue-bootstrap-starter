@extends('layouts.admin')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        {{ $contact->name }}
        <form method="post" action="{{ route('admin.contact.update', $contact->id) }}">
            <!--hidden-->
            <input name="_token" type="hidden" value="{{ csrf_token() }}" />
            <input name="_method" type="hidden" value="put" />
            <input name="name" type="text" class="form-control {{ $errors->hasAny(['name']) ? 'is-invalid' : '' }}" id="name" placeholder="Name" value="{{ old('name', $contact->name) }}" />
            <div class="invalid-feedback">{{ $errors->first('name') }}</div>

            <input type="submit"/>
        </form>
    </div>
</div>
@endsection
