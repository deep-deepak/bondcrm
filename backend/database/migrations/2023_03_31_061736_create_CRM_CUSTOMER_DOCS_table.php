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
        Schema::create('CRM_CUSTOMER_DOCS', function (Blueprint $table) {
            $table->integer('CUST_DOC_ID', true);
            $table->string('CUST_DOC_SNO', 25);
            $table->integer('CUSTOMER_ID');
            $table->integer('DOC_TYPE_ID');
            $table->string('DESCRIPTION', 500);
            $table->string('FILE_NAME', 500);
            $table->integer('COMP_ID');
            $table->integer('STATUS');
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
        Schema::dropIfExists('CRM_CUSTOMER_DOCS');
    }
};
