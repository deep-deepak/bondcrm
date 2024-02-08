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
        Schema::create('CRM_SPOTLIGHT_CHAT_USERS', function (Blueprint $table) {
            $table->integer('user_id');
            $table->integer('spotlight_id');
            $table->boolean('status')->default(true);
            $table->integer('created_by');
            $table->dateTime('created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_SPOTLIGHT_CHAT_USERS');
    }
};
