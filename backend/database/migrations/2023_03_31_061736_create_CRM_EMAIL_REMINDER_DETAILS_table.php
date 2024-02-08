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
        Schema::create('CRM_EMAIL_REMINDER_DETAILS', function (Blueprint $table) {
            $table->bigInteger('id', true);
            $table->integer('reminder_id');
            $table->string('email', 200);
            $table->integer('timezone');
            $table->boolean('status')->default(false);
            $table->boolean('email_send')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_EMAIL_REMINDER_DETAILS');
    }
};
