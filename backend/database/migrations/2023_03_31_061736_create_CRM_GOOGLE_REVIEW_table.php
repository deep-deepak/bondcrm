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
        Schema::create('CRM_GOOGLE_REVIEW', function (Blueprint $table) {
            $table->integer('id', true);
            $table->integer('estimate_sno');
            $table->longText('link')->nullable();
            $table->string('reason')->nullable();
            $table->boolean('status')->default(false)->comment('0 => link not sent to customer, 1 => link sent to customer');
            $table->integer('created_by');
            $table->integer('updated_by');
            $table->dateTime('created_at');
            $table->dateTime('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_GOOGLE_REVIEW');
    }
};
