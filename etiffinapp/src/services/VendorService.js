import axios from "axios";

const VENDOR_API_BASE_URL = "http://localhost:8080/customers";

class VendorServices{

    addMenuOfRestaurant(rid,menu){
        return axios.post(VENDOR_API_BASE_URL+"/addMenu/"+rid,menu);
    }

    registerCenter(vid,center){
        return axios.post(VENDOR_API_BASE_URL+"/addCenter/"+vid,center);
    }

    getAllOrdersRecivedOnCenter(cid){
        return axios.get(VENDOR_API_BASE_URL+"/dashboard/"+cid);
    }

    deliverOrder(oid){
        return axios.get(VENDOR_API_BASE_URL+"/deliver-order/"+oid);
    }

    cancelOrder(oid){
        return axios.get(VENDOR_API_BASE_URL+"/cancelorder/"+oid)
    }

    editMenu(menuDto){
        return axios.put(VENDOR_API_BASE_URL+"/edit-menu/"+menuDto.mid,menuDto);
    }

    getMenuById(mid){
        return axios.get(VENDOR_API_BASE_URL+"/getmenu/"+mid);
    }

}

export default new VendorServices();