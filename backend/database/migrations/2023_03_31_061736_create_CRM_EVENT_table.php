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
        Schema::create('CRM_EVENT', function (Blueprint $table) {
            $table->integer('EVENT_ID', true);
            $table->integer('TASK_ID');
            $table->string('EVENT_NAME', 250);
            $table->date('EVENT_DATE');
            $table->time('EVENT_TIME');
            $table->time('EVENT_END_TIME');
            $table->string('EVENT_TYPE', 100);
            $table->string('MEETING_WITH', 100);
            $table->string('EVENT_LOC', 500)->nullable();
            $table->string('GUESTS', 500)->nullable();
            $table->string('NOTE');
            $table->integer('COMP_ID');
            $table->integer('STATUS');
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
        Schema::dropIfExists('CRM_EVENT');
    }
};
