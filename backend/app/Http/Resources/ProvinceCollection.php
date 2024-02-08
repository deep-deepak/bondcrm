<?php

namespace App\Http\Resources;

use App\Traits\Hash;
use App\Traits\Helper;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProvinceCollection extends ResourceCollection
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
            'id' => $this->encode($this->collection->get('PROV_ID')),
            'name' => $this->collection->get('PROV_NAME'),
            'taxes' => json_decode($this->collection->get('TAX_DATA')),
            'status' => $this->collection->get('PROV_STATUS'),
            'created_by' => $this->encode($this->collection->get('CREATE_BY')),
            'updated_by' => $this->encode($this->collection->get('UPDATE_BY')),
            'created_at' => $this->validateDate($this->collection->get('CREATE_DATE')),
            'updated_at' => $this->validateDate($this->collection->get('UPDATE_DATE')),
        ];
    }
}
