<?php

namespace App\Http\Controllers;

//Inertia
use Inertia\Inertia;

//Model
use App\Models\Subject;

//Request
use App\Http\Requests\SubjectRequest;


class SubjectsController extends Controller
{
    
    /**
     * It will routes to subject create page
     */
    public function create(){
        return Inertia::render('subject/create');
    }

    /**
     *Store subject in the datbase
     */
    public function store(SubjectRequest $subject){
        $input = $subject->validated();

        if($input)
        {
            Subject::create($input);
        }
    }
}
