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
        Schema::create('CRM_WARRANTY_CERTIFICATES_TYPE', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->string('CERTIFICATE_SNO', 100);
            $table->integer('COMP_ID');
            $table->string('CERTIFICATE_NAME');
            $table->string('WARRANTY_YEARS');
            $table->longText('DESCRIPTION');
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
        Schema::dropIfExists('CRM_WARRANTY_CERTIFICATES_TYPE');
    }
};
