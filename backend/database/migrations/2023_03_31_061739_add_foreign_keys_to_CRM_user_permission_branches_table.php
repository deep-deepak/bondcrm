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
        Schema::table('CRM_user_permission_branches', function (Blueprint $table) {
            $table->foreign(['branch_id'], 'FK_UPB_branch_id')->references(['BRANCH_ID'])->on('CRM_BRANCH')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['user_id'], 'FK_UPB_user_id')->references(['USER_ID'])->on('CRM_USER')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('CRM_user_permission_branches', function (Blueprint $table) {
            $table->dropForeign('FK_UPB_branch_id');
            $table->dropForeign('FK_UPB_user_id');
        });
    }
};
