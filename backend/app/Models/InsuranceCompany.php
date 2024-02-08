<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InsuranceCompany extends Model
{
    use HasFactory;

    protected $table = "CRM_INSURANCE_COMPANY";

    protected $primaryKey = "INS_COMP_ID";
}
