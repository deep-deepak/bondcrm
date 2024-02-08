<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomerNote extends Model
{
    use HasFactory;

    protected $table = "CRM_CUSTOMER_CONTACT_HISTORY";

    protected $primaryKey = "CUST_CONT_HIST_ID";

    public function representative()
    {
        return $this->belongsTo(User::class, 'CREATE_BY', 'USER_ID');
    }

}
