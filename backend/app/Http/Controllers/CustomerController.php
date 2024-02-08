<?php

namespace App\Http\Controllers;

use App\Http\Resources\CustomerCollection;
use App\Models\Customer;
use App\Traits\Hash;
use App\Traits\Model as ModelTrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{
    use ModelTrait, Hash;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // DB::enableQueryLog();
        // dd($request->all());
        $query = Customer::where('COMP_ID', $this->comp_id)
            ->with(['branch', 'service', 'branch', 'jobStatus', 'createdBy']);

        // Filter Date Range
        if ($request->get('date_range')) {
            list($from, $to) = explode("-", $request->get('date_range', ""));
            $from = Carbon::create(trim($from));
            $to = Carbon::create(trim($to) ? trim($to) : $from);
            $query->whereBetween("CREATE_DATE", [$from, $to]);
        }
        if ($request->get('q')) {
        }

        // Filter Year
        $years = collect($request->get('year', [date('Y')]))->filter();
        $years = $years->count() ? $years : collect([date('Y')]);
        $query->whereRaw('YEAR(CREATE_DATE) IN ('.$years->join(',').')');
        
        // Filter Month
        if($request->get('month')) {
            $months = collect($request->get('month', []))->filter();
            $query->whereRaw('MONTH(CREATE_DATE) IN ('.$months->join(',').')');
        }

        // Filter Job Status
        if ($request->get('job_status')) {
            $statusIds = collect($request->get('job_status', []))->map(function($id) {
                return $this->decode($id);
            })->filter();
            if($statusIds->count()) {
                $query->whereIn('STAT_ID', $statusIds->toArray());
            }
        }

        // Filter Service
        if ($request->get('service')) {
            $services = collect($request->get('service', []))->map(function($id) {
                return $this->decode($id);
            })->filter();
            if($services->count()) {
                $query->whereIn('SERV_ID', $services->toArray());
            }
        }

        // Filter Branch
        if ($request->get('branch')) {
            $branches = collect($request->get('branch', []))->map(function($id) {
                return $this->decode($id);
            })->filter();
            if($branches->count()) {
                $query->whereIn('BRANCH_ID', $branches->toArray());
            }
        }
        // dd($query);

        if ($request->get('sort')) {
            // $sortData = $request->get('sort');
            // $query->orderBy()
        } else {
            $query->orderBy('UPDATE_DATE', 'desc');
        }

        $count = $query->count();
        $customers = $query->limit($request->get('limit', 25))
            ->offset($request->get('start', 0))
            ->get()->map(function ($customer) {
                $lead_source = $customer->leadSource();
                // dd($customer);
                $customer->lead_source = $lead_source;
                return new CustomerCollection($customer->toArray());
            });
            // dd(DB::getQueryLog());
        return response()->json([
            'count' => $count,
            'data' => $customers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        //
    }
}
