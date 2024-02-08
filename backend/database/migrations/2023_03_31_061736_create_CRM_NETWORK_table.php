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
        Schema::create('CRM_NETWORK', function (Blueprint $table) {
            $table->integer('NETWORK_ID', true);
            $table->string('NETWORK_SNO', 25);
            $table->string('NETWORK_UID', 50)->nullable()->comment('For CRM Access');
            $table->string('COMP_NAME', 250);
            $table->integer('COMP_ID')->index('FK_NETWORK_COMP_ID');
            $table->string('EMAIL', 250);
            $table->string('PHONE', 250);
            $table->string('WEBSITE', 250);
            $table->text('ADDRESS');
            $table->string('POSTALCODE', 100);
            $table->integer('USER_ID')->index('FK_NETWORK_USER_ID');
            $table->integer('BRANCH_ID')->index('FK_NETWORK_BRANCH_ID');
            $table->integer('OCC_ID');
            $table->integer('PIP_ID')->index('FK_NETWORK_PIP_ID');
            $table->integer('GROUP_ID')->index('FK_NETWORK_GROUP_ID');
            $table->integer('INT_ID')->index('FK_NETWORK_INT_ID');
            $table->string('LANGUAGE', 100);
            $table->string('CONTACT_PERSON_1_NAME', 250);
            $table->string('CONTACT_PERSON_1_POSITION', 250);
            $table->string('CONTACT_PERSON_1_MOBILE', 250);
            $table->string('CONTACT_PERSON_1_EMAIL', 250);
            $table->string('CONTACT_PERSON_2_NAME', 250)->nullable();
            $table->string('CONTACT_PERSON_2_POSITION', 250)->nullable();
            $table->string('CONTACT_PERSON_2_MOBILE', 250)->nullable();
            $table->string('CONTACT_PERSON_2_EMAIL', 250)->nullable();
            $table->integer('QB_NET_ID')->nullable();
            $table->boolean('VENDOR')->default(false);
            $table->boolean('PACKAGE_SEND')->nullable()->default(false);
            $table->integer('CUSTOMERS_COUNT')->default(0);
            $table->integer('ESTIMATES_COUNT')->default(0);
            $table->dateTime('LAST_CONVERSATION')->nullable();
            $table->integer('NETWORK_STATUS');
            $table->integer('CREATE_BY');
            $table->integer('UPDATE_BY');
            $table->dateTime('CREATE_DATE');
            $table->dateTime('UPDATE_DATE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_NETWORK');
    }
};
