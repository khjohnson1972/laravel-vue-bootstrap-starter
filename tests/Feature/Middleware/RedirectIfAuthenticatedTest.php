<?php

namespace Tests\Feature\Middleware;

use Database\Factories\UserFactory;
use Illuminate\Http\Request;
use App\Http\Middleware\RedirectIfAuthenticated;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RedirectIfAuthenticatedTest extends TestCase
{
    use RefreshDatabase;

    public function testNonAdminsAreNotRedirected()
    {
        $request = Request::create('/admin/dashboard', 'GET');

        $middleware = new RedirectIfAuthenticated();
        // returns the closure response
        $response = $middleware->handle($request, function ($next) {
            return "reply";
        });
        $this->assertEquals("reply", $response);
    }

    public function testAdminsAreRedirected()
    {
        $user = (new UserFactory)->make();
        $this->actingAs($user);

        $middleware = new RedirectIfAuthenticated;
        $request = Request::create('/admin', 'GET');

        $response = $middleware->handle($request, function () {
        });

        $this->assertInstanceOf('Illuminate\Http\RedirectResponse', $response);
    }
}
