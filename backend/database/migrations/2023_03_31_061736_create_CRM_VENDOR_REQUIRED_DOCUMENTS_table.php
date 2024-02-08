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
        Schema::create('CRM_VENDOR_REQUIRED_DOCUMENTS', function (Blueprint $table) {
            $table->integer('network_id')->index('Fk_VRD_network_id');
            $table->integer('doc_type_id')->index('Fk_VRD_doc_type_id');
            $table->boolean('status')->default(true);
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
        Schema::dropIfExists('CRM_VENDOR_REQUIRED_DOCUMENTS');
    }
};
