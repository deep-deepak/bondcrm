<?php

namespace App\Http\Controllers;

use App\Http\Resources\CustomerNoteCollection;
use App\Models\CustomerNote;
use Illuminate\Http\Request;

class CustomerNoteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, $customer_id)
    {
        $customer_id = $this->decode($customer_id);

        // dd($customer_id);
        // $column_order = ['', 'USER_NAME', 'NOTE', 'COMM_MODE', 'CONTACT_DATE', 'CONTACT_TIME', 'CRM_CUSTOMER_CONTACT_HISTORY.CREATE_DATE'];
        // $column_search = ['USER_NAME', 'NOTE', 'COMM_MODE', 'CONTACT_DATE', 'CONTACT_TIME', 'CRM_CUSTOMER_CONTACT_HISTORY.CREATE_DATE'];

        $query = CustomerNote::query()
            ->where('COMP_ID', $this->comp_id)
            ->where('CUSTOMER_ID', $customer_id)
            ->with(['representative']);


        if ($request->get('sort')) {
            // $sortData = $request->get('sort');
            // $query->orderBy()
        } else {
            $query->orderBy('UPDATE_DATE', 'desc');
        }

        $count = $query->count();
        $customer_notes = $query->limit($request->get('limit', 25))
            ->offset($request->get('start', 0))
            ->get()->map(function ($customer_note) {
                return new CustomerNoteCollection($customer_note->toArray());
            });

        return response()->json([
            'count' => $count,
            'data' => $customer_notes
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(CustomerNote $customerNote)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CustomerNote $customerNote)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CustomerNote $customerNote)
    {
        //
    }
}
