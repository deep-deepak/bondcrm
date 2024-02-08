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
        Schema::create('CRM_POREASONS', function (Blueprint $table) {
            $table->integer('RES_ID', true);
            $table->integer('COMP_ID');
            $table->integer('CREATE_BY');
            $table->enum('RES_STATUS', ['0', '1'])->default('1');
            $table->longText('REASONS');
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
        Schema::dropIfExists('CRM_POREASONS');
    }
};
