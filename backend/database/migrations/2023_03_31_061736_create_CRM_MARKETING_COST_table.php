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
        Schema::create('CRM_MARKETING_COST', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->string('MC_SNO', 15);
            $table->integer('COMP_ID');
            $table->integer('USER_ID');
            $table->mediumText('SOURCE_TYPE');
            $table->integer('SOURCE_ID')->nullable();
            $table->integer('BRANCH_ID');
            $table->integer('SERVICE_ID');
            $table->date('MONTH');
            $table->integer('COST');
            $table->integer('ACTIVE_STATUS')->default(1);
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
        Schema::dropIfExists('CRM_MARKETING_COST');
    }
};
