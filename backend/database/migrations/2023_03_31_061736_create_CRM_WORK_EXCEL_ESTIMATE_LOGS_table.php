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
        Schema::create('CRM_WORK_EXCEL_ESTIMATE_LOGS', function (Blueprint $table) {
            $table->integer('EXCEL_LOGS_ID', true);
            $table->integer('USER_ID')->nullable();
            $table->string('USER_NAME', 300)->nullable();
            $table->integer('COMP_ID')->nullable();
            $table->integer('BRANCH_ID')->nullable();
            $table->date('START_DATE')->nullable();
            $table->date('END_DATE')->nullable();
            $table->string('EXCEL_NAME', 300)->nullable();
            $table->string('FILE_PATH')->nullable();
            $table->dateTime('CREATED_AT')->nullable();
            $table->dateTime('UPDATED_AT')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_WORK_EXCEL_ESTIMATE_LOGS');
    }
};
