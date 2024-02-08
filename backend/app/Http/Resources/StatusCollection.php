<?php

namespace App\Http\Resources;

use App\Traits\Hash;
use App\Traits\Helper;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class StatusCollection extends ResourceCollection
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
            'id' => $this->encode($this->collection->get('STAT_ID')),
            'name' => $this->collection->get('STAT_NAME'),
            'alias' => $this->collection->get('STAT_ALIAS'),
            'status' => $this->collection->get('STAT_STATUS'),
            'created_by' => $this->encode($this->collection->get('CREATE_BY')),
            'updated_by' => $this->encode($this->collection->get('UPDATE_BY')),
            'created_at' => $this->validateDate($this->collection->get('CREATE_DATE')),
            'updated_at' => $this->validateDate($this->collection->get('UPDATE_DATE')),
        ];
    }
}