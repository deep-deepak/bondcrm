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
        Schema::table('CRM_group_permissions', function (Blueprint $table) {
            $table->foreign(['group_id'], 'FK_GP_group_id')->references(['group_id'])->on('CRM_groups')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['perm_id'], 'FK_GP_perm_id')->references(['perm_id'])->on('CRM_permissions')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('CRM_group_permissions', function (Blueprint $table) {
            $table->dropForeign('FK_GP_group_id');
            $table->dropForeign('FK_GP_perm_id');
        });
    }
};
