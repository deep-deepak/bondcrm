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
        Schema::create('CRM_SPOTLIGHT_ACTIVITY_CHATS', function (Blueprint $table) {
            $table->bigInteger('id', true);
            $table->integer('spotlight_activity_id');
            $table->longText('message');
            $table->integer('message_from');
            $table->integer('message_to');
            $table->bigInteger('group_id')->nullable();
            $table->boolean('chat')->default(true);
            $table->boolean('status')->default(true)->comment('0 - Hide, 1 - Show, 3 - Deleted');
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
        Schema::dropIfExists('CRM_SPOTLIGHT_ACTIVITY_CHATS');
    }
};
