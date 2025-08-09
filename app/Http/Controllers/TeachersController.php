<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeacherRequest;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeachersController extends Controller
{
    public function create()
    {
       return Inertia::render('teacher/Teacher');

    }
    public function store(TeacherRequest $teacher)
    {
       

        Teacher::create($teacher);

        return redirect()->route('teachers.home')
            ->with('success', 'Employee created successfully!');
    }
}
