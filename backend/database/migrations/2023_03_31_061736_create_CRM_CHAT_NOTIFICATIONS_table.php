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
        Schema::create('CRM_CHAT_NOTIFICATIONS', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('type', 150);
            $table->longText('message')->nullable();
            $table->string('url')->nullable();
            $table->integer('from_user');
            $table->integer('to_user')->nullable();
            $table->integer('group_id')->nullable();
            $table->boolean('to_user_read')->default(false);
            $table->boolean('status')->default(true);
            $table->timestamp('created_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_CHAT_NOTIFICATIONS');
    }
};
