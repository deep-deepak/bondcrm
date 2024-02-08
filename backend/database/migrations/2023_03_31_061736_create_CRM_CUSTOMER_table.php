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
        Schema::create('CRM_CUSTOMER', function (Blueprint $table) {
            $table->integer('CUSTOMER_ID', true)->index('CUSTOMER_ID');
            $table->string('CUSTOMER_SNO', 25);
            $table->string('CUSTOMER_NAME', 250);
            $table->text('CUSTOMER_ADDRESS');
            $table->string('POSTALCODE', 250);
            $table->string('EMAIL', 250);
            $table->string('PHONE', 250);
            $table->string('MOBILE', 250);
            $table->integer('PROV_ID');
            $table->integer('BRANCH_ID');
            $table->integer('BUILD_ID');
            $table->integer('STAT_ID');
            $table->string('LANGUAGE', 250)->default('English');
            $table->string('POSITION', 250);
            $table->integer('SERV_ID');
            $table->string('SOURCE_TYPE', 250);
            $table->integer('SOURCE_NAME');
            $table->string('STAT_REASON')->nullable();
            $table->longText('CUST_NOTES')->nullable();
            $table->boolean('SECONDARY_CLIENT')->default(false);
            $table->string('SECONDARY_NAME', 150)->nullable();
            $table->integer('COMP_ID');
            $table->integer('QUICKBOOKS_CUST_ID')->nullable();
            $table->integer('CUST_STATUS')->default(1);
            $table->dateTime('CREATE_DATE');
            $table->integer('CREATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->integer('UPDATE_BY');

            $table->primary(['CUSTOMER_ID']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_CUSTOMER');
    }
};
