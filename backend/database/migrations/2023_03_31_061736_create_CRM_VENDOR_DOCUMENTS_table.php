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
        Schema::create('CRM_VENDOR_DOCUMENTS', function (Blueprint $table) {
            $table->integer('vendor_doc_id', true);
            $table->integer('network_id')->index('FK_vendor_document_network');
            $table->integer('doc_type_id')->index('FK_vendor_document_type_id');
            $table->date('expiry_date');
            $table->longText('description');
            $table->string('who_uploaded');
            $table->string('file_path');
            $table->boolean('approved')->default(false);
            $table->boolean('status')->default(true);
            $table->dateTime('created_at');
            $table->dateTime('updated_at');
            $table->dateTime('approved_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_VENDOR_DOCUMENTS');
    }
};
