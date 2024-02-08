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
        Schema::create('CRM_OTHERS', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->text('NAME');
            $table->integer('VALUE');
            $table->integer('CREATE_BY');
            $table->integer('UPDATED_BY')->nullable();
            $table->dateTime('CREATED_ON');
            $table->dateTime('UPDATED_ON');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_OTHERS');
    }
};
