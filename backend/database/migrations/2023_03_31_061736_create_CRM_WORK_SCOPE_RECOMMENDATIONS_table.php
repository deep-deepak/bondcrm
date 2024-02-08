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
        Schema::create('CRM_WORK_SCOPE_RECOMMENDATIONS', function (Blueprint $table) {
            $table->integer('WRK_SCP_REC_ID', true);
            $table->string('WRK_SCP_REC_SNO', 25);
            $table->text('WRK_SCP_REC_NAME');
            $table->integer('COMP_ID')->index('FK_WORK_SCOPE_RECOMMENDATIONS_COMP_ID');
            $table->integer('WRK_SCP_REC_STATUS');
            $table->dateTime('CREATE_DATE');
            $table->integer('CREATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->integer('UPDATE_BY');
            $table->integer('WRK_SCP_ID');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_WORK_SCOPE_RECOMMENDATIONS');
    }
};
