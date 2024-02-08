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
        Schema::create('CRM_DEPARTMENTS', function (Blueprint $table) {
            $table->integer('DEPT_ID', true);
            $table->string('DEPT_SNO', 25);
            $table->string('DEPT_NAME', 100);
            $table->string('SLUG', 191);
            $table->integer('COMP_ID')->index('FK_CRM_DEPARTMENTS_COMP_ID');
            $table->integer('DEPT_STATUS');
            $table->dateTime('CREATE_DATE');
            $table->integer('CREATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->integer('UPDATE_BY');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_DEPARTMENTS');
    }
};
