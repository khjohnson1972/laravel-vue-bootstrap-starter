@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-12">
        @forelse ($contacts as $contact)
            <div>{{ $contact->name }} - {{ $contact->created_at }}</div>
        @empty
            <p>No users</p>
        @endforelse
        </div>
    </div>
</div>
@endsection
