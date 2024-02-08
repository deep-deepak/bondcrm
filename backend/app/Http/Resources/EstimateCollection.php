<?php

namespace App\Http\Resources;

use App\Traits\Hash;
use App\Traits\Helper;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class EstimateCollection extends ResourceCollection
{
    use Helper, Hash;
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        $balance = $this->collection->get('SUB_TOTAL') - $this->collection->get('INVOICE_COLLECTION') - $this->collection->get('INVOICE_DISCOUNT') - $this->collection->get('INVOICE_BAD_DEBT');
        
        $data = [
            'id' => $this->encode($this->collection->get('ESTIMATE_ID')),
            'sno' => $this->collection->get('ESTIMATE_SNO'),
            'area' => $this->collection->get('AREA'),
            'address' => $this->collection->get('ADDRESS'),
            'expected_amount' => $this->collection->get('EXPECTED_AMOUNT'),
            'amount' => $this->collection->get('AMOUNT'),
            'discount' => [
                'percentage' => $this->collection->get('DISCOUNT'),
                'value' => $this->collection->get('DISC_AMOUNT')
            ],
            'profit' => [
                'percentage' => $this->collection->get('PROFIT'),
                'value' => $this->collection->get('PROFIT_VAL')
            ],
            'overhead' => [
                'percentage' => $this->collection->get('OVERHEAD'),
                'value' => $this->collection->get('OVERHEAD_VAL')
            ],
            'taxes' => json_decode($this->collection->get('HST_VALUE', '')),
            'cog_value' => $this->collection->get('COG_VAL'),
            'total' => [
                'after_discount' =>  $this->collection->get('AFTER_DISC_SUB_TOT_VAL'),
                'amount' =>  $this->collection->get('AFTER_HST_SUB_TOT_VAL'),
                'grand' =>  $this->collection->get('GRAND_TOTAL'),
                'additional' =>  $this->collection->get('ADDITIONAL_AMOUNT'),
                'sub_total' =>  $this->collection->get('SUB_TOTAL')
            ],
            'client_amount' => $this->collection->get('CLIENT_AMOUNT'),
            'invoice' => [
                'is_invoice' => boolval($this->collection->get('INVOICE')),
                'amount_per' => $this->collection->get('INVOICE_AMOUNT_PER'),
                'cost' => $this->collection->get('PO_AMOUNT') + $this->collection->get('TOTAL_COST'),
                'create_invoice' => $this->collection->get('CREATE_INVOICE'),
                'hours' => $this->collection->get('TOTAL_HOURS'),
                'date' => $this->validateDate($this->collection->get('INVOICE_DATE')),
                'amount' => $this->collection->get('INVOICE_AMOUNT'),
                'net_paid' => $this->collection->get('INVOICE_COLLECTION'),
                'count' => $this->collection->get('INVOICE_COUNT'),
                'discount' => $this->collection->get('INVOICE_DISCOUNT'),
                'bad_debt' => $this->collection->get('INVOICE_BAD_DEBT'),
            ],
            'balance' => $balance,
            'cog_value' => $this->collection->get('COG_VAL'),
            'note' => $this->collection->get('NOTE'),
            'is_french' => boolval($this->collection->get('FRENCH')),
            'is_line_item' => boolval($this->collection->get('LINE_ITEM')),
            'expired_date' => $this->validateDate($this->collection->get('EXPIRE_DATE')),
            'success' => $this->collection->get('SUCCESS'),
            'expected' => $this->collection->get('EXPECTED_COLLECTION'),
            'is_insurance' => boolval($this->collection->get('INSURANCE')),
            'is_assigned' => boolval($this->collection->get('IS_ASSIGNED')),
            'pdf_name' => $this->collection->get('pdf_name'),
            'po_claim' => $this->collection->get('PO_CLAIM'),
            'notes' => $this->collection->get('NOTES'),
            'building_type' => $this->collection->get('BUILDING_TYPE'),
            'completion_value' => $this->collection->get('complete_val'),
            'on_sale_date' => $this->validateDate($this->collection->get('on_sale_date')),
            'inspection_date' => $this->validateDate($this->collection->get('INSPECTION_DATE')),
            'collection' => [
                'status' => boolval($this->collection->get('COLL_STATUS')),
                'responsibility' => $this->collection->get('COLL_RESPONSIBILITY'),
                'date' => $this->validateDate($this->collection->get('COLLECTION_DATE')),
            ],
            'is_finance' => boolval($this->collection->get('FINANCE_STATUS')),
            'google_review_link' => [
                'is_shared' => boolval($this->collection->get('SENT_GOOGLE_REVIEW_LINK')),
                'description' => $this->collection->get('GOOGLE_LINK_DESCRIPTION'),
            ],
            'quickbooks' => [
                'id' => $this->encode($this->collection->get('QB_EST_ID')),
                'data' => $this->collection->get('QBO_DETAILS'),
            ],
            'is_spotlight' => boolval($this->collection->get('SPOTLIGHT_STATUS')),
            'po_amount' => $this->collection->get('PO_AMOUNT'),
            'work_order_days' => $this->collection->get('WORK_ORDER_DAYS'),
            'job_start_date' => $this->validateDate($this->collection->get('JOB_START_DATE')),
            'scheduler_days' => $this->collection->get('SCHEDULER_DAYS'),
            'is_warrany_certificate' => $this->collection->get('STAT_ID') == 181 ? true : false,
            'status' => $this->collection->get('CUST_EST_STATUS'),
            'updated_by' => $this->encode($this->collection->get('UPDATE_BY')),
            'created_at' => $this->validateDate($this->collection->get('CREATE_DATE')),
            'updated_at' => $this->validateDate($this->collection->get('UPDATE_DATE')),
        ];
        if($this->collection->get('customer')) {
            $data['customer'] = new CustomerCollection($this->collection->get('customer'));
        } else {
            $data['customer'] = $this->encode($this->collection->get('CUSTOMER_ID'));
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
        if($this->collection->get('representative')) {
            $data['representative'] = new UserCollection($this->collection->get('representative'));
        } else {
            $data['representative'] = $this->encode($this->collection->get('USER_ID'));
        }
        if($this->collection->get('insurance_company')) {
            $data['insurance_company'] = $this->collection->get('insurance_company');
        } else {
            $data['insurance_company'] = $this->encode($this->collection->get('INS_COMP_ID'));
        }
        if($this->collection->get('created_by')) {
            $data['created_by'] = new UserCollection($this->collection->get('created_by'));
        } else {
            $data['created_by'] = $this->encode($this->collection->get('CREATE_BY'));
        }
        return $data;
    }
}
