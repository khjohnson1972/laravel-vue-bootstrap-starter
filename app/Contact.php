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

    public function getCreatedAtAttribute($created_at): string
    {
        //return $created_at;
        return Carbon::parse($created_at)->format('F jS, Y h:i:s A');
    }
}
