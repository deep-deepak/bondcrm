<?php

namespace App\Http\Controllers;

use App\Traits\Hash;
use App\Traits\Helper;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests, Hash, Helper;

    protected $comp_id = 44;
}
