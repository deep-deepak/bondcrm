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
        Schema::create('CRM_SERVICE', function (Blueprint $table) {
            $table->integer('SERV_ID', true);
            $table->string('SERV_SNO', 25);
            $table->string('SERV_NAME', 100);
            $table->string('SERVICE_ALIAS')->nullable();
            $table->integer('COMP_ID')->index('FK_CRM_SERVICE_COMP_ID');
            $table->integer('SERV_STATUS');
            $table->dateTime('CREATE_DATE');
            $table->integer('CREATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->integer('UPDATE_BY');
            $table->integer('QB_SERV_ID')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_SERVICE');
    }
};
