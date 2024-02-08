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
        Schema::create('CRM_CUSTOMER_ESTIMATE_ITEMS', function (Blueprint $table) {
            $table->bigInteger('ESTIMATE_ITEM_ID', true);
            $table->integer('ESTIMATE_ID');
            $table->integer('CUSTOMER_ID');
            $table->integer('USER_ID');
            $table->integer('CHG_CODE_ID');
            $table->string('FRENCH_DESC', 250);
            $table->float('UNIT_PRICE', 23);
            $table->integer('UNIT_OF_MEASURE');
            $table->string('UOM', 100);
            $table->float('DAYS', 10, 0);
            $table->text('REMARK');
            $table->float('TOTAL_CHARGE_CODE', 10, 0);
            $table->float('OUR_COST', 10, 0);
            $table->float('TOTAL_OUR_COST', 10, 0);
            $table->integer('ITEM_ORDER')->default(0);
            $table->integer('COMP_ID');
            $table->integer('CUST_EST_ITEM_STATUS');
            $table->boolean('EST_SAVEITEM_STATUS')->default(true);
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
        Schema::dropIfExists('CRM_CUSTOMER_ESTIMATE_ITEMS');
    }
};
