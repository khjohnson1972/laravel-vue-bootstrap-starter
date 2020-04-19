@extends('layouts.admin')

@section('content')
<div class="container">
    <div class="row">
        <div class="col text-right mb-2">
            <a href="{{ route('admin.contact.index') }}">&lt;&nbsp;Back</a><br/>
        </div>
    </div>
    <div class="row justify-content-center">

        <div class="col">
            <form id="edit-contact"method="post" action="{{ route('admin.contact.update', $contact->id) }}">
                <!--hidden-->
                <input name="_token" type="hidden" value="{{ csrf_token() }}" />
                <input name="_method" type="hidden" value="put" />

                <!--name-->
                <div class="form-group row">
                    <label for="name" class="col-12 col-sm-2 form-control-label">Name</label>
                    <div class="col-12 col-sm-10">
                        <input name="name" type="text" class="form-control {{ $errors->hasAny(['name']) ? 'is-invalid' : '' }}" id="name" placeholder="Name" value="{{ old('name', $contact->name) }}" />
                        <div class="invalid-feedback">{{ $errors->first('name') }}</div>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col text-right">
                        <button name="submit" type="submit" id="submit" form="edit-contact" class="btn btn-success">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
