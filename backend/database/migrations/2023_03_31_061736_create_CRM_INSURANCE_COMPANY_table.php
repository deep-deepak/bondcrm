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
        Schema::create('CRM_INSURANCE_COMPANY', function (Blueprint $table) {
            $table->integer('INS_COMP_ID', true);
            $table->string('INS_COMP_SNO', 25);
            $table->string('INS_COMP_NAME', 100);
            $table->integer('COMP_ID')->index('FK_INSURANCE_COMPANY_COMP_ID');
            $table->integer('INS_COMP_STATUS');
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
        Schema::dropIfExists('CRM_INSURANCE_COMPANY');
    }
};
