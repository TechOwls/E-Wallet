<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Spendings extends Model
{
    public $timestamps = false;
    protected $fillable =[
        'userID',
        'description',
        'amount',
        'entered_on',
    ];

    public function users()
    {
        $this->belongsTo(User::class, 'userID');
    }
}
