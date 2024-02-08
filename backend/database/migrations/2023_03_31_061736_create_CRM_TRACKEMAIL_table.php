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
        Schema::create('CRM_TRACKEMAIL', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('trackid');
            $table->integer('ESTIMATE_SNO')->nullable();
            $table->string('ipAdress')->nullable();
            $table->string('date')->nullable();
            $table->string('device')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_TRACKEMAIL');
    }
};
