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
        Schema::create('CRM_BRANCH', function (Blueprint $table) {
            $table->integer('BRANCH_ID', true);
            $table->string('BRANCH_SNO', 25);
            $table->string('BRANCH_NAME', 100);
            $table->string('SLUG', 191);
            $table->integer('REG_ID')->index('FK_CRM_BRANCH_REG_ID');
            $table->integer('COMP_ID')->index('FK_CRM_BRANCH_COMP_ID');
            $table->longText('GOOGLE_REVIEW_LINK')->nullable();
            $table->integer('PROV_ID');
            $table->bigInteger('QB_BRANCH_ID')->nullable();
            $table->integer('BRANCH_STATUS');
            $table->dateTime('CREATE_DATE');
            $table->integer('CREATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->integer('UPDATE_BY');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_BRANCH');
    }
};
