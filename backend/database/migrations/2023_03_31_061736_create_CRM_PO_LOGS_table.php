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
        Schema::create('CRM_PO_LOGS', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('CUST_PO_ID');
            $table->integer('ESTIMATE_ID');
            $table->integer('ESTIMATE_SNO')->nullable();
            $table->integer('CUSTOMER_ID');
            $table->integer('NETWORK_ID');
            $table->string('PO_NO', 250)->nullable();
            $table->text('INVOICE_TO')->nullable();
            $table->text('EQUIPMENT_REQ')->nullable();
            $table->integer('TERMS_OF_PAY_INSURANCE_FILES')->nullable();
            $table->text('DESC_OF_JOB')->nullable();
            $table->integer('NO_OF_TECHNICIANS')->nullable();
            $table->integer('NO_OF_DAYS')->nullable();
            $table->string('TERMS_OF_PAYMENT', 250)->nullable();
            $table->integer('DURATION_OF_PROJECT')->nullable();
            $table->date('DATE')->nullable();
            $table->date('EXPECTED_START_DATE')->nullable();
            $table->float('TOTAL_AMOUNT', 10, 0)->nullable();
            $table->integer('TIME')->nullable();
            $table->integer('MATERIAL')->nullable();
            $table->integer('CONFIRMATION_OF_ACK')->nullable();
            $table->integer('COMP_ID')->nullable();
            $table->integer('PURCHASE_ORDER_STATUS')->nullable();
            $table->dateTime('CREATE_DATE')->nullable();
            $table->integer('CREATE_BY')->nullable();
            $table->dateTime('UPDATE_DATE')->nullable();
            $table->integer('UPDATE_BY')->nullable();
            $table->date('EXPECTED_END_DATE')->nullable();
            $table->string('ADDRESS')->nullable();
            $table->string('PDF_NAME')->nullable();
            $table->enum('PO_APPROVED', ['0', '1'])->nullable();
            $table->integer('OVERTIME_APPROVED')->nullable()->default(0);
            $table->integer('RES_ID')->nullable();
            $table->string('UPLOAD_DOC')->nullable();
            $table->string('INVOICE_DOC')->nullable();
            $table->integer('INVOICE_AMOUNT')->nullable();
            $table->bigInteger('QB_PO_ID')->nullable();
            $table->integer('CONSTRUCTION_SUPPLIES')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_PO_LOGS');
    }
};
