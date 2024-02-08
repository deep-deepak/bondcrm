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
        Schema::create('CRM_user_permission_branches', function (Blueprint $table) {
            $table->integer('user_id')->index('FK_UPB_user_id');
            $table->integer('branch_id')->index('FK_UPB_branch_id');
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
        Schema::dropIfExists('CRM_user_permission_branches');
    }
};
