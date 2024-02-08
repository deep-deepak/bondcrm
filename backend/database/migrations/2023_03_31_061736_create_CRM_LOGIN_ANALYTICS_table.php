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
        Schema::create('CRM_LOGIN_ANALYTICS', function (Blueprint $table) {
            $table->bigInteger('ID', true);
            $table->integer('USER_ID');
            $table->integer('COMP_ID');
            $table->date('DATE');
            $table->dateTime('LOGIN_TIME')->nullable();
            $table->string('MODULE_NAME')->nullable();
            $table->time('START_TIME')->nullable();
            $table->time('END_TIME')->nullable();
            $table->time('TIME_INTERVAL')->nullable();
            $table->string('MODULE_URL')->nullable();
            $table->dateTime('LOGOUT_TIME')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_LOGIN_ANALYTICS');
    }
};
