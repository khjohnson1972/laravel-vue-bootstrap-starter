<?php

namespace Tests\Feature\Middleware;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ShareFeedbackTest extends TestCase
{
    use RefreshDatabase;

    public function test_shares_feedback_with_no_feedback()
    {
        $this->get('/')
             ->assertViewHas('_state', [
                 'modal' => new \stdClass,
                 'alert' => new \stdClass,
             ]);
    }

    public function test_shares_feedback_with_modal()
    {
        $this->withSession(['modal' => 'foo'])
             ->get('/')
             ->assertViewHas('_state', [
                 'modal' => 'foo',
                 'alert' => new \stdClass,
             ]);
    }

    public function test_shares_feedback_with_alert()
    {
        $this->withSession(['alert' => 'bar'])
             ->get('/')
             ->assertViewHas('_state', [
                 'modal' => new \stdClass,
                 'alert' => 'bar',
             ]);
    }
}
