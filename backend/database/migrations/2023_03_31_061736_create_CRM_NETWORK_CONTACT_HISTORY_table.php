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
        Schema::create('CRM_NETWORK_CONTACT_HISTORY', function (Blueprint $table) {
            $table->integer('NETW_CONT_ID', true);
            $table->integer('NETWORK_ID');
            $table->text('NOTE');
            $table->string('COMM_MODE', 100);
            $table->date('CONTACT_DATE');
            $table->time('CONTACT_TIME');
            $table->integer('COMP_ID')->index('FK_NETWORK_CONTACT_HISTORY_COMP_ID');
            $table->integer('NETWORK_CONT_STATUS');
            $table->dateTime('CREATE_DATE');
            $table->integer('CREATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->integer('UPDATE_BY');
            $table->string('CONTACT_SNO', 25);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_NETWORK_CONTACT_HISTORY');
    }
};
