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
        Schema::create('CRM_GROUP', function (Blueprint $table) {
            $table->integer('GROUP_ID', true);
            $table->string('GROUP_SNO', 25);
            $table->string('GROUP_NAME', 100);
            $table->integer('COMP_ID')->index('FK_GROUP_COMP_ID');
            $table->integer('GROUP_STATUS');
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
        Schema::dropIfExists('CRM_GROUP');
    }
};
