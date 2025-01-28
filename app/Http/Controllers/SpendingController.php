<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Spendings;

class SpendingController extends Controller
{

    public function getSpendings()
    {
        $userID = Auth::id();
        $spendings = Spendings::where('userID', $userID)
        ->get();
        return response()->json($spendings);
    }

    public function postNewSpending(Request $request)
    {
        $userID = Auth::id();
        // $request->amount = (double)$request->amount;
        $request->validate([
            'amount'=>'required|numeric',
            'description' => 'nullable|string|max:255',
        ]); 
        $time = now()->format('Y-m-d H:i:s');
        Spendings::create([
            'userID' => $userID,
            'amount' => $request->amount,
            'description' => $request->description,
            'entered_on' => $time,
            ]);

        return response()->json([
            'status' => 'success',
            'message' => 'saved successfully'
        ]);
    }

    public function editSpending($spendingID)
    {
    }

    public function deleteSpending($spendingID)
    {
        $spending = Spendings::where('id', $spendingID)
        ->first();
        $spending->delete();
        return response()->json([
            'status' => "success",
            'message' => "entry deleted successfully"
        ]);
    }
}
