import axios from "axios";
import ApiProvider from '@/provider/api.provider';

class VendorProvider extends ApiProvider {
  vendor = null;
  vendors = null;
  error= [];
  
  constructor() {
    super('/vendors');
  }

  find(id) {
    return new Promise((resolve,reject)=> {
      axios
      .get(this.uri + '/' + id)
      .then(response => {
        if(response.status !== 200) {
          reject(this.errors);
        }
        resolve(response.data);
      })
      .catch(errors => {
        console.log(errors)
        this.errors.push(errors);
        reject(this.errors);
      });
    });
  }

  getAll() {
    return new Promise((resolve,reject)=> {
      axios
      .get(this.uri)
      .then(response => {
        this.vendors = response.data;
        resolve(this.vendors);
      })
      .catch(errors => {
        this.errors.push(errors);
        reject(this.errors);
      });
    });
  }

  getTodayVendor() {
    return new Promise((resolve,reject)=> {
      axios
      .get(this.uri)
      .then(response => {
        this.vendor = response.data[0] ? response.data[0] : null;
        resolve(this.vendor);
      })
      .catch(errors => {
        this.errors.push(errors);
        reject(this.errors);
      });
    });
  }

  remove(vendorId) {
    return new Promise((resolve,reject)=> {
      axios
      .delete(this.uri + '/' + vendorId)
      .then(response => {
        status = response.data.status;
        console.log(status);
        if(status != 'success') {
          reject(this.errors);
        }
        resolve(true);
      })
      .catch(errors => {
        this.errors.push(errors);
        reject(this.errors);
      });
    });
  }

}

export default new VendorProvider();
