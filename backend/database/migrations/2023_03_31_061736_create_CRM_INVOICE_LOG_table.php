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
        Schema::create('CRM_INVOICE_LOG', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('INVOICE_ID');
            $table->enum('ACTION', ['Paid', 'Bad Debt', 'Discount', 'Unpaid', 'Partially']);
            $table->float('AMOUNT', 10, 4);
            $table->dateTime('CREATE_ON');
            $table->integer('UPDATE_BY');
            $table->float('DISCOUNT', 10, 4);
            $table->float('tax', 10, 4);
            $table->float('totalcollection', 10, 4);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_INVOICE_LOG');
    }
};
