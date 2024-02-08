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
        Schema::create('CRM_EMAIL_SIGNATURE', function (Blueprint $table) {
            $table->integer('EMAIL_SIG_ID', true);
            $table->string('EMAIL_SIG_SNO', 25);
            $table->text('EMAIL_SIGNATURE');
            $table->integer('COMP_ID')->index('FK_EMAIL_SIGNATURE_COMP_ID');
            $table->integer('EMAIL_SIG_STATUS');
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
        Schema::dropIfExists('CRM_EMAIL_SIGNATURE');
    }
};
