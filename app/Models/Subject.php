<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $fillable =[
        'subject_name',
        'subject_code'
    ];

    public function teachers(){
        return $this->belongsToMany(Teacher::class);
    }
}
