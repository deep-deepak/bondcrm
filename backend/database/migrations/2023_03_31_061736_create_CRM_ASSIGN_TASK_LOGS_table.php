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
        Schema::create('CRM_ASSIGN_TASK_LOGS', function (Blueprint $table) {
            $table->bigInteger('customer_id')->nullable();
            $table->bigInteger('estimate_id')->nullable();
            $table->integer('task_id');
            $table->string('reps', 500);
            $table->boolean('inspection')->default(false);
            $table->boolean('action')->comment('1 => created, 2 => updated, 3 => deleted, 4 => status changed');
            $table->integer('action_by');
            $table->string('status', 25);
            $table->longText('deleted_data')->nullable();
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
        Schema::dropIfExists('CRM_ASSIGN_TASK_LOGS');
    }
};
