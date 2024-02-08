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
        Schema::create('CRM_ESTIMATE_STATUS_LOG', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->string('ESTIMATE_SNO');
            $table->integer('STAT_ID');
            $table->dateTime('CREATED_AT')->nullable();
            $table->integer('UPDATED_BY_USERID');
            $table->integer('COMP_ID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_ESTIMATE_STATUS_LOG');
    }
};
