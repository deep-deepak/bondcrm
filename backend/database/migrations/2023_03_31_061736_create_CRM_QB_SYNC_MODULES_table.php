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
        Schema::create('CRM_QB_SYNC_MODULES', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->string('NAME', 100);
            $table->integer('COMP_ID');
            $table->integer('CREATED_BY');
            $table->integer('UPDATED_BY');
            $table->integer('ACTIVE_STATUS')->default(1);
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
        Schema::dropIfExists('CRM_QB_SYNC_MODULES');
    }
};
