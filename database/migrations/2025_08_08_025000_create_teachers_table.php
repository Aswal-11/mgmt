<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->integer('gender');
            $table->string('phone_no');
            $table->string('state');
            $table->string('city');
            $table->string('address');
            $table->date('dob');
            $table->string('aadhar_number');
            $table->string('graduation_degree_name');
            $table->date('graduation_year');
            $table->string('post_graduation_degree_name')->nullable();
            $table->date('post_graduation_year')->nullable();
            $table->string('highest_qualification')->nullable();
            $table->string('certificates')->nullable();
            $table->date('date_of_joining');
            $table->date('date_of_leaving')->nullable();
            $table->integer('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};
