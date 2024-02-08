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
        Schema::create('CRM_EQUIPMENT', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->string('EQ_SNO', 25);
            $table->string('NAME', 125);
            $table->dateTime('CREATE_ON');
            $table->enum('STATUS', ['1', '0']);
            $table->integer('COMP_ID');
            $table->integer('CREATE_BY');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_EQUIPMENT');
    }
};
