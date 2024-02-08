<?php

namespace App\Models;

use App\Http\Resources\CustomerCollection;
use App\Http\Resources\LeadSourceCollection;
use App\Http\Resources\NetworkCollection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $table = "CRM_CUSTOMER";

    protected $primaryKey = "CUSTOMER_ID";

    public function branch()
    {
        return $this->belongsTo(Branch::class, 'BRANCH_ID', 'BRANCH_ID');
    }

    public function province()
    {
        return $this->belongsTo(Province::class, 'PROV_ID', 'PROV_ID');
    }

    public function building()
    {
        return $this->belongsTo(Building::class, 'BUILD_ID', 'BUILD_ID');
    }

    public function jobStatus()
    {
        return $this->belongsTo(Status::class, 'STAT_ID', 'STAT_ID');
    }

    public function service()
    {
        return $this->belongsTo(Service::class, 'SERV_ID', 'SERV_ID');
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'CREATE_BY', 'USER_ID');
    }

    public function leadSource()
    {
        $lead_source = $this->SOURCE_TYPE;
        $lead_source_id = trim((string) $this->SOURCE_NAME);
        if($lead_source == "Online") {
            $data = LeadSource::where('STATUS', 1)->where('LD_SRC_ID', $lead_source_id)->first();
            if($data) {
                return new LeadSourceCollection($data->toArray());
            }
        } elseif($lead_source == "Customer Referal") {
            $customer = Customer::where('CUST_STATUS', 1)->where('CUSTOMER_ID', $lead_source_id)->first();
            if($customer) {
                return new CustomerCollection($customer->toArray());
            }
        } elseif($lead_source == "Network Referal") {
            $network = Network::where('NETWORK_STATUS', 1)->where('NETWORK_ID', $lead_source_id)->first();
            if($network) {
                return new NetworkCollection($network->toArray());
            }
        } elseif($lead_source == "Customer Other") {
            return "Customer Other";
        }
        return $lead_source;
    }

}


// $yearArr = yearArray();
//     $year = isset($_POST['year']) ? $_POST['year'] : $yearArr;
//     $month = isset($_POST['month']) ? $_POST['month'] : [];
//     $untrack_cust_status = $this->input->post('untrack_cust_status') ? $this->input->post('untrack_cust_status') : "";
//     $network_id = $this->input->post('network_id') ? $this->input->post('network_id') : '';

//     $permision_branch = [];
//     if(!$this->super_admin){
//       if($untrack_cust_status == "untrack_cust"){
//         $permision_branch = $this->permissions->get_permission_value('finance_untrack_qbo_customers_list', 'branches');
//       }else{
//         $permision_branch = $this->permissions->get_permission_value('customers_list', 'branches');
//       }
        
//     }
//     $branch = !empty($branch) ? $branch : $permision_branch;
//     if($service){
//       $service = is_array($service) ? $service : explode(',', $service);
//       $this->db->where_in("CRM_CUSTOMER.SERV_ID",$service);
//     }
//     if(!empty($branch)){
//       $this->db->where_in("CRM_CUSTOMER.BRANCH_ID",$branch);
//     }
//     if($date){
//       $date_range = explode(" - ",$date);
//       $this->db->where("date(CRM_CUSTOMER.CREATE_DATE) >=",date('Y-m-d',strtotime($date_range[0])));
//       $this->db->where("date(CRM_CUSTOMER.CREATE_DATE) <=",date('Y-m-d',strtotime($date_range[1])));
//     }
//     if($name){
//       $this->db->like("CRM_CUSTOMER.CUSTOMER_NAME",$name,"%");
//     }
//     if($status){
//       $this->db->where_in("CRM_CUSTOMER.STAT_ID",$status);
//     }
//     if ($year) {
//       $this->db->where_in('YEAR(CRM_CUSTOMER.CREATE_DATE)', $year);
//     }
//     if ($month) {
//       $this->db->where_in('MONTH(CRM_CUSTOMER.CREATE_DATE)', $month);
//     }
//     if($network_id){
//       $network_id = is_array($network_id) ? $network_id : array_filter(explode(',', $network_id));
//       $this->db->where_in('CRM_NETWORK.NETWORK_ID',$network_id);
//     }
//     if($untrack_cust_status == "untrack_cust"){
//       $this->db->where('CRM_CUSTOMER.QUICKBOOKS_CUST_ID',null);
//       $this->db->where('YEAR(CRM_CUSTOMER.CREATE_DATE) >=', 2020);
//       $this->db->where_in("CRM_CUSTOMER.STAT_ID",[175,177,180]);
//     }
//     $this->db->select('CRM_CUSTOMER.*,CRM_USER.USER_NAME,
//     CRM_SERVICE.SERV_NAME,CRM_BRANCH.BRANCH_NAME,
//     CRM_LEAD_SOURCE.LD_SRC_NAME,CRM_NETWORK.COMP_NAME,STAT_NAME')
//       ->from($this->db->dbprefix('CUSTOMER'))
//       ->join("CRM_USER","CRM_USER.USER_ID=CRM_CUSTOMER.CREATE_BY","LEFT")
//       ->JOIN("CRM_BRANCH","CRM_BRANCH.BRANCH_ID=CRM_CUSTOMER.BRANCH_ID","LEFT")
//       ->JOIN("CRM_SERVICE","CRM_SERVICE.SERV_ID=CRM_CUSTOMER.SERV_ID","LEFT")
//       ->JOIN("CRM_LEAD_SOURCE","CRM_LEAD_SOURCE.LD_SRC_ID=CRM_CUSTOMER.SOURCE_NAME","LEFT")
//       ->JOIN("CRM_NETWORK","CRM_NETWORK.NETWORK_ID=CRM_CUSTOMER.SOURCE_NAME","LEFT")
//       ->JOIN("CRM_STATUS","CRM_STATUS.STAT_ID=CRM_CUSTOMER.STAT_ID","LEFT")
//       ->where('CRM_CUSTOMER.COMP_ID',$this->session->userdata('comp_id'))
//       ->where('CRM_CUSTOMER.UPDATE_DATE <=',date('Y-m-d H:i:s'));
//     $i = 0;
//     if(isset($column_search) && !empty($column_search)){
//       foreach ($column_search as $item)  {
//         if($_POST['search']['value']) {
//           if($i === 0) {
//             $this->db->group_start();
//             $this->db->like($item, $_POST['search']['value']);
//           } else {
//             $this->db->or_like($item, $_POST['search']['value']);
//           }
//           if(count($column_search) - 1 == $i){
//             $this->db->group_end();
//           }
//         }
//         $i++;
//       }
//     }
//     if(isset($column_order[$_POST['order']['0']['column']]) && $column_order[$_POST['order']['0']['column']]) {
//       $this->db->order_by($column_order[$_POST['order']['0']['column']], $_POST['order']['0']['dir']);
//     } else if(isset($order)) {
//       $this->db->order_by(key($order), $order[key($order)]);
//     }
//     if($count != 1){
//       if($limit != -1){
//         $this->db->limit( $limit,$start);
//       }
//     }
//     $res = $this->db->get();
//     return $res->num_rows() > 0 ? $res->result_array() : false;