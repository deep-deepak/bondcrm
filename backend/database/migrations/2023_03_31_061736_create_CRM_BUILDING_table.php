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
        Schema::create('CRM_BUILDING', function (Blueprint $table) {
            $table->integer('BUILD_ID', true);
            $table->string('BUILD_SNO', 25);
            $table->string('BUILD_NAME', 100);
            $table->integer('COMP_ID')->index('FK_CRM_BUILDING_COMP_ID');
            $table->integer('BUILD_STATUS');
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
        Schema::dropIfExists('CRM_BUILDING');
    }
};
