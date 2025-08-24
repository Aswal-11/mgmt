<?php

namespace App\Http\Controllers;

// Models
use App\Models\Teacher;

// Requests
use App\Http\Requests\TeacherRequest;
use App\Models\Subject;
// Inertia
use Inertia\Inertia;

class TeachersController extends Controller
{
    /*
     *View teachers data
     */
    public function index()
    {
        $teachers = Teacher::all();

        return Inertia::render('teacher/index', compact('teachers'));
    }

    /* 
     *View teacher create form
     */
    public function create()
    {
        $subjects = Subject::all(); // fetch all subjects
        return Inertia::render('teacher/create', compact('subjects')); // Pass subjects
    }

    /* 
     *Store teacher
     */
    public function store(TeacherRequest $teacher)
    {
        $input = $teacher->validated();

        dd($input);
        Teacher::create($input);

        return Inertia::render('teacher/index')
            ->with('success', 'Employee created successfully!');
    }

    public function delete($id)
    {
        $teacher = Teacher::findOrFail($id); // find teacher or throw 404
        $teacher->delete(); // delete record

        return redirect()->back()->with('success', 'Teacher deleted successfully!');
    }
}
