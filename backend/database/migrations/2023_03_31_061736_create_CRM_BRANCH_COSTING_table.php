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
        Schema::create('CRM_BRANCH_COSTING', function (Blueprint $table) {
            $table->integer('COST_ID', true);
            $table->integer('BRANCH_ID');
            $table->integer('CREATE_BY');
            $table->integer('COMP_ID');
            $table->enum('COST_STATUS', ['0', '1']);
            $table->integer('GAS');
            $table->integer('GARBADGE');
            $table->integer('SUPPLIES');
            $table->integer('COST');
            $table->dateTime('CREATED_AT')->nullable();
            $table->dateTime('UPDATED_AT')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_BRANCH_COSTING');
    }
};
