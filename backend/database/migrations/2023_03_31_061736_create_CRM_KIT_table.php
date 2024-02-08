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
        Schema::create('CRM_KIT', function (Blueprint $table) {
            $table->integer('KIT_ID', true);
            $table->string('KIT_SNO', 25);
            $table->string('KIT_NAME', 100);
            $table->string('CHARGE_CODE_ID', 500);
            $table->integer('COMP_ID')->index('FK_KIT_COMP_ID');
            $table->integer('KIT_STATUS');
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
        Schema::dropIfExists('CRM_KIT');
    }
};
