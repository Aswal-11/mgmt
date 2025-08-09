<?php

use App\Http\Controllers\TeachersController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home',['name'=>'Mike']);
})->name('teachers.home');

Route::get('/teachers_create', [TeachersController::class, 'create'])->name('teacher.create');
Route::post('/teachers_store', [TeachersController::class, 'store'])->name('teacher.store');