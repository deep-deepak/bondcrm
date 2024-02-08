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
        Schema::create('CRM_CHARGE_CODE', function (Blueprint $table) {
            $table->integer('CHG_CODE_ID', true);
            $table->string('CHG_CODE_SNO', 25);
            $table->string('CHG_CODE_NAME', 100);
            $table->string('CHARGE_CODE', 100);
            $table->string('DESC', 500);
            $table->string('FRENCH_DESC', 500);
            $table->integer('UNIT_PRICE');
            $table->string('UNIT_OF_MEASURE', 50);
            $table->integer('OUR_COST');
            $table->string('GL_CODE', 100);
            $table->integer('COMP_ID')->index('FK_CHARGE_CODE_COMP_ID');
            $table->integer('COUNT_IN_WO');
            $table->integer('CHG_CODE_STATUS');
            $table->longText('CC_NOTES')->nullable();
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
        Schema::dropIfExists('CRM_CHARGE_CODE');
    }
};
