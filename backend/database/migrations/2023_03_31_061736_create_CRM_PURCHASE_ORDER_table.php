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
        Schema::create('CRM_PURCHASE_ORDER', function (Blueprint $table) {
            $table->integer('CUST_PO_ID', true);
            $table->integer('ESTIMATE_ID');
            $table->integer('ESTIMATE_SNO')->nullable();
            $table->integer('CUSTOMER_ID');
            $table->integer('NETWORK_ID');
            $table->string('PO_NO', 250);
            $table->text('INVOICE_TO');
            $table->text('EQUIPMENT_REQ');
            $table->integer('TERMS_OF_PAY_INSURANCE_FILES');
            $table->text('DESC_OF_JOB');
            $table->integer('NO_OF_TECHNICIANS');
            $table->integer('NO_OF_DAYS');
            $table->string('TERMS_OF_PAYMENT', 250)->nullable();
            $table->integer('DURATION_OF_PROJECT');
            $table->date('DATE');
            $table->date('EXPECTED_START_DATE');
            $table->float('TOTAL_AMOUNT', 10, 0);
            $table->integer('TIME');
            $table->integer('MATERIAL');
            $table->integer('CONFIRMATION_OF_ACK');
            $table->integer('COMP_ID');
            $table->integer('PURCHASE_ORDER_STATUS');
            $table->dateTime('CREATE_DATE');
            $table->integer('CREATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->integer('UPDATE_BY');
            $table->date('EXPECTED_END_DATE');
            $table->string('ADDRESS');
            $table->string('PDF_NAME');
            $table->string('UPLOAD_DOC')->nullable();
            $table->string('INVOICE_DOC')->nullable();
            $table->integer('INVOICE_DOC_UPLOADED_BY')->nullable();
            $table->date('INVOICE_DOC_UPLOADED_DATE')->nullable();
            $table->string('INVOICE_REASON', 200)->nullable();
            $table->integer('INVOICE_AMOUNT')->nullable();
            $table->enum('PO_APPROVED', ['0', '1'])->nullable();
            $table->integer('OVERTIME_APPROVED')->default(0);
            $table->integer('CONSTRUCTION_SUPPLIES')->default(0);
            $table->integer('RES_ID');
            $table->bigInteger('QB_PO_ID')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_PURCHASE_ORDER');
    }
};
