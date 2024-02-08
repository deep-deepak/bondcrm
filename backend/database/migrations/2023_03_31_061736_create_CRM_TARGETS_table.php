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
        Schema::create('CRM_TARGETS', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('COMP_ID');
            $table->integer('USER_ID');
            $table->string('TARGET_NAME');
            $table->string('TYPE');
            $table->string('RELATED_TO');
            $table->string('EXP_INFO_TO_GETHER');
            $table->string('FORMULA')->nullable();
            $table->longText('DESCRIPTION');
            $table->integer('ACTIVE_STATUS')->default(1)->comment('1 = active, 0 = inactive');
            $table->integer('CREATED_BY')->nullable();
            $table->integer('UPDATED_BY')->nullable();
            $table->timestamp('CREATED_ON')->useCurrentOnUpdate()->useCurrent();
            $table->timestamp('UPDATED_ON')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_TARGETS');
    }
};
