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
        Schema::create('CRM_permissions', function (Blueprint $table) {
            $table->integer('perm_id', true);
            $table->string('perm_name', 50);
            $table->string('perm_alias', 100);
            $table->integer('module_id')->index('FK_Module_id');
            $table->tinyInteger('module_order');
            $table->integer('section_id')->index('FK_Section_id');
            $table->tinyInteger('section_order');
            $table->tinyInteger('type')->comment('1 - Admin, 2 - General');
            $table->tinyInteger('status')->default(1)->comment('0 - Inactive, 1 - active');
            $table->integer('created_by')->default(0);
            $table->integer('updated_by')->default(0);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_permissions');
    }
};
