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
        Schema::create('CRM_CUSTOMER_CRONS', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('customer_id');
            $table->string('type', 150);
            $table->string('content', 1000);
            $table->integer('status')->default(1);
            $table->integer('created_by')->default(0);
            $table->timestamp('created_on')->useCurrent();
            $table->timestamp('updated_on')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_CUSTOMER_CRONS');
    }
};
