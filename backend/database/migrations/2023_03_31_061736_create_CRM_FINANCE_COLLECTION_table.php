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
        Schema::create('CRM_FINANCE_COLLECTION', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('COMP_ID');
            $table->integer('USER_ID');
            $table->text('COLL_TYPE');
            $table->string('COLLECTION_NAME');
            $table->integer('ACTIVE_STATUS')->default(1);
            $table->integer('CREATED_BY');
            $table->integer('UPDATED_BY')->nullable();
            $table->timestamp('CREATED_ON')->useCurrentOnUpdate()->useCurrent();
            $table->integer('UPDATED_ON')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_FINANCE_COLLECTION');
    }
};
