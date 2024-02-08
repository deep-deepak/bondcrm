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
        Schema::create('CRM_ROLES', function (Blueprint $table) {
            $table->integer('ROLE_ID', true);
            $table->string('ROLE_SNO', 25);
            $table->string('ROLE_NAME', 100);
            $table->string('ROLE_ALIAS', 150)->nullable();
            $table->integer('DEPT_ID')->index('FK_CRM_ROLES_DEPT_ID');
            $table->integer('REPORTING_TO_ROLE_ID');
            $table->integer('COMP_ID')->index('FK_CRM_ROLES_COMP_ID');
            $table->integer('ROLE_STATUS');
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
        Schema::dropIfExists('CRM_ROLES');
    }
};
