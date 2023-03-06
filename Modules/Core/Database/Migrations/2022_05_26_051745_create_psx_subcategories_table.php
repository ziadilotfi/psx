<?php

use Carbon\Carbon;
use Modules\Core\Entities\Module;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // add in module table for authorization with policy
//        $module = new Module();
//        $module->title = 'subcategories';
//        $module->added_date = Carbon::now();
//        $module->added_user_id = '1';
//        $module->save();

        Schema::create('psx_subcategories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('category_id')->constrained('psx_categories')->onDelete('cascade');
            $table->smallInteger('ordering')->nullable();
            $table->boolean('status')->default(1);
            $table->timestamp('added_date');
            $table->foreignId('added_user_id');
            $table->timestamp('updated_date')->nullable();
            $table->foreignId('updated_user_id')->nullable();
            $table->smallInteger('updated_flag')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('psx_subcategories');
    }
};