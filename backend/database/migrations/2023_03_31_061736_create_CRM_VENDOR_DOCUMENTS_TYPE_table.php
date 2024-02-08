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
        Schema::create('CRM_VENDOR_DOCUMENTS_TYPE', function (Blueprint $table) {
            $table->integer('doc_id', true);
            $table->string('name', 200);
            $table->string('description');
            $table->string('file_name');
            $table->boolean('required')->default(false);
            $table->boolean('status')->default(true);
            $table->integer('created_by')->default(0);
            $table->integer('updated_by')->default(0);
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
        Schema::dropIfExists('CRM_VENDOR_DOCUMENTS_TYPE');
    }
};
