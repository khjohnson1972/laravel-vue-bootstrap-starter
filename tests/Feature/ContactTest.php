<?php

namespace Tests\Feature\Feature;

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
        $payload = ['email' => 'testlogin@user.com', 'name' => 'Blah'];
        $response = $this->json('POST', '/api/contacts', $payload);

        $this->assertDatabaseHas('contacts', $payload);

        $response->assertStatus(200)
        ->assertJsonStructure([
            'name',
            'email',
            'updated_at',
            'created_at',
            'id',
        ]);
    }
}
