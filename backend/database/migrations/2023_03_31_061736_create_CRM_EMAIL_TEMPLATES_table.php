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
        Schema::create('CRM_EMAIL_TEMPLATES', function (Blueprint $table) {
            $table->integer('EMAIL_TEMP_ID', true);
            $table->string('EMAIL_TEMP_SNO', 25);
            $table->string('EMAIL_TEMP_NAME', 100);
            $table->string('EMAIL_TEMP_SUBJECT', 500);
            $table->text('EMAIL_TEMP_MESSAGE');
            $table->text('EMAIL_PLACE_HOLDERS')->nullable();
            $table->integer('COMP_ID')->index('FK_EMAIL_TEMPLATES_COMP_ID');
            $table->integer('EMAIL_TEMP_STATUS');
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
        Schema::dropIfExists('CRM_EMAIL_TEMPLATES');
    }
};
