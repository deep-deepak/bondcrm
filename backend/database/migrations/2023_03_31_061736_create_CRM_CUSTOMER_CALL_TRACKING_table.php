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
        Schema::create('CRM_CUSTOMER_CALL_TRACKING', function (Blueprint $table) {
            $table->comment('Customer Call Tracking Data Importing from file');
            $table->bigInteger('id', true);
            $table->string('domain_uuid', 250)->nullable();
            $table->string('extension', 250)->nullable();
            $table->string('start_stamp', 150)->nullable();
            $table->string('end_stamp', 150)->nullable();
            $table->string('start_epoch', 250)->nullable();
            $table->string('hangup_cause', 250)->nullable();
            $table->string('duration', 100)->nullable();
            $table->string('billmsec', 100)->nullable();
            $table->string('record_path', 250)->nullable();
            $table->string('record_name', 250)->nullable();
            $table->string('xml_cdr_uuid', 250)->nullable();
            $table->string('bridge_uuid', 250)->nullable();
            $table->string('direction', 250)->nullable();
            $table->string('billsec', 100)->nullable();
            $table->string('caller_id_name', 250)->nullable();
            $table->string('caller_id_number', 250)->nullable();
            $table->string('caller_destination', 250)->nullable();
            $table->string('source_number', 250)->nullable();
            $table->string('destination_number', 250)->nullable();
            $table->string('leg', 150)->nullable();
            $table->string('cc_side', 150)->nullable();
            $table->string('accountcode', 250)->nullable();
            $table->string('answer_stamp', 150)->nullable();
            $table->string('sip_hangup_disposition', 250)->nullable();
            $table->string('pdd_ms', 150)->nullable();
            $table->string('rtp_audio_in_mos', 150)->nullable();
            $table->string('tta', 250)->nullable();
            $table->boolean('status')->default(true);
            $table->integer('created_by')->default(0);
            $table->dateTime('created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_CUSTOMER_CALL_TRACKING');
    }
};
