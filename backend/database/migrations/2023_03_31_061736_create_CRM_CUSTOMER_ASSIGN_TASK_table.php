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
        Schema::create('CRM_CUSTOMER_ASSIGN_TASK', function (Blueprint $table) {
            $table->integer('CUST_ASSIGN_TASK_ID', true);
            $table->integer('CUSTOMER_ID');
            $table->string('CUST_ASSIGN_TASK_SNO', 25);
            $table->integer('TASK_TYPE_ID');
            $table->integer('USER_ID');
            $table->integer('ESTIMATE_ID');
            $table->string('IMPORTANCE_LEVEL', 100);
            $table->date('INSPECTION_DATE');
            $table->time('TASK_START_TIME');
            $table->time('TASK_END_TIME');
            $table->text('NOTE');
            $table->integer('COMP_ID');
            $table->integer('STATUS');
            $table->integer('IS_COMPLETE');
            $table->text('COMPLETE_REMARKS');
            $table->integer('ACCEPT_REJECT_STATUS');
            $table->text('ACCEPT_REJECT_REMARKS');
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
        Schema::dropIfExists('CRM_CUSTOMER_ASSIGN_TASK');
    }
};
