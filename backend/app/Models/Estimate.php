<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Estimate extends Model
{
    use HasFactory;

    protected $table = "CRM_CUSTOMER_ESTIMATE";

    protected $primaryKey = "ESTIMATE_ID";

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'CUSTOMER_ID', 'CUSTOMER_ID')->with(['branch']);
    }

    public function representative()
    {
        return $this->belongsTo(User::class, 'USER_ID', 'USER_ID');
    }

    public function service()
    {
        return $this->belongsTo(Service::class, 'SERV_ID', 'SERV_ID');
    }

    public function jobStatus()
    {
        return $this->belongsTo(Status::class, 'STAT_ID', 'STAT_ID');
    }

    public function insuranceCompany()
    {
        return $this->belongsTo(InsuranceCompany::class, 'INS_COMP_ID', 'INS_COMP_ID');
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'CREATE_BY', 'USER_ID');
    }

    // public function getFilterData(Type $var = null)
    // {
    //     $reportYears = $inputData['reportYears'];
    //     $reportMonths = $inputData['reportMonths'];
    //     $column_order = $inputData['column_order'];
    //     $column_search = $inputData['column_search'];
    //     $order = $inputData['order'];
    //     $start = $inputData['start'];
    //     $limit = $inputData['limit'];
    //     $count = $inputData['count'] ? $inputData['count'] : '';
    //     $customer_ids = $inputData['customer_ids'] ? $inputData['customer_ids'] : '';
    //     $date_range = $inputData['date_range'] ? $inputData['date_range'] : '';
    //     $status = $inputData['status'] ? $inputData['status'] : '';
    //     $servicetype = $inputData['servicetype'] ? $inputData['servicetype'] : '';
    //     $rep = $inputData['rep'] ? $inputData['rep'] : '';
    //     $branch = $inputData['branch'] ? $inputData['branch'] : '';
    //     $province = $inputData['province'] ? $inputData['province'] : '';

    //     $network_id = $this->input->post('network_id') ? $this->input->post('network_id') : '';
    //     $datetype = $_POST['datetype'];
    //     $user_id = [$this->session->userdata('current_user_id')];

    //     $permision_branch = [];
    //     if (!$this->super_admin) {
    //         $permision_branch = $this->permissions->get_permission_value('estimate_list', 'branches');
    //     }
    //     $branches = empty($branch) ? $permision_branch : $branch;

    //     if (is_array($province)) {
    //         $query_pro = $this->db->where_in("PROV_ID", $province)->get("CRM_CUSTOMER");
    //         if ($query_pro->num_rows() > 0) {
    //             $data = $query_pro->result_array();
    //             $customer_ids = array_column($data, "CUSTOMER_ID");
    //         }
    //     }

    //     $type = $this->input->post('type');
    //     $end_date = date('Y-m-d');
    //     if ($type == 'mtd') {
    //         $start_date = date('Y-m-d', strtotime("-30 days"));
    //     } elseif ($type == 'ytd') {
    //         $start_date = date('Y-m-d', strtotime("-365 days"));
    //     } elseif ($type == 'ltd') {
    //         $start_date = '2000-01-01';
    //     } elseif ($type != '') {
    //         $date_arr = explode("-", $type);
    //         $start_date = date('Y-m-d', strtotime($date_arr[0]));
    //         $end_date = date('Y-m-d', strtotime($date_arr[1]));
    //     }
    //     if ($start_date) {
    //         $this->db->where("date(CRM_CUSTOMER_ESTIMATE.CREATE_DATE) >=", $start_date);
    //         $this->db->where("date(CRM_CUSTOMER_ESTIMATE.CREATE_DATE) <", $end_date);
    //     }
    //     if ($_POST['filter_year']) {
    //         $this->db->where_in("YEAR(CRM_CUSTOMER_ESTIMATE.CREATE_DATE)", $_POST['filter_year']);
    //     }
    //     if ($date_range) {
    //         $date_range = explode("-", $date_range);
    //         $to = date("Y-m-d", strtotime(trim($date_range[0])));
    //         $from = date('Y-m-d', strtotime(trim($date_range[1])));
    //         if ($datetype == 2) {
    //             $this->db->where("date(CRM_CUSTOMER_ESTIMATE.UPDATE_DATE) >=", $to);
    //             $this->db->where("date(CRM_CUSTOMER_ESTIMATE.UPDATE_DATE) <", $from);
    //         } else if ($datetype == 3) {
    //             $this->db->where("CRM_ASSIGN_JOB.START_DATE >=", $to);
    //             $this->db->where("CRM_ASSIGN_JOB.START_DATE <=", $from);
    //         } else {
    //             $this->db->where("date(CRM_CUSTOMER_ESTIMATE.CREATE_DATE) >=", $to);
    //             $this->db->where("date(CRM_CUSTOMER_ESTIMATE.CREATE_DATE) <", $from);
    //         }
    //     }

    //     if ($status && $status > 0) {
    //         $this->db->where_in("CRM_CUSTOMER_ESTIMATE.STAT_ID", $status);
    //     }
    //     if ($status_name) {
    //         $this->db->where_in("lower(CRM_STATUS.STAT_NAME)", $status_name);
    //     }
    //     if ($servicetype && $servicetype > 0) {
    //         $this->db->where_in("CRM_CUSTOMER_ESTIMATE.SERV_ID", $servicetype);
    //     }
    //     if ($customer_ids) {
    //         $customer_ids = is_array($customer_ids) ? $customer_ids : [$customer_ids];
    //         $this->db->where_in("CRM_CUSTOMER_ESTIMATE.CUSTOMER_ID", $customer_ids);
    //     }
    //     if ($rep) {
    //         $this->db->where_in("CRM_USER.USER_ID", $rep);
    //     }
    //     if ($reportYears) {
    //         $this->db->where('YEAR(CRM_CUSTOMER_ESTIMATE.CREATE_DATE)', $reportYears);
    //     }
    //     if ($reportMonths) {
    //         $this->db->where('MONTH(CRM_CUSTOMER_ESTIMATE.CREATE_DATE)', $reportMonths);
    //     }
    //     if ($network_id) {
    //         $this->db->where("CRM_CUSTOMER.SOURCE_TYPE", "Network Referal")
    //             ->where("CRM_CUSTOMER.SOURCE_NAME", $network_id);
    //     }
    //     $this->db->select("CRM_CUSTOMER_ESTIMATE.ESTIMATE_SNO,
    //     CRM_CUSTOMER_ESTIMATE.ESTIMATE_ID,
    //     CRM_CUSTOMER_ESTIMATE.FINANCE_STATUS,
    //     CRM_CUSTOMER_ESTIMATE.SUB_TOTAL,
    //     CRM_CUSTOMER_ESTIMATE.AFTER_HST_SUB_TOT_VAL,
    //     CRM_CUSTOMER_ESTIMATE.STAT_ID,
    //     CRM_CUSTOMER_ESTIMATE.ADDRESS,
    //     CRM_CUSTOMER_ESTIMATE.UPDATE_DATE,
    //     CRM_CUSTOMER_ESTIMATE.CREATE_DATE,
    //     CRM_CUSTOMER_ESTIMATE.INSPECTION_DATE,
    //     CRM_CUSTOMER_ESTIMATE.PO_CLAIM,
    //     CRM_CUSTOMER.CUSTOMER_NAME,CRM_CUSTOMER.MOBILE,CRM_CUSTOMER.BRANCH_ID,CRM_BRANCH.BRANCH_NAME,CRM_CUSTOMER.CUSTOMER_ID,CRM_USER.USER_NAME,CRM_STATUS.STAT_NAME,CRM_SERVICE.SERV_NAME,CRM_CUSTOMER.PROV_ID,
    //     (SELECT SUM(CRM_PURCHASE_ORDER.TOTAL_AMOUNT) FROM CRM_PURCHASE_ORDER WHERE `CRM_PURCHASE_ORDER`.`ESTIMATE_SNO` = `CRM_CUSTOMER_ESTIMATE`.`ESTIMATE_SNO` AND `CRM_PURCHASE_ORDER`.`CONSTRUCTION_SUPPLIES` = 0 GROUP BY `CRM_PURCHASE_ORDER`.`ESTIMATE_SNO`) as poamount,
    //     (SELECT  `CRM_ASSIGN_JOB`.`START_DATE` FROM  `CRM_ASSIGN_JOB` WHERE CRM_ASSIGN_JOB.ESTIMATE_SNO = `CRM_CUSTOMER_ESTIMATE`.`ESTIMATE_SNO` LIMIT 1) as  START_DATE")
    //         ->from("CRM_CUSTOMER_ESTIMATE")
    //         ->join("CRM_CUSTOMER", "CRM_CUSTOMER.CUSTOMER_ID=CRM_CUSTOMER_ESTIMATE.CUSTOMER_ID")
    //         ->join("CRM_BRANCH", "CRM_CUSTOMER.BRANCH_ID = CRM_BRANCH.BRANCH_ID")
    //         ->join("CRM_USER", "CRM_USER.USER_ID=CRM_CUSTOMER_ESTIMATE.USER_ID")
    //         ->join("CRM_STATUS", "CRM_STATUS.STAT_ID=CRM_CUSTOMER_ESTIMATE.STAT_ID")
    //         ->join("CRM_SERVICE", "CRM_SERVICE.SERV_ID=CRM_CUSTOMER_ESTIMATE.SERV_ID");

    //     if ($_POST['invoice'] == 'yes') {
    //         $this->db->join("CRM_ESTIMATE_INVOICE", "CRM_ESTIMATE_INVOICE.ESTIMATE_ID=CRM_CUSTOMER_ESTIMATE.ESTIMATE_ID", 'right');
    //     }
    //     if ($_POST['invoice'] == 'No') {
    //         $this->db->join("CRM_ESTIMATE_INVOICE", "CRM_ESTIMATE_INVOICE.ESTIMATE_ID=CRM_CUSTOMER_ESTIMATE.ESTIMATE_ID", 'left')
    //             ->where("CRM_ESTIMATE_INVOICE.id", null);
    //     }
    //     $this->db->where("CRM_CUSTOMER_ESTIMATE.COMP_ID", $this->session->userdata('comp_id'))
    //         ->where("CRM_CUSTOMER_ESTIMATE.CUST_EST_STATUS", 1);
    //     if ($branches) {
    //         $this->db->where_in('CRM_CUSTOMER.BRANCH_ID', $branches);
    //     }

    //     $i = 0;
    //     foreach ($column_search as $item) {
    //         if ($_POST['search']['value']) {
    //             if ($i === 0) {
    //                 $this->db->group_start()
    //                     ->like($item, $_POST['search']['value']);
    //             } else {
    //                 $this->db->or_like($item, $_POST['search']['value']);
    //             }
    //             if (count($column_search) - 1 == $i)
    //                 $this->db->group_end();
    //         }
    //         $i++;
    //     }
    //     $this->db->where('`CRM_CUSTOMER_ESTIMATE`.`ESTIMATE_ID` IN ( SELECT MAX(ESTIMATE_ID) FROM CRM_CUSTOMER_ESTIMATE GROUP BY CRM_CUSTOMER_ESTIMATE.ESTIMATE_SNO )');

    //     if (isset($_POST['order']) && $column_order[$_POST['order']['0']['column']] != 'balance') {
    //         $this->db->order_by($column_order[$_POST['order']['0']['column']], $_POST['order']['0']['dir']);
    //     } else if (isset($order)) {
    //         $this->db->order_by(key($order), $order[key($order)]);
    //     }

    //     if ($count) {
    //         return $this->db->get()->num_rows();
    //     } else {
    //         if ($limit > 0) {
    //             $this->db->limit($limit, $start);
    //         }
    //         return $this->db->get()->result_array();
    //     }
    // }
}
