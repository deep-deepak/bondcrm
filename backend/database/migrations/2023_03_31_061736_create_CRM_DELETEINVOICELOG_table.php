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
        Schema::create('CRM_DELETEINVOICELOG', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->string('INVOICE_SNO', 250);
            $table->integer('ESTIMATE_ID');
            $table->string('ESTIMATE_SNO', 250);
            $table->integer('DELETEDBY');
            $table->integer('CUSTOMER_ID');
            $table->float('COLLECTION', 10);
            $table->float('INVOICEAMOUNT', 10);
            $table->date('INVOICE_DATE');
            $table->dateTime('CREATED_AT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_DELETEINVOICELOG');
    }
};
