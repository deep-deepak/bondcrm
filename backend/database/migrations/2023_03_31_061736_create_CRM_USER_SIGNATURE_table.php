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
        Schema::create('CRM_USER_SIGNATURE', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('USER_ID');
            $table->integer('COMP_ID');
            $table->tinyText('TYPE');
            $table->longText('TEMPLATE');
            $table->integer('ACTIVE_STATUS')->default(1);
            $table->dateTime('CREATED_ON');
            $table->dateTime('UPDATED_ON');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_USER_SIGNATURE');
    }
};
