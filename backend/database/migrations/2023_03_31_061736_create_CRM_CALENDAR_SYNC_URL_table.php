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
        Schema::create('CRM_CALENDAR_SYNC_URL', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('USER_ID');
            $table->integer('COMP_ID');
            $table->string('ICS_NAME', 50);
            $table->longText('ICS_URL');
            $table->tinyText('CALENDAR_COLOR');
            $table->dateTime('CREATED_AT');
            $table->dateTime('UPDATED_AT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_CALENDAR_SYNC_URL');
    }
};
