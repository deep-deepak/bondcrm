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
        Schema::create('CRM_DELETE_EXCEL_ESTIMATE_LOG', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('EXCEL_ESTIMATE_ID');
            $table->integer('COMP_ID');
            $table->string('FIRST_NAME', 150)->nullable();
            $table->string('LAST_NAME', 150)->nullable();
            $table->float('RATE', 10, 0)->nullable();
            $table->date('START_DATE')->nullable();
            $table->time('START_IN')->nullable();
            $table->date('END_DATE')->nullable();
            $table->time('END_OUT')->nullable();
            $table->mediumText('TOTAL_HOURS')->nullable();
            $table->integer('ESTIMATE_ID')->nullable();
            $table->integer('ESTIMATE_SNO')->nullable();
            $table->dateTime('CREATED_AT')->nullable();
            $table->dateTime('LAST_UPDATED')->nullable();
            $table->dateTime('DELETED_ON');
            $table->integer('DELETED_BY');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_DELETE_EXCEL_ESTIMATE_LOG');
    }
};
