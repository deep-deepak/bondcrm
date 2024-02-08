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
        Schema::create('CRM_WIDGETS', function (Blueprint $table) {
            $table->integer('WIDGET_ID', true);
            $table->string('WIDGET_NAME', 200);
            $table->integer('WIDGET_ORDER');
            $table->string('WIDGET_POSITION', 200);
            $table->string('WIDGET_TAB', 200);
            $table->enum('WIDGET_TYPE', ['static', 'dynamic'])->default('static');
            $table->enum('WIDGET_STATUS', ['Active', 'Inactive']);
            $table->integer('CREATED_BY');
            $table->integer('COMP_ID');
            $table->dateTime('CREATED_AT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('CRM_WIDGETS');
    }
};
