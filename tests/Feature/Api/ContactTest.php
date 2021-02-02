<?php

namespace Tests\Feature\Api;

use Database\Factories\ContactFactory;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ContactTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testStoreSaved()
    {
        $contact = (new ContactFactory)->make()->toArray();

        $response = $this->json('POST', route('api.contacts.store'), $contact);

        $this->assertDatabaseHas('contacts', $contact);

        $response->assertStatus(200)->assertJsonStructure(array_keys($contact));
    }
}
