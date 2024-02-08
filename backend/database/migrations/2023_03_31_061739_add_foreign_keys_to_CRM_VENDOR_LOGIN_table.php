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
        Schema::table('CRM_VENDOR_LOGIN', function (Blueprint $table) {
            $table->foreign(['network_id'], 'FK_vendor_login_network')->references(['NETWORK_ID'])->on('CRM_NETWORK')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('CRM_VENDOR_LOGIN', function (Blueprint $table) {
            $table->dropForeign('FK_vendor_login_network');
        });
    }
};
