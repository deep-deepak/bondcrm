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
        Schema::create('CRM_CUSTOMER_OUT_SOURCE', function (Blueprint $table) {
            $table->integer('CUST_OUT_SRC_ID', true);
            $table->string('CUST_OUT_SRC_SNO', 25);
            $table->integer('CUSTOMER_ID');
            $table->text('NOTE');
            $table->integer('NETWORK_ID');
            $table->integer('COMP_ID');
            $table->string('SENDMAIL', 5);
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
        Schema::dropIfExists('CRM_CUSTOMER_OUT_SOURCE');
    }
};
