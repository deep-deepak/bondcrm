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
        Schema::create('CRM_COMPANY', function (Blueprint $table) {
            $table->integer('COMP_ID', true);
            $table->string('COMP_CODE', 100);
            $table->string('COMP_NAME', 100);
            $table->string('INDUSTRY', 100);
            $table->string('COMP_LOGO', 500);
            $table->string('TAG_LINE', 500);
            $table->text('COMP_ADDRESS');
            $table->string('COMP_GST_NO', 500);
            $table->string('COMP_PST_NO', 500);
            $table->string('COMP_QST_NO')->nullable();
            $table->string('TIMEZONE', 100)->nullable();
            $table->integer('COMP_STATUS');
            $table->dateTime('CREATE_DATE');
            $table->integer('CREATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->integer('UPDATE_BY');
            $table->string('FINANCE_EMAIL', 150);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_COMPANY');
    }
};
