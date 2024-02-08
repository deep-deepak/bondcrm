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
        Schema::create('CRM_WORK_SCOPE_TITLES', function (Blueprint $table) {
            $table->integer('WRK_SCP_ID', true);
            $table->string('WRK_SCP_SNO', 25);
            $table->string('WRK_SCP_NAME', 100);
            $table->integer('COMP_ID')->index('FK_WORK_SCOPE_TITLES_COMP_ID');
            $table->integer('WRK_SCP_STATUS');
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
        Schema::dropIfExists('CRM_WORK_SCOPE_TITLES');
    }
};
