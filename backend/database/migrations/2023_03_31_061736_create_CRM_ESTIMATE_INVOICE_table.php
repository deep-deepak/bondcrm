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
        Schema::create('CRM_ESTIMATE_INVOICE', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('ESTIMATE_ID');
            $table->integer('CREATED_BY');
            $table->string('INVOICE_NO', 50);
            $table->string('INVOICE_FILE_NAME', 50);
            $table->float('INVOICE_AMOUNT', 10, 4);
            $table->date('INVOICE_DATE');
            $table->enum('STATUS', ['PAID', 'UNPAID', 'EMAIL']);
            $table->dateTime('UPDATED_ON');
            $table->dateTime('PAID_ON');
            $table->string('ESTIMATE_SNO', 15);
            $table->string('INVOICE_NOTE');
            $table->string('PAYMENT_NOTE');
            $table->enum('PAYMENT_METHOD', ['CC', 'CASH', 'CHEQUE', 'ONLINE', 'CARD', 'OTHER']);
            $table->integer('CUSTOMER_ID');
            $table->enum('payment_status', ['Paid', 'Bad Debt', 'Discount', 'UNPAID', 'Partially']);
            $table->float('collection', 10, 4);
            $table->float('BEDDEBTSAMOUNT', 10);
            $table->float('discount', 10, 4);
            $table->float('tax', 10, 4);
            $table->float('totalcollection', 10, 4);
            $table->dateTime('DUE_DATE');
            $table->string('PDF_NAME');
            $table->integer('QB_PAY_ID')->nullable();
            $table->integer('QB_INVOICE_ID')->nullable();
            $table->string('INVOICE_ENTITY_DETAILS')->nullable();
            $table->string('PAYMENT_ENTITY_DETAILS')->nullable();
            $table->integer('UPDATED_BY')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_ESTIMATE_INVOICE');
    }
};
