<?php

namespace Tests\Feature\Middleware;

use App\User;
use Illuminate\Http\Request;
use App\Http\Middleware\Authenticate;
use Tests\TestCase;
use Illuminate\Contracts\Auth\Factory as Auth;
use Symfony\Component\HttpFoundation\HeaderBag;

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
