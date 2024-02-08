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
        Schema::create('CRM_TASK_TYPE', function (Blueprint $table) {
            $table->integer('TASK_TYPE_ID', true);
            $table->string('TASK_TYPE_SNO', 25);
            $table->string('TASK_TYPE_NAME', 100);
            $table->integer('COMP_ID')->index('FK_TASK_TYPE_COMP_ID');
            $table->integer('TASK_TYPE_STATUS');
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
        Schema::dropIfExists('CRM_TASK_TYPE');
    }
};
