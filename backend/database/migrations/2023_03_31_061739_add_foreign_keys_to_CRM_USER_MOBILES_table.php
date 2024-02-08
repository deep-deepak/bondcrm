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
        Schema::table('CRM_USER_MOBILES', function (Blueprint $table) {
            $table->foreign(['user_id'], 'FK_User_Mobiles')->references(['USER_ID'])->on('CRM_USER')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('CRM_USER_MOBILES', function (Blueprint $table) {
            $table->dropForeign('FK_User_Mobiles');
        });
    }
};
