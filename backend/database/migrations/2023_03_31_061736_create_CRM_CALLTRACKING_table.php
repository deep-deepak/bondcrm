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
        Schema::create('CRM_CALLTRACKING', function (Blueprint $table) {
            $table->integer('iD', true);
            $table->integer('COMP_ID');
            $table->date('CALLERDATE');
            $table->string('CALLERID', 250)->nullable();
            $table->string('SOURCE', 250)->nullable();
            $table->string('CALLUSER', 250)->nullable();
            $table->string('SOURCENAME', 250)->nullable();
            $table->integer('DURATION');
            $table->integer('WAITTIME');
            $table->string('DISPOSITION', 250)->nullable();
            $table->string('GEOLOCATION', 250)->nullable();
            $table->string('PROVINCE', 250)->nullable();
            $table->integer('BRANCH')->nullable()->default(0);
            $table->string('CALLEDBACK', 250)->nullable();
            $table->dateTime('MINCALLBACKTIMESTAMP')->nullable();
            $table->dateTime('MAXCALLBACKTIMESTAMP')->nullable();
            $table->integer('ANSWERTOTALDURATION');
            $table->integer('NUMBEROFCALLBACK');
            $table->dateTime('CREATED_AT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_CALLTRACKING');
    }
};
