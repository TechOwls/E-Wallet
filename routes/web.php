<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SpendingController;
use App\Http\Controllers\ViewController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('/spendings/get', [SpendingController::class, 'getSpendings'])->name('spendings.get');
    Route::get('/spendings/new/spending', [ViewController::class, 'newSpeninding'])->name('spending.addForm');
    Route::post('/spendings/add', [SpendingController::class, 'postNewSpending'])->name('spendings.add');
    Route::post('spendings/edit/{spendingsID}', [SpendingController::class, 'editSpending'])->name('spendings.edit');
    Route::delete('/spendings/delete/{spendingsID}', [SpendingController::class, 'deleteSpending'])->name('spendings.delete');
});

require __DIR__.'/auth.php';
