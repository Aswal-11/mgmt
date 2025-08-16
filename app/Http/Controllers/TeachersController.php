<?php

namespace App\Http\Controllers;

// Models
use App\Models\Teacher;

// Requests
use App\Http\Requests\TeacherRequest;

// Inertia
use Inertia\Inertia;

class TeachersController extends Controller
{
    /*
     *View teachers data
     */
    public function index()
    {
        $teachers = Teacher::select('name', 'email', 'subject')->get();

        return Inertia::render('teacher/index', compact('teachers'));
    }

    /* 
     *View teacher create form
     */
    public function create()
    {
        return Inertia::render('teacher/create');
    }

    /* 
     *Store teacher
     */
    public function store(TeacherRequest $teacher)
    {
        Teacher::create($teacher);

        return Inertia::render('teacher/index')
            ->with('success', 'Employee created successfully!');
    }
}
