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
        Schema::table('CRM_permissions', function (Blueprint $table) {
            $table->foreign(['module_id'], 'FK_Modules')->references(['module_id'])->on('CRM_permission_modules')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['module_id'], 'FK_Module_id')->references(['module_id'])->on('CRM_permission_modules')->onUpdate('NO ACTION')->onDelete('NO ACTION');
            $table->foreign(['section_id'], 'FK_Section_id')->references(['section_id'])->on('CRM_permissions_sections')->onUpdate('NO ACTION')->onDelete('NO ACTION');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('CRM_permissions', function (Blueprint $table) {
            $table->dropForeign('FK_Modules');
            $table->dropForeign('FK_Module_id');
            $table->dropForeign('FK_Section_id');
        });
    }
};
