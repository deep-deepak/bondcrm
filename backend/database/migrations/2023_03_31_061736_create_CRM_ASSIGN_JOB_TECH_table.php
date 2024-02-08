<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('CRM_ASSIGN_JOB_TECH', function (Blueprint $table) {
            $table->integer('JOB_TECH_ID', true);
            $table->integer('A_JOB_ID');
            $table->string('JOB_TECHNICIANS', 100);
            $table->date('JOB_DATE');
            $table->date('JOB_END_DATE')->nullable();
            $table->time('START_TIME');
            $table->time('END_TIME');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_ASSIGN_JOB_TECH');
    }
};
