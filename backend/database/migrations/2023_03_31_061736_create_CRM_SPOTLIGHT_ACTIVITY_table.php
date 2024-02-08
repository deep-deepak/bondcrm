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
        Schema::create('CRM_SPOTLIGHT_ACTIVITY', function (Blueprint $table) {
            $table->integer('id', true);
            $table->string('name');
            $table->integer('estimate_sno');
            $table->boolean('action');
            $table->longText('description');
            $table->integer('review_by')->nullable();
            $table->boolean('reviewed')->default(false);
            $table->boolean('status')->default(true);
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
        Schema::dropIfExists('CRM_SPOTLIGHT_ACTIVITY');
    }
};
