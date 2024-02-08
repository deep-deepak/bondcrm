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
        Schema::create('CRM_LEAD_SOURCE', function (Blueprint $table) {
            $table->integer('LD_SRC_ID', true);
            $table->string('LD_SRC_SNO', 25);
            $table->string('LD_SRC_NAME', 100);
            $table->integer('COMP_ID');
            $table->integer('STATUS');
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
        Schema::dropIfExists('CRM_LEAD_SOURCE');
    }
};
