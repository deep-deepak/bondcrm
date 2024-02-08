<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeadSource extends Model
{
    use HasFactory;

    protected $table = "CRM_LEAD_SOURCE";

    protected $primaryKey = "LD_SRC_ID";
}
