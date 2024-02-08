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
        Schema::create('CRM_TERMINOLOGY', function (Blueprint $table) {
            $table->integer('TERMINOLOGY_ID', true);
            $table->string('TERMINOLOGY_SNO', 250);
            $table->integer('COMP_ID');
            $table->integer('CREATE_BY');
            $table->string('SUBJECT', 250);
            $table->string('MODULE_ID', 250);
            $table->longText('Explanation');
            $table->integer('STATUS');
            $table->dateTime('CREATE_DATE');
            $table->dateTime('UPDATED_AT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_TERMINOLOGY');
    }
};
