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
        Schema::create('CRM_KPI', function (Blueprint $table) {
            $table->integer('KPI_ID', true);
            $table->string('KPI_SNO', 25);
            $table->integer('BRANCH_ID');
            $table->integer('DEPT_ID');
            $table->integer('USER_ID');
            $table->string('KPI_TARGET', 100);
            $table->string('KPI_INDICATOR', 50);
            $table->text('KPI_MONTH');
            $table->string('KPI_ANNUAL', 25);
            $table->date('START_DATE');
            $table->date('END_DATE');
            $table->integer('COMP_ID');
            $table->integer('KPI_STATUS');
            $table->dateTime('CREATE_DATE');
            $table->dateTime('CREATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->dateTime('UPDATE_BY');
            $table->string('KPI_DESC', 500);
            $table->text('KPI_QUARTERLY');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_KPI');
    }
};
