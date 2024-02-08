<?php

namespace App\Http\Resources;

use App\Traits\Hash;
use App\Traits\Helper;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CustomerCollection extends ResourceCollection
{
    use Hash, Helper;
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        $data = [
            'id' => $this->encode($this->collection->get('CUSTOMER_ID')),
            'sno' => $this->collection->get('CUSTOMER_ID'),
            'name' => $this->collection->get('CUSTOMER_NAME'),
            'address' => $this->collection->get('CUSTOMER_ADDRESS'),
            'postal_code' => $this->collection->get('POSTALCODE'),
            'email' => $this->collection->get('EMAIL'),
            'phone' => $this->collection->get('PHONE'),
            'mobile' => $this->collection->get('MOBILE'),
            'language' => $this->collection->get('LANGUAGE'),
            'source_type' => $this->collection->get('SOURCE_TYPE'),
            'status_reason' => $this->collection->get('STAT_REASON'),
            'notes' => $this->collection->get('CUST_NOTES'),
            'is_secondary_name' => boolval($this->collection->get('SECONDARY_CLIENT')),
            'secondary_name' => $this->collection->get('SECONDARY_NAME'),
            'qbo_id' => $this->encode($this->collection->get('QUICKBOOKS_CUST_ID')),
            'status' => $this->collection->get('CUST_STATUS'),
            'updated_by' => $this->encode($this->collection->get('UPDATE_BY')),
            'created_at' => $this->validateDate($this->collection->get('CREATE_DATE')),
            'updated_at' => $this->validateDate($this->collection->get('UPDATE_DATE')),
        ];
        if($this->collection->get('branch')) {
            $data['branch'] = new BranchCollection($this->collection->get('branch'));
        } else {
            $data['branch'] = $this->encode($this->collection->get('BRANCH_ID'));
        }
        if($this->collection->get('service')) {
            $data['service'] = new ServiceCollection($this->collection->get('service'));
        } else {
            $data['service'] = $this->encode($this->collection->get('SERV_ID'));
        }
        if($this->collection->get('job_status')) {
            $data['job_status'] = new StatusCollection($this->collection->get('job_status'));
        } else {
            $data['job_status'] = $this->encode($this->collection->get('STAT_ID'));
        }
        if($this->collection->get('lead_source')) {
            $data['lead_source'] = $this->collection->get('lead_source');
        }
        if($this->collection->get('created_by')) {
            $data['created_by'] = new UserCollection($this->collection->get('created_by'));
        } else {
            $data['created_by'] = $this->encode($this->collection->get('CREATE_BY'));
        }
        return $data;
    }
}
