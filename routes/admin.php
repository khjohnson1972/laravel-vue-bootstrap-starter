<?php

Route::resource('contact', 'ContactController');

Route::get('dashboard', 'DashboardController@index')->name('dashboard');
