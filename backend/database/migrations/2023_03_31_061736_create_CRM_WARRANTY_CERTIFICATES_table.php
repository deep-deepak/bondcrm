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
        Schema::create('CRM_WARRANTY_CERTIFICATES', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('COMP_ID');
            $table->integer('ESTIMATE_SNO');
            $table->integer('SERVICE_ID');
            $table->integer('CUST_ID');
            $table->longText('ADDRESS');
            $table->string('CERTIFICATE_TYPE');
            $table->integer('WARRANTY_YEAR')->nullable();
            $table->longText('DESCRIPTION');
            $table->string('FILE_PATH');
            $table->integer('ACTIVE_STATUS')->default(1);
            $table->integer('CREATED_BY');
            $table->integer('UPDATED_BY');
            $table->dateTime('CREATED_ON');
            $table->dateTime('UPDATED_ON');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_WARRANTY_CERTIFICATES');
    }
};
