<?php

namespace Tests\Feature\Middleware;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ShareFeedbackTest extends TestCase
{
    use RefreshDatabase;

    public function testSharesFeedbackWithNoFeedback()
    {
        $this->get('/')
             ->assertViewHas('_state', [
                 'modal' => new \stdClass,
                 'alert' => new \stdClass,
             ]);
    }

    public function testSharesFeedbackWithModal()
    {
        $this->withSession(['modal' => 'foo'])
             ->get('/')
             ->assertViewHas('_state', [
                 'modal' => 'foo',
                 'alert' => new \stdClass,
             ]);
    }

    public function testSharesFeedbackWithAlert()
    {
        $this->withSession(['alert' => 'bar'])
             ->get('/')
             ->assertViewHas('_state', [
                 'modal' => new \stdClass,
                 'alert' => 'bar',
             ]);
    }
}
