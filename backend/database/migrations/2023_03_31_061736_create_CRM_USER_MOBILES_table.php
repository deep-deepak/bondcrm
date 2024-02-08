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
        Schema::create('CRM_USER_MOBILES', function (Blueprint $table) {
            $table->integer('user_id')->index('FK_User_Mobiles');
            $table->string('mobile', 25);
            $table->string('timezone', 100)->nullable();
            $table->boolean('status')->default(true)->comment('0 - Inactive, 1 - active');
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
        Schema::dropIfExists('CRM_USER_MOBILES');
    }
};
