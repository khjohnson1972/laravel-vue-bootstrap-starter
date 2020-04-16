<?php

namespace Tests\Feature\Middleware;

use Tests\TestCase;

class AuthenticateTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get(route('admin.dashboard'));
        $response->assertLocation(route('login'));
    }
}
