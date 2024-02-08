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
        Schema::create('CRM_STATUS', function (Blueprint $table) {
            $table->integer('STAT_ID', true);
            $table->string('STAT_SNO', 25);
            $table->string('STAT_NAME', 100);
            $table->string('STAT_ALIAS')->nullable();
            $table->integer('COMP_ID')->index('FK_CRM_STATUS_COMP_ID');
            $table->integer('STAT_STATUS');
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
        Schema::dropIfExists('CRM_STATUS');
    }
};
