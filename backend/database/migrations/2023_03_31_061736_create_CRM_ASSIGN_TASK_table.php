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
        Schema::create('CRM_ASSIGN_TASK', function (Blueprint $table) {
            $table->integer('ID', true)->index('ID');
            $table->integer('ESTIMATE_ID')->nullable();
            $table->string('ASSIGN_TASK_SNO', 25);
            $table->integer('COMP_ID');
            $table->integer('CREATE_BY');
            $table->enum('STATUS', ['WAITING', 'COMPLETED', 'WIP']);
            $table->string('TITLE', 25);
            $table->string('OLD_REPS', 100)->nullable();
            $table->string('REPRESENTATIVE', 250);
            $table->date('START_DATE');
            $table->date('DUE_DATE');
            $table->string('LEVEL', 25);
            $table->longText('NOTES');
            $table->dateTime('CREATE_DATE');
            $table->dateTime('UPDATE_DATE');
            $table->integer('UPDATE_BY');
            $table->integer('CUSTOMER_ID')->nullable();
            $table->integer('inspection');
            $table->integer('orderby')->nullable();
            $table->string('unit', 250)->nullable();
            $table->integer('custcheck');
            $table->string('guest_email', 250)->nullable();
            $table->integer('SEQUENCE')->default(0);
            $table->boolean('ALL_DAYS')->default(false);

            $table->primary(['ID']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_ASSIGN_TASK');
    }
};
