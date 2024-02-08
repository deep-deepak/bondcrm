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
        Schema::create('CRM_NETWORK_STAGE', function (Blueprint $table) {
            $table->integer('NETW_STAGE_ID', true);
            $table->integer('NETWORK_ID')->index('FK_NETWORK_STAGE_NETWORK_ID');
            $table->string('NETW_STAGE_SNO', 25);
            $table->integer('USER_ID')->index('FK_NETWORK_STAGE_USER_ID');
            $table->integer('STAGE_TYPE_ID')->index('FK_NETWORK_STAGE_TYPE_ID');
            $table->string('CLIENT_NAME', 250);
            $table->dateTime('UMBRELLA_MEETING');
            $table->integer('COMP_ID')->index('FK_NETWORK_STAGE_COMP_ID');
            $table->integer('NETWORK_STAGE_STATUS');
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
        Schema::dropIfExists('CRM_NETWORK_STAGE');
    }
};
