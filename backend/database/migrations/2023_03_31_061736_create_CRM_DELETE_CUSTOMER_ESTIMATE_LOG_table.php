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
        Schema::create('CRM_DELETE_CUSTOMER_ESTIMATE_LOG', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('ESTIMATE_ID');
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
            $table->dateTime('EXPIRE_DATE')->nullable();
            $table->string('SUCCESS', 250);
            $table->string('EXPECTED_COLLECTION', 250);
            $table->integer('INSURANCE');
            $table->integer('INS_COMP_ID');
            $table->integer('IS_ASSIGNED');
            $table->integer('COMP_ID');
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
            $table->date('INSPECTION_DATE')->nullable();
            $table->integer('COLL_STATUS')->nullable();
            $table->integer('COLL_RESPONSIBILITY')->nullable();
            $table->date('COLLECTION_DATE')->nullable();
            $table->integer('FINANCE_STATUS')->nullable();
            $table->integer('QB_EST_ID')->nullable();
            $table->longText('QBO_DETAILS')->nullable();
            $table->boolean('SPOTLIGHT_STATUS')->default(false);
            $table->float('TOTAL_COST', 10)->default(0);
            $table->string('TOTAL_HOURS', 50)->default('00:00:00	');
            $table->float('PO_AMOUNT', 10)->default(0);
            $table->date('INVOICE_DATE')->nullable();
            $table->float('INVOICE_AMOUNT', 10)->default(0);
            $table->float('INVOICE_COLLECTION', 10)->default(0);
            $table->integer('INVOICE_COUNT')->default(0);
            $table->float('INVOICE_DISCOUNT', 10)->default(0);
            $table->float('INVOICE_BAD_DEBT', 10)->default(0);
            $table->integer('WORK_ORDER_DAYS')->default(0);
            $table->date('JOB_START_DATE')->nullable();
            $table->integer('SCHEDULER_DAYS')->default(0);
            $table->integer('CUST_EST_STATUS');
            $table->integer('CREATE_BY');
            $table->dateTime('CREATE_DATE');
            $table->integer('UPDATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->integer('DELETED_BY');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_DELETE_CUSTOMER_ESTIMATE_LOG');
    }
};
