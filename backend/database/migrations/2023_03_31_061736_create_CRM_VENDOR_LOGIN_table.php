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
        Schema::create('CRM_VENDOR_LOGIN', function (Blueprint $table) {
            $table->integer('network_id')->index('FK_vendor_login_network');
            $table->string('token');
            $table->boolean('verify')->default(false);
            $table->dateTime('created_at');
            $table->dateTime('valid_till')->nullable();
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
        Schema::dropIfExists('CRM_VENDOR_LOGIN');
    }
};
