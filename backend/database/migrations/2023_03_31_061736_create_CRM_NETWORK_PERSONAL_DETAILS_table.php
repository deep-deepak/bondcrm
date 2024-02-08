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
        Schema::create('CRM_NETWORK_PERSONAL_DETAILS', function (Blueprint $table) {
            $table->integer('network_id');
            $table->string('name', 150);
            $table->string('position', 150);
            $table->string('email', 150);
            $table->string('mobile', 15);
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
        Schema::dropIfExists('CRM_NETWORK_PERSONAL_DETAILS');
    }
};
