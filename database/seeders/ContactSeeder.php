<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Factories\ContactFactory;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        (new ContactFactory)->count(20)->create();
    }
}
