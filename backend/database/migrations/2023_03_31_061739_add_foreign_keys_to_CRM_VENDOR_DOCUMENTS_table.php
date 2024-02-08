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
        Schema::table('CRM_VENDOR_DOCUMENTS', function (Blueprint $table) {
            $table->foreign(['network_id'], 'FK_vendor_document_network')->references(['NETWORK_ID'])->on('CRM_NETWORK')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['doc_type_id'], 'FK_vendor_document_type_id')->references(['doc_id'])->on('CRM_VENDOR_DOCUMENTS_TYPE')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('CRM_VENDOR_DOCUMENTS', function (Blueprint $table) {
            $table->dropForeign('FK_vendor_document_network');
            $table->dropForeign('FK_vendor_document_type_id');
        });
    }
};
