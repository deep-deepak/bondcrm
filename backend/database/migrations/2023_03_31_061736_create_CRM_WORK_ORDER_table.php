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
        Schema::create('CRM_WORK_ORDER', function (Blueprint $table) {
            $table->integer('CUST_WO_ID', true);
            $table->string('WORK_ORDER_SNO', 25);
            $table->integer('ESTIMATE_ID');
            $table->integer('ESTIMATE_SNO')->nullable();
            $table->integer('CUSTOMER_ID');
            $table->integer('USER_ID');
            $table->text('DESC_OF_JOB');
            $table->dateTime('PREFERRED_DATE');
            $table->dateTime('COMPLETED_DATE');
            $table->integer('NO_OF_TECHNICIANS');
            $table->string('EQUIPMENT_REQ', 250);
            $table->integer('NO_OF_DAYS');
            $table->integer('DURATION_OF_EQIPMENT');
            $table->float('TOTAL_AMOUNT', 10, 0);
            $table->text('NOTE');
            $table->integer('COMP_ID');
            $table->integer('WORK_ORDER_STATUS');
            $table->dateTime('CREATE_DATE');
            $table->integer('CREATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->integer('UPDATE_BY');
            $table->string('PDF_NAME');
            $table->date('SCHEDULE_DATE');
            $table->string('REPRESENTATIVE_ID');
            $table->string('NOTES');
            $table->date('SCHEDULE_ON');
            $table->integer('TOTAL_DAYS');
            $table->string('ESTIMATE_ITEMS_id', 250)->nullable();
            $table->integer('pickupstatus')->default(0);
            $table->date('pickupdate')->nullable();
            $table->integer('SEQUENCE')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_WORK_ORDER');
    }
};
