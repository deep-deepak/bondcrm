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
        Schema::create('CRM_DOCUMENT_TYPE', function (Blueprint $table) {
            $table->integer('DOC_TYPE_ID', true);
            $table->string('DOC_TYPE_SNO', 25);
            $table->string('DOC_TYPE_NAME', 100);
            $table->integer('COMP_ID')->index('FK_DOCUMENT_TYPE_COMP_ID');
            $table->integer('DOC_TYPE_STATUS');
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
        Schema::dropIfExists('CRM_DOCUMENT_TYPE');
    }
};
