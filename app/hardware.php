<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class hardware extends Model
{
    protected $fillable = [
        'hardwareSN',
        'type',
        'vendor'
    ];
}
