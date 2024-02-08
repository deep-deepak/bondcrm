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
        Schema::create('CRM_CUSTOMER_ESTIMATE1', function (Blueprint $table) {
            $table->integer('ESTIMATE_ID', true);
            $table->integer('ESTIMATE_SNO');
            $table->integer('CUSTOMER_ID');
            $table->string('SECONDARY_CUSTOMER', 25);
            $table->integer('USER_ID');
            $table->integer('SERV_ID');
            $table->string('AREA', 250);
            $table->string('ADDRESS', 250);
            $table->integer('STAT_ID');
            $table->float('EXPECTED_AMOUNT', 10, 4);
            $table->float('AMOUNT', 10, 4);
            $table->float('DISCOUNT', 10);
            $table->float('PROFIT', 10);
            $table->float('PROFIT_VAL', 10);
            $table->float('OVERHEAD', 10);
            $table->float('OVERHEAD_VAL', 10);
            $table->float('COG_VAL', 10);
            $table->integer('INVOICE');
            $table->float('DISC_AMOUNT', 10, 0);
            $table->float('OUR_COST_TOTAL', 10, 4);
            $table->float('AFTER_DISC_SUB_TOT_VAL', 10, 4);
            $table->text('HST_VALUE');
            $table->float('AFTER_HST_SUB_TOT_VAL', 10, 4);
            $table->float('GRAND_TOTAL', 10, 4);
            $table->text('NOTE');
            $table->integer('FRENCH');
            $table->integer('LINE_ITEM');
            $table->dateTime('EXPIRE_DATE');
            $table->string('SUCCESS', 250);
            $table->string('EXPECTED_COLLECTION', 250);
            $table->integer('INSURANCE');
            $table->integer('INS_COMP_ID');
            $table->integer('IS_ASSIGNED');
            $table->integer('COMP_ID');
            $table->integer('CUST_EST_STATUS');
            $table->dateTime('CREATE_DATE');
            $table->integer('CREATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->integer('UPDATE_BY');
            $table->string('pdf_name', 225);
            $table->integer('profit_overhead');
            $table->string('CLIENT_AMOUNT', 25);
            $table->float('SUB_TOTAL', 10, 4);
            $table->integer('CREATE_INVOICE')->nullable();
            $table->integer('INVOICE_AMOUNT_PER')->nullable();
            $table->string('PO_CLAIM')->nullable();
            $table->text('NOTES')->nullable();
            $table->string('BUILDING_TYPE')->nullable();
            $table->float('complete_val', 10, 0);
            $table->dateTime('on_sale_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_CUSTOMER_ESTIMATE1');
    }
};
