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
        Schema::create('CRM_WORK_OF_SCOPE', function (Blueprint $table) {
            $table->integer('WORK_SCOPE_ID', true);
            $table->integer('USER_ID')->default(0);
            $table->integer('CUSTOMER_ID')->default(0);
            $table->integer('ESTIMATE_SNO')->default(0);
            $table->integer('WORK_REC_ID')->default(0);
            $table->string('WORK_SCOPE_SNO')->nullable();
            $table->string('WORK_SCOPE_TITLE', 500)->nullable();
            $table->longText('WORK_SCOPE_CONTENT')->nullable();
            $table->integer('WORK_SCOPE_STATUS')->default(0);
            $table->string('HEIGHT_FOR_PDF', 30)->default('0');
            $table->string('PDF_URL', 500)->nullable();
            $table->integer('CREATED_BY')->default(0);
            $table->integer('UPDATED_BY')->default(0);
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
        Schema::dropIfExists('CRM_WORK_OF_SCOPE');
    }
};
