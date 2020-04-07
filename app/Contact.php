<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'company', 'email', 'phone', 'message',
    ];

    public function getCreatedAtAttribute(string $createdAt): string
    {
        return Carbon::parse($createdAt)->format('F jS, Y h:i:s A');
    }
}
