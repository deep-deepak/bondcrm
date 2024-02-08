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
        Schema::create('CRM_ESTIMATE_COMPLETION_VALUE', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('ESTIMATE_SNO');
            $table->string('month', 30)->nullable();
            $table->string('complete_val', 50)->default('0');
            $table->dateTime('CREATED_AT');
            $table->dateTime('UPDATED_AT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_ESTIMATE_COMPLETION_VALUE');
    }
};
