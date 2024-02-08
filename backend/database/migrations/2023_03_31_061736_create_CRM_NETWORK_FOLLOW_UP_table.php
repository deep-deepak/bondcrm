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
        Schema::create('CRM_NETWORK_FOLLOW_UP', function (Blueprint $table) {
            $table->integer('NETW_FOLL_ID', true);
            $table->integer('NETWORK_ID')->index('FK_NETWORK_FOLLOW_UP_NETWORK_ID');
            $table->integer('USER_ID')->index('FK_NETWORK_FOLLOW_UP_USER_ID');
            $table->string('PRIORITY', 100);
            $table->date('DUE_DATE');
            $table->time('TIME');
            $table->text('NOTE');
            $table->integer('COMP_ID')->index('FK_NETWORK_FOLLOW_UP_COMP_ID');
            $table->integer('NETWORK_FOLL_STATUS');
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
        Schema::dropIfExists('CRM_NETWORK_FOLLOW_UP');
    }
};
