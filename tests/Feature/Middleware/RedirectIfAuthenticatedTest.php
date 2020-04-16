<?php

namespace Tests\Feature\Middleware;

use App\User;
use Illuminate\Http\Request;
use App\Http\Middleware\RedirectIfAuthenticated;
use Tests\TestCase;

class RedirectIfAuthenticatedTest extends TestCase
{
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
        $user = factory(User::class)->make();
        $this->actingAs($user);

        $middleware = new RedirectIfAuthenticated;
        $request = Request::create('/admin', 'GET');

        $response = $middleware->handle($request, function () {
        });

        $this->assertInstanceOf('Illuminate\Http\RedirectResponse', $response);
    }
}
