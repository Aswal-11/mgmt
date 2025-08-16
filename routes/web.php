<?php

//Inertia
use Inertia\Inertia;

//Route
use Illuminate\Support\Facades\Route;

// Controller
use App\Http\Controllers\SubjectsController;
use App\Http\Controllers\TeachersController;

/*------------------------------------------------------------------------------------------ */


Route::get('/', function () {
    return Inertia::render('dashboard');
})->name('dashboard.home');

/*------------------------------------------------------------------------------------------ */


/**
 * Subject related routes
 */
Route::get('/subject_create', [SubjectsController::class, 'create'])->name('subject.create');
Route::post('/subject_store', [SubjectsController::class, 'store'])->name('subject.store');

/*------------------------------------------------------------------------------------------ */

/**
 * Teacher realted routes
 */
Route::get('/teachers_index', [TeachersController::class, 'index'])->name('teacher.index');
Route::get('/teachers_create', [TeachersController::class, 'create'])->name('teacher.create');
Route::post('/teachers_store', [TeachersController::class, 'store'])->name('teacher.store');

/*------------------------------------------------------------------------------------------ */




