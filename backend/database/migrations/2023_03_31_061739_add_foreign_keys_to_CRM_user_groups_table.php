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
        Schema::table('CRM_user_groups', function (Blueprint $table) {
            $table->foreign(['group_id'], 'FK_UG_group_id')->references(['group_id'])->on('CRM_groups')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['user_id'], 'FK_UG_user_id')->references(['USER_ID'])->on('CRM_USER')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('CRM_user_groups', function (Blueprint $table) {
            $table->dropForeign('FK_UG_group_id');
            $table->dropForeign('FK_UG_user_id');
        });
    }
};
