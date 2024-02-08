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
        Schema::create('CRM_INTEREST', function (Blueprint $table) {
            $table->integer('INT_ID', true);
            $table->string('INT_SNO', 25);
            $table->string('INT_NAME', 100);
            $table->integer('COMP_ID')->index('FK_INTEREST_COMP_ID');
            $table->integer('INT_STATUS');
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
        Schema::dropIfExists('CRM_INTEREST');
    }
};
