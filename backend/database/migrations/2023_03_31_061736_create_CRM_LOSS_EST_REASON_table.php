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
        Schema::create('CRM_LOSS_EST_REASON', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('COMP_ID');
            $table->integer('USER_ID');
            $table->integer('ESTIMATE_ID');
            $table->integer('ESTIMATE_SNO');
            $table->integer('STATUS_ID');
            $table->integer('LOSS_REASON_ID');
            $table->integer('ACTIVE_STATUS')->default(1)->comment('1 : Active, 0 : InActive');
            $table->integer('CREATED_BY');
            $table->integer('UPDATED_BY')->nullable();
            $table->timestamp('CREATED_ON')->useCurrentOnUpdate()->useCurrent();
            $table->timestamp('UPDATED_ON')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_LOSS_EST_REASON');
    }
};
