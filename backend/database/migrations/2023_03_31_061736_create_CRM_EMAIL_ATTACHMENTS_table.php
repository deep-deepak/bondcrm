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
        Schema::create('CRM_EMAIL_ATTACHMENTS', function (Blueprint $table) {
            $table->integer('EMAIL_ATTACH_ID', true);
            $table->string('EMAIL_ATTACH_NAME', 100);
            $table->string('EMAIL_ATTACH_TYPE', 100);
            $table->string('EMAIL_ATTACH_FILE', 500);
            $table->integer('COMP_ID')->index('FK_EMAIL_ATTACHMENTS_COMP_ID');
            $table->integer('EMAIL_ATTACH_STATUS');
            $table->dateTime('CREATE_DATE');
            $table->integer('CREATE_BY');
            $table->dateTime('UPDATE_DATE');
            $table->integer('UPDATE_BY');
            $table->string('EMAIL_ATTACH_SNO', 25);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_EMAIL_ATTACHMENTS');
    }
};
