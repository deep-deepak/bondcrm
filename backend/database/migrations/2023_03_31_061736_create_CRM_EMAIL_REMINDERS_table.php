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
        Schema::create('CRM_EMAIL_REMINDERS', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('name', 150);
            $table->string('groups')->nullable();
            $table->string('departments')->nullable();
            $table->string('roles')->nullable();
            $table->string('branches')->nullable();
            $table->longText('representatives')->nullable();
            $table->longText('description');
            $table->boolean('status')->default(true);
            $table->integer('created_by');
            $table->integer('updated_by');
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
        Schema::dropIfExists('CRM_EMAIL_REMINDERS');
    }
};
