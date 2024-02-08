<?php

namespace App\Http\Resources;

use App\Traits\Hash;
use App\Traits\Helper;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class UserCollection extends ResourceCollection
{
    use Hash, Helper;
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->encode($this->collection->get('USER_ID')),
            'username' => $this->collection->get('bondcrm_id'),
            'name' => $this->collection->get('USER_NAME'),
            'email' => $this->collection->get('USER_EMAIL'),
            'mobile' => $this->collection->get('USER_MOBILE'),
            // 'image' => $this->collection->get('USER_PIC'),
            // 'department' => $this->encode($this->collection->get('USER_DEP')),
            // 'role' => $this->encode($this->collection->get('USER_ROLE')),
            // 'branch' => $this->encode($this->collection->get('USER_BRANCH')),
            // 'qbo_id' => $this->encode($this->collection->get('USER_REPORTEE')),
            // 'qbo_id' => $this->encode($this->collection->get('QB_SERV_ID')),
            // 'qbo_id' => $this->encode($this->collection->get('QB_SERV_ID')),
            'qbo_id' => $this->encode($this->collection->get('QB_USER_ID')),
            'is_admin' => boolval($this->collection->get('superAdmin')),
            'is_secondary_admin' => $this->collection->get('secondary_admin') == "Y" ? true : false,
            'status' => $this->collection->get('USER_STATUS'),
            'created_by' => $this->encode($this->collection->get('CREATE_BY')),
            'updated_by' => $this->encode($this->collection->get('UPDATE_BY')),
            'created_at' => $this->validateDate($this->collection->get('CREATE_DATE')),
            'updated_at' => $this->validateDate($this->collection->get('UPDATE_DATE')),
        ];
    }
}
