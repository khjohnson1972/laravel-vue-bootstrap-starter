<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class ContactTest extends TestCase
{
    use DatabaseMigrations, RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testStoreSaved()
    {
        $payload = [
            'email' => 'testlogin@user.com',
            'name' => 'Blah',
            'company' => 'company',
            'phone' => '9999999999',
            'message' => 'message'
        ];
        $response = $this->json('POST', route('contacts.store'), $payload);

        $this->assertDatabaseHas('contacts', $payload);

        $response->assertStatus(200)
        ->assertJsonStructure([
            'name',
            'company',
            'email',
            'phone',
            'message',
            'updated_at',
            'created_at',
            'id',
        ]);
    }
}
