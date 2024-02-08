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
        Schema::create('CRM_TASK_COMMENTS', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('USER_ID');
            $table->integer('TASK_ID');
            $table->string('TAGS', 250)->nullable();
            $table->longText('COMMENTS')->nullable();
            $table->string('Image')->nullable();
            $table->dateTime('CREATED_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_TASK_COMMENTS');
    }
};
