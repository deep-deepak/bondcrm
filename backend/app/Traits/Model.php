<?php

namespace App\Traits;

use Illuminate\Http\Request;

trait Model
{
    static $CUSTOMER_SEARCH_COLUMNS = [
        'name' => 'dfasdf'
    ];

    static $ESTIMATE_COLUMNS = [
        'sno' => 'ESTIMATE_SNO',
        'customer_name' => 'customer.CUSTOMER_NAME',
        'po_claim' => 'PO_CLAIM',
        'representative' => 'representative.USER_NAME',
        'branch' => 'customer.branch.BRANCH_NAME',
        'address' => 'ADDRESS',
        'mobile' => 'IFNULL(customer.MOBILE, customer.PHONE)',
        'status' => 'jobStatus.STAT_NAME',
        'service' => 'service.SERV_NAME',
        'updated_at' => 'UPDATE_DATE',
        'total_amount' => 'AFTER_HST_SUB_TOT_VAL',
        'net_amount' => 'SUB_TOTAL',
        'net_paid' => 'INVOICE_COLLECTION',
        'discount' => 'INVOICE_DISCOUNT',
        'balance' => 'SUB_TOTAL - INVOICE_COLLECTION - INVOICE_DISCOUNT - INVOICE_BAD_DEBT',
        'po_amount' => 'PO_AMOUNT',
        'created_at' => 'CREATE_DATE',
        'total_cost' => 'PO_AMOUNT + TOTAL_COST',
        'total_hours' => 'TOTAL_HOURS',
        'profit_amount' => 'SUB_TOTAL - (PO_AMOUNT + TOTAL_COST)',
        'profit_percentage' => '(SUB_TOTAL - (PO_AMOUNT + TOTAL_COST) / SUB_TOTAL) * 100',
        'inspection' => 'INSPECTION_DATE',
        'job_start' => 'JOB_START_DATE',
        'Invoice' => 'INVOICE',
        'assigned_to_finance' => 'IS_ASSIGNED'
    ];

    static $ESTIMATE_SEARCH_COLUMNS = [
        'sno' => 'ESTIMATE_SNO',
        'customer_name' => 'customer.CUSTOMER_NAME',
        'po_claim' => 'PO_CLAIM',
        'representative' => 'representative.USER_NAME',
        'branch' => 'customer.branch.BRANCH_NAME',
        'address' => 'ADDRESS',
        'mobile' => 'IFNULL(customer.MOBILE, customer.PHONE)',
        'status' => 'jobStatus.STAT_NAME',
        'service' => 'service.SERV_NAME',
        'updated_at' => 'UPDATE_DATE',
        'total_amount' => 'AFTER_HST_SUB_TOT_VAL',
        'net_amount' => 'SUB_TOTAL',
        'net_paid' => 'INVOICE_COLLECTION',
        'discount' => 'INVOICE_DISCOUNT',
        'po_amount' => 'PO_AMOUNT',
        'created_at' => 'CREATE_DATE',
        'total_hours' => 'TOTAL_HOURS',
        'inspection' => 'INSPECTION_DATE',
        'job_start' => 'JOB_START_DATE',
    ];

    protected function getSortColumn(Request $request, $orderType = 'desc', $orderCol = 'UPDATE_AT')
    {
        $order_columns = self::$ESTIMATE_COLUMNS;
        $sortData = $request->get('sort', []);
        $orderBy = isset($sortData['type']) && $sortData['type'] ? $sortData['type'] : ($orderType ? $orderType : 'desc');
        $orderColumn = isset($sortData['column']) && $sortData['column'] ? $sortData['column'] : ($orderCol ? $orderCol : 'UPDATE_AT');
        return [$order_columns[$orderColumn], $orderBy, $orderColumn];
    }
}
