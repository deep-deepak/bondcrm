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
        Schema::create('CRM_WORK_EXCEL_ESTIMATE', function (Blueprint $table) {
            $table->integer('EXCEL_ESTIMATE_ID', true);
            $table->integer('COMP_ID');
            $table->string('FIRST_NAME', 300)->nullable();
            $table->string('LAST_NAME', 300)->nullable();
            $table->string('RATE', 20)->nullable();
            $table->date('START_DATE')->nullable();
            $table->string('START_IN', 50)->nullable();
            $table->date('END_DATE')->nullable();
            $table->string('END_OUT', 50)->nullable();
            $table->string('TOTAL_HOURS', 50)->nullable();
            $table->integer('ESTIMATE_ID')->nullable();
            $table->integer('ESTIMATE_SNO')->nullable();
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
        Schema::dropIfExists('CRM_WORK_EXCEL_ESTIMATE');
    }
};
