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
        Schema::create('CRM_ASSIGN_JOB', function (Blueprint $table) {
            $table->integer('ASSIGN_JOB_ID', true);
            $table->string('ASSIGN_JOB_SNO', 25);
            $table->string('ESTIMATE_SNO');
            $table->integer('ESTIMATE_ID');
            $table->string('title', 125);
            $table->string('ASSIGNED_USER', 100);
            $table->string('SITE_ADDRESS', 500);
            $table->string('IMPORTANCE_LEVEL', 30);
            $table->date('START_DATE');
            $table->time('START_TIME');
            $table->time('END_TIME');
            $table->integer('NO_OF_DAYS');
            $table->float('TOTAL_DAYS', 10, 0)->nullable();
            $table->date('PICK_UP_DATE');
            $table->integer('COMP_ID');
            $table->integer('STATUS');
            $table->dateTime('CREATE_DATE');
            $table->integer('CREATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->integer('UPDATE_BY');
            $table->enum('JOB_STATUS', ['ASSIGNED', 'ON_GOING', 'COMPLETED', 'UN_DONE'])->default('ASSIGNED');
            $table->string('guest_email', 500)->nullable();
            $table->string('NOTE');
            $table->time('durationhour');
            $table->string('type', 250)->nullable();
            $table->integer('COLLECTION_PAYMENT')->nullable()->default(0);
            $table->string('COLLECTION_AMOUNT', 15)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_ASSIGN_JOB');
    }
};
