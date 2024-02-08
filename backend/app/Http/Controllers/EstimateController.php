<?php

namespace App\Http\Controllers;

use App\Http\Resources\EstimateCollection;
use App\Models\Estimate;
use App\Traits\Helper;
use App\Traits\Model;
use Carbon\Carbon;
use Illuminate\Http\Request;

class EstimateController extends Controller
{
    use Helper, Model;

    protected $column_search = array('CRM_CUSTOMER_ESTIMATE.ESTIMATE_SNO', 'CRM_CUSTOMER.CUSTOMER_NAME', 'CRM_USER.USER_NAME', 'BRANCH_NAME', 'CRM_CUSTOMER_ESTIMATE.ADDRESS', 'CRM_CUSTOMER.MOBILE', 'CRM_STATUS.STAT_NAME', 'CRM_SERVICE.SERV_NAME', 'CRM_CUSTOMER_ESTIMATE.UPDATE_DATE', 'AFTER_HST_SUB_TOT_VAL', 'SUB_TOTAL', 'PO_CLAIM', 'CRM_CUSTOMER_ESTIMATE.CREATE_DATE', 'FINANCE_STATUS');
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // dd($request->all());
        $search_columns = self::$ESTIMATE_SEARCH_COLUMNS;
        $order_columns = $this->getSortColumn($request);
        // dd($search_columns);
        $query = Estimate::query()
            ->where('COMP_ID', $this->comp_id)
            ->with(['customer', 'representative', 'service', 'jobStatus', 'insuranceCompany', 'createdBy'])
            ->whereHas('customer', function ($q) use ($request, $order_columns) {
                // Branch Filter
                $branchIds = collect($request->get('branch', []))->map(function ($id) {
                    return $this->decode($id);
                })->filter();
                // dd($q, $branchIds->toArray());
                if ($branchIds->count()) {
                    $q->whereIn('BRANCH_ID', $branchIds->toArray());
                }
                // Province Filter
                $provinceIds = collect($request->get('province', []))->map(function ($id) {
                    return $this->decode($id);
                })->filter();
                if ($provinceIds->count()) {
                    $q->whereIn('PROV_ID', $provinceIds->toArray());
                }
                if($search = $request->get('q')) {
                    $q->where(function ($query) use ($search) {
                        $query->orWhere('CUSTOMER_NAME', 'like', "%{$search}%");
                    });
                }
                list($column, $direction, $order_column) = $order_columns;
                if($order_column == 'customer_name') {
                    $q->orderBy('CUSTOMER_NAME', $direction);
                }
            });

        // Filter Date Range With Date Type
        if ($request->get('date_range')) {
            list($from, $to) = explode("-", $request->get('date_range', ""));
            $from = Carbon::create(trim($from));
            $to = Carbon::create(trim($to) ? trim($to) : $from);
            $date_type = $request->get('date_type', 0);
            if ($date_type == 2) {
                $query->whereDate("UPDATE_DATE", '>=', $to);
                $query->whereDate("UPDATE_DATE", '<', $from);
            } elseif ($date_type == 3) {
                $query->whereDate("JOB_START_DATE", '>=', $to)
                    ->whereDate("JOB_START_DATE", '<=', $from);
            } else {
                $query->whereDate("CREATE_DATE", '>=', $to);
                $query->whereDate("CREATE_DATE", '<', $from);
            }
        }
        
        // Search Filter
        if ($search = $request->get('q', '')) {
            $query->where(function ($q) use ($search, $search_columns) {
                foreach ($search_columns as $value) {
                    $values = collect(explode('.', $value));
                    if($values->count() == 1) {
                        $q->orWhere($value, 'like', "%{$search}%");
                    }
                }
            });
        }

        // Filter Year
        $years = collect($request->get('year', [date('Y')]))->filter();
        $years = $years->count() ? $years : collect([date('Y')]);
        $year_ques = $this->getNumberOfValue($years->count());
        $query->whereRaw('YEAR(CREATE_DATE) IN (' . $year_ques . ')', $years->toArray());

        // Filter Job Status
        if ($request->get('job_status')) {
            $statusIds = collect($request->get('job_status', []))->map(function ($id) {
                return $this->decode($id);
            })->filter();
            if ($statusIds->count()) {
                $query->whereIn('STAT_ID', $statusIds->toArray());
            }
        }

        // Filter Service
        if ($request->get('service')) {
            $services = collect($request->get('service', []))->map(function ($id) {
                return $this->decode($id);
            })->filter();
            if ($services->count()) {
                $query->whereIn('SERV_ID', $services->toArray());
            }
        }

        // Filter Branch
        if ($request->get('representative')) {
            $representatives = collect($request->get('representative', []))->map(function ($id) {
                return $this->decode($id);
            })->filter();
            if ($representatives->count()) {
                $query->whereIn('USER_ID', $representatives->toArray());
            }
        }

        // Inspection Check
        $inspection = $request->get('inspection_type', "");
        if ($inspection == 'yes') {
            $query->where("INSPECTION_DATE", '!=', '');
        } elseif ($inspection == 'no') {
            $query->where("INSPECTION_DATE", null);
        }

        // Invoice Check
        $invoice = $request->get('invoice_type', "");
        if ($invoice == 'yes') {
            $query->where("INVOICE_COUNT", '>', 0);
        }
        if ($invoice == 'no') {
            $query->where("INVOICE_COUNT", 0);
        }

        // Order By Column Code
        list($column, $direction) = $order_columns;
        $columns = collect(explode('.', $column));
        if($columns->count() == 1) {
            $query->orderBy($column, $direction);
        }

        $count = $query->count();
        $estimates = $query->limit($request->get('limit', 25))
            ->offset($request->get('start', 0))
            ->get()->map(function ($estimate) {
                return new EstimateCollection($estimate->toArray());
            });
        return response()->json([
            'count' => $count,
            'data' => $estimates
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //          "date_range" => null
        //   "date_type" => null
        //   "year" => array:1 [▶]
        //   "invoice_type" => null
        //   "inspection_type" => null
        //   "start" => "0"
        //   "limit" => "25"
        //   "q" => null
        //   "sort" => array:2 [▶]
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
    public function show(Estimate $estimate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Estimate $estimate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Estimate $estimate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Estimate $estimate)
    {
        //
    }
}
