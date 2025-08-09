<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TeacherRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Yaha tum apni auth logic laga sakte ho agar chaho
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:teachers,email',
            'gender' => 'required|in:0,1,2',
            'phone_no' => 'required|digits:10',
            'state' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'address' => 'required|string',
            'dob' => 'required|date',
            'aadhar_number' => 'required|digits:12|unique:teachers,aadhar_number',
            'subject' => 'required|string|max:255',
            'graduation_degree_name' => 'required|string|max:255',
            'graduation_year' => 'required|date',
            'post_graduation_degree_name' => 'nullable|string|max:255',
            'post_graduation_year' => 'nullable|date',
            'highest_qualification' => 'nullable|string|max:255',
            'certificates' => 'nullable|string',
            'date_of_joining' => 'required|date',
            'date_of_leaving' => 'nullable|date|after_or_equal:date_of_joining',
            'status' => 'required|in:0,1,2'
        ];
    }
}
