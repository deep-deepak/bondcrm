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
        Schema::create('CRM_group_permissions', function (Blueprint $table) {
            $table->integer('group_id')->index('FK_GP_group_id');
            $table->integer('perm_id')->index('FK_GP_perm_id');
            $table->string('branch_id', 150)->nullable();
            $table->integer('status')->default(1)->comment('0 - Inactive, 1 - active');
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
        Schema::dropIfExists('CRM_group_permissions');
    }
};
