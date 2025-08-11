<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectsController extends Controller
{
    
    /**
     * Creating the subjects
     */
    public function create(){
        return Inertia::render('subject/Create');
    }
}
