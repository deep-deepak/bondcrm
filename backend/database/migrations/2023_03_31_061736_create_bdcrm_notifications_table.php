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
        Schema::create('bdcrm_notifications', function (Blueprint $table) {
            $table->bigIncrements('notification_id');
            $table->integer('task_id')->default(0);
            $table->string('user_ids', 191);
            $table->text('activity');
            $table->string('type', 191)->default('task');
            $table->string('status', 191)->nullable();
            $table->integer('created_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bdcrm_notifications');
    }
};
