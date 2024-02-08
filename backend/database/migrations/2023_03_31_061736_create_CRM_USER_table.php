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
        Schema::create('CRM_USER', function (Blueprint $table) {
            $table->integer('USER_ID', true);
            $table->string('bondcrm_id', 25)->nullable();
            $table->integer('COMP_ID')->index('FK_CRM_DEPARTMENTS_COMP_ID');
            $table->string('USER_SNO', 25);
            $table->string('USER_NAME', 100);
            $table->string('USER_EMAIL', 100);
            $table->string('USER_MOBILE', 50)->nullable();
            $table->string('PASSWORD', 500)->nullable();
            $table->string('USER_PIC', 500)->nullable();
            $table->integer('USER_DEP')->nullable()->index('FK_USER_DEP');
            $table->integer('USER_ROLE')->index('FK_CRM_USER_USER_ROLE');
            $table->integer('USER_REGION')->nullable()->index('FK_CRM_USER_USER_REGION');
            $table->string('USER_BRANCH', 100)->nullable()->index('FK_CRM_USER_USER_BRANCH');
            $table->string('USER_REPORTEE', 100)->nullable();
            $table->string('REPORTING_TO_USER', 25)->nullable();
            $table->date('LAST_LOGIN')->nullable();
            $table->text('SIGNATURE')->nullable();
            $table->integer('QB_USER_ID')->nullable();
            $table->integer('CHECK_QB_USE')->default(0);
            $table->integer('CHECK_QB_PERMISSIONS')->default(0);
            $table->enum('QBO_COMP_ACCESS', ['YES', 'NO'])->default('NO');
            $table->dateTime('QBO_LOGIN_TIME')->nullable();
            $table->integer('DESIGNATION_PERMISSIONS')->default(0);
            $table->string('description')->nullable();
            $table->smallInteger('security_question')->nullable();
            $table->string('security_answer', 50)->nullable();
            $table->integer('superAdmin')->default(0);
            $table->enum('secondary_admin', ['Y', 'N'])->default('N');
            $table->integer('permision_status')->default(0);
            $table->enum('is_2step_auth', ['0', '1'])->default('0')->comment('0 => no, 1 => true (2 Step Authentication)');
            $table->dateTime('invitation_time')->nullable();
            $table->integer('USER_STATUS')->default(1)->comment('0 - In-Active, 1 - Active, 2 - Invite, 3 - deleted');
            $table->integer('CREATE_BY');
            $table->dateTime('CREATE_DATE');
            $table->integer('UPDATE_BY');
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
        Schema::dropIfExists('CRM_USER');
    }
};
