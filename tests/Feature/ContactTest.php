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
        $contact = factory('App\Contact')->make()->toArray();
        $response = $this->json('POST', route('api.contacts.store'), $contact);

        $this->assertDatabaseHas('contacts', $contact);

        $response->assertStatus(200)
        ->assertJsonStructure(array_keys($contact));
    }
}
