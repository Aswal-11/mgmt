<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use Illuminate\Http\Request;

class TeachersController extends Controller
{
    public function store(Request $request)
    {
       

        Teacher::create($request->all());

        return redirect()->route('pages.home')
            ->with('success', 'Employee created successfully!');
    }
}
