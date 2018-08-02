import axios from "axios";
import ApiService from "./api.service";

class OrderService extends ApiService {

  products = [];
  error = [];

  getAll() {
    return new Promise((resolve,reject)=> {
      axios
      .get(this.base + '/orders' )
      .then(response => {
        this.orders = response.data;
        resolve(this.orders);
      })
      .catch(errors => {
        this.errors.push(errors);
        reject(this.errors);
      });
    });
  }

  store(order) {
    return new Promise((resolve,reject)=> {
      axios
      .post(this.base + '/orders', order)
      .then(response => {
        if(response.status !== 201) {
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

}

export default new OrderService();
