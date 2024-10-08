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
        Schema::create('CRM_ZONE', function (Blueprint $table) {
            $table->integer('zone_id', true);
            $table->char('country_code', 2)->index('idx_country_code');
            $table->string('zone_name', 35)->index('idx_zone_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_ZONE');
    }
};
