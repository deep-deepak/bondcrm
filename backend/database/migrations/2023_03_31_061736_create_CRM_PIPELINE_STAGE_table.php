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
        Schema::create('CRM_PIPELINE_STAGE', function (Blueprint $table) {
            $table->integer('PIP_ID', true);
            $table->string('PIP_SNO', 25);
            $table->string('PIP_NAME', 100);
            $table->integer('COMP_ID')->index('FK_PIPELINE_STAGE_COMP_ID');
            $table->integer('PIP_STATUS');
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
        Schema::dropIfExists('CRM_PIPELINE_STAGE');
    }
};
