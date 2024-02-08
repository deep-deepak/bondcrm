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
        Schema::create('CRM_otp_verification', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('phone', 191)->nullable();
            $table->string('email', 191)->nullable();
            $table->string('otp_code', 191);
            $table->dateTime('time');
            $table->string('otp_for', 191);
            $table->enum('otp_status', ['0', '1'])->default('0');
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
        Schema::dropIfExists('CRM_otp_verification');
    }
};
