<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ViewController extends Controller
{
    public function newSpeninding()
    {
        return Inertia::render('Spending/Forms/Create');
    }
}
