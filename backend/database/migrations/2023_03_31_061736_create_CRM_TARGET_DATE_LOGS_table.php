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
        Schema::create('CRM_TARGET_DATE_LOGS', function (Blueprint $table) {
            $table->integer('target_id', true);
            $table->integer('estimate_sno');
            $table->date('old_date');
            $table->date('new_date');
            $table->boolean('status')->default(true)->comment('0 - Inactive, 1 -Active');
            $table->integer('created_by')->default(0);
            $table->integer('updated_by')->default(0);
            $table->dateTime('created_at');
            $table->dateTime('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_TARGET_DATE_LOGS');
    }
};
