<?php

namespace App\Http\Resources;

use App\Traits\Hash;
use App\Traits\Helper;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CustomerNoteCollection extends ResourceCollection
{
    use Helper, Hash;
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        // dd($this->collection->toArray());
        $data = [
            'id' => $this->encode($this->collection->get('CUST_CONT_HIST_ID')),
            'note' => $this->collection->get('NOTE'),
            'mode' => $this->collection->get('COMM_MODE'),
            'contact_date' => $this->validateDate($this->collection->get('CONTACT_DATE').' 00:00:00'),
            'contact_time' => $this->validateDate(now()->format('Y-m-d').' '. $this->collection->get('CONTACT_TIME')),
            'status' => $this->collection->get('STATUS'),
            'created_by' => $this->encode($this->collection->get('CREATE_BY')),
            'updated_by' => $this->encode($this->collection->get('UPDATE_BY')),
            'created_at' => $this->validateDate($this->collection->get('CREATE_DATE')),
            'updated_at' => $this->validateDate($this->collection->get('UPDATE_DATE')),
        ];
        $representative = $this->collection->get('representative');
        if($representative) {
            $data['representative'] = new UserCollection($representative);
        }
        return $data;
    }
}
