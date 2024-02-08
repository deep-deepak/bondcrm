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
        Schema::create('CRM_CUSTOMER_COLLECTION_RECORDS', function (Blueprint $table) {
            $table->integer('CUST_COLL_ID', true);
            $table->integer('ESTIMATE_ID');
            $table->integer('CUSTOMER_ID');
            $table->float('AMOUNT_PAY', 10, 0);
            $table->string('MODE_OF_PAYMENT', 250);
            $table->text('NOTE');
            $table->dateTime('EXPECTED_DATE')->nullable();
            $table->integer('COMP_ID');
            $table->integer('CUST_EST_COLL_STATUS');
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
        Schema::dropIfExists('CRM_CUSTOMER_COLLECTION_RECORDS');
    }
};
