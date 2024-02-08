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
        Schema::create('CRM_PROVINCE', function (Blueprint $table) {
            $table->integer('PROV_ID', true);
            $table->string('PROV_SNO', 25);
            $table->string('PROV_NAME', 100);
            $table->string('TAX_DATA', 500);
            $table->integer('COMP_ID')->index('FK_CRM_PROVINCE_COMP_ID');
            $table->integer('PROV_STATUS');
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
        Schema::dropIfExists('CRM_PROVINCE');
    }
};
