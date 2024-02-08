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
        Schema::create('CRM_WORKORDER_EQUIPMENT', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('WORK_ORDER_ID');
            $table->integer('EQ_ID');
            $table->integer('NO_OF_DAYS');
            $table->integer('NO_OF_QUANTITIES');
            $table->integer('DURATION_NO');
            $table->dateTime('CREATE_ON');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_WORKORDER_EQUIPMENT');
    }
};
