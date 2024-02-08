<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CustomerNoteController;
use App\Http\Controllers\EstimateController;
use App\Http\Controllers\ProvinceController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResource('branches', BranchController::class);
Route::apiResource('provinces', ProvinceController::class);
Route::apiResource('statuses', StatusController::class);
Route::apiResource('services', ServiceController::class);

Route::apiResource('representatives', UserController::class);
Route::apiResource('estimates', EstimateController::class);

// Customer Routes
Route::apiResource('customers', CustomerController::class);
Route::apiResource('customers.notes', CustomerNoteController::class);

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
