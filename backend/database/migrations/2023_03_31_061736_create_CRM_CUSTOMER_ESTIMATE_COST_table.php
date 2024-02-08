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
        Schema::create('CRM_CUSTOMER_ESTIMATE_COST', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('ESTIMATE_SNO');
            $table->integer('COMP_ID');
            $table->float('GAS_AMOUNT', 10, 0)->nullable();
            $table->float('GAS_PERCENTAGE', 10, 0)->nullable();
            $table->float('GARBAGE_AMOUNT', 10, 0)->nullable();
            $table->float('GARBAGE_PERCENTAGE', 10, 0)->nullable();
            $table->float('SUPPLIES_AMOUNT', 10, 0)->nullable();
            $table->float('SUPPLIES_PERCENTAGE', 10, 0)->nullable();
            $table->enum('EST_COST_STATUS', ['0', '1'])->default('1');
            $table->integer('CREATED_BY');
            $table->integer('UPDATED_BY');
            $table->dateTime('CREATED_ON');
            $table->dateTime('UPDATED_ON');
            $table->integer('IS_SUPPLY_UPDATED')->nullable()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_CUSTOMER_ESTIMATE_COST');
    }
};
