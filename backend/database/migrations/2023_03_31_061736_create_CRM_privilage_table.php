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
        Schema::create('CRM_privilage', function (Blueprint $table) {
            $table->bigIncrements('privilage_id');
            $table->unsignedBigInteger('module_id')->index('bdcrm_privilage_module_id_index');
            $table->enum('add', ['0', '1']);
            $table->enum('edit', ['0', '1']);
            $table->enum('view', ['0', '1']);
            $table->enum('delete', ['0', '1']);
            $table->string('type', 30)->default('default');
            $table->unsignedBigInteger('user_id')->index('bdcrm_privilage_user_id_index');
            $table->string('branch_id');
            $table->integer('created_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_privilage');
    }
};
