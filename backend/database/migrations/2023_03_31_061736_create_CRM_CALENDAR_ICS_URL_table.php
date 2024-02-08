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
        Schema::create('CRM_CALENDAR_ICS_URL', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('USER_ID');
            $table->integer('COMP_ID');
            $table->longText('USER_ICS_URL');
            $table->mediumText('CALENDAR_PERMISSION');
            $table->dateTime('CRON_UPDATED_ON')->nullable();
            $table->enum('UPDATE_STATUS', ['0', '1'])->default('0');
            $table->dateTime('CREATED_AT');
            $table->date('UPDATED_AT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_CALENDAR_ICS_URL');
    }
};
