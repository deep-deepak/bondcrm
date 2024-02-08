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
        Schema::create('CRM_NOTIFICATION', function (Blueprint $table) {
            $table->integer('NOTIFICATION_ID', true);
            $table->string('NOTIFICATION_TYPE', 100);
            $table->longText('MESSAGE');
            $table->string('URL', 200)->nullable();
            $table->integer('COMP_ID');
            $table->integer('USER_ID');
            $table->integer('BRANCH_ID')->nullable()->default(0);
            $table->integer('DEP_ID')->nullable();
            $table->integer('ROLE_ID')->nullable();
            $table->integer('FROM_USER_READ')->default(0);
            $table->integer('TO_USER_READ')->default(0);
            $table->integer('NETWORK_ID')->default(0);
            $table->boolean('TO_NETWORK_READ')->default(false);
            $table->integer('newNotification')->default(0);
            $table->boolean('STATUS')->default(false);
            $table->integer('CREATE_BY');
            $table->dateTime('CREATE_DATE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_NOTIFICATION');
    }
};
