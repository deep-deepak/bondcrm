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
        Schema::create('CRM_NOTEBOOK', function (Blueprint $table) {
            $table->integer('NOTE_ID', true);
            $table->string('NAME')->nullable();
            $table->tinyInteger('ACTION')->nullable();
            $table->text('DESCRIPTION')->nullable();
            $table->integer('REVIEW_BY')->nullable();
            $table->boolean('REVIEWED')->default(false);
            $table->boolean('STATUS')->default(true);
            $table->dateTime('CREATED_AT');
            $table->integer('CREATED_BY')->nullable();
            $table->dateTime('UPDATED_AT');
            $table->integer('UPDATED_BY');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_NOTEBOOK');
    }
};
