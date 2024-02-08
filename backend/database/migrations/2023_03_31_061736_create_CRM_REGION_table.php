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
        Schema::create('CRM_REGION', function (Blueprint $table) {
            $table->integer('REG_ID', true);
            $table->string('REG_SNO', 25);
            $table->string('REG_NAME', 100);
            $table->integer('COMP_ID')->index('FK_CRM_REGION_COMP_ID');
            $table->integer('REG_STATUS');
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
        Schema::dropIfExists('CRM_REGION');
    }
};
