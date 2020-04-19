@extends('layouts.admin')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        {{ $contacts->links() }}
        <table class="table">
            <thead>
                <th scope="col">Name</th>
                <th scope="col">Company</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Date</th>
                <th scope="col">Actions</th>
            </thead>
            <tbody>
                @forelse ($contacts as $contact)
                <tr>
                    <td>{{ $contact->name }}</td>
                    <td>{{ $contact->company }}</td>
                    <td><a href="mailto:{{ $contact->email }}">{{ $contact->email }}</a></td>
                    <td>{{ $contact->phone }}</td>
                    <td>{{ $contact->created_at }}</td>
                    <td><a href="{{ route('admin.contact.edit', $contact->id) }}">Edit</a></td>

                </tr>
                @empty
                <tr>
                    <td>
                        <p>No users</p>
                    </td>
                </tr>
                @endforelse
            </tbody>
        </table>
        {{ $contacts->links() }}
    </div>
</div>
@endsection
