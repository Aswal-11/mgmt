<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
   protected $fillable = [
        'name',
        'email',
        'gender',
        'phone_no',
        'state',
        'city',
        'address',
        'dob',
        'aadhar_number',
        'subject_id',
        'graduation_degree_name',
        'graduation_year',
        'post_graduation_degree_name',
        'post_graduation_year',
        'highest_qualification',
        'certificates',
        'date_of_joining',
        'date_of_leaving',
        'status'
    ];

    public function subjects(){
        return $this->belongsToMany(Subject::class);
    }
}
