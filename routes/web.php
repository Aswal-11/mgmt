<?php

use App\Http\Controllers\TeachersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home',['name'=>'Mike']);
});
Route::post('/teachers_store', [TeachersController::class, 'store'])->name('teacher.store');