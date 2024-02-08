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
        Schema::create('CRM_TARGETS_SETTING', function (Blueprint $table) {
            $table->integer('ID', true);
            $table->integer('COMP_ID');
            $table->integer('USER_ID');
            $table->string('TARGET_FOR', 100);
            $table->string('BRANCH_ID')->nullable();
            $table->string('REPS_ID')->nullable();
            $table->integer('TARGET_TYPE_ID');
            $table->integer('TARGET_PERCENTAGE');
            $table->tinyText('TARGET_DATE')->nullable();
            $table->tinyText('TARGET_MONTH')->nullable();
            $table->tinyText('TARGET_QUARTER')->nullable()->comment('Quater/Year');
            $table->tinyText('TARGET_YEAR')->nullable();
            $table->integer('CUSTOMERS')->nullable()->comment('Bring Customers');
            $table->integer('ESTIMATES')->nullable()->comment('Create Estimates');
            $table->mediumText('ESTIMATE_AMOUNT')->nullable();
            $table->mediumText('COLLECTION_AMOUNT')->nullable();
            $table->integer('CREATED_BY');
            $table->integer('UPDATE_BY')->nullable();
            $table->integer('ACTIVE_STATUS')->default(1);
            $table->enum('TARGET_TYPE', ['Annually', 'Monthly'])->default('Monthly');
            $table->timestamp('CREATED_ON')->useCurrentOnUpdate()->useCurrent();
            $table->timestamp('UPDATED_ON')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_TARGETS_SETTING');
    }
};
