import ApiProvider from "@/provider/api.provider";

export default class OderProvider extends ApiProvider {

    uri = "/orders";

    getAll() {
        return new Promise((resolve, reject) => {
            this.axios
                .get(this.uri + "/", this.config)
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

    getActive() {
        return new Promise((resolve, reject) => {
            this.axios
                .get(this.uri + "/", {
                    params: {active: 1}
                })
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                        return;
                    }
                    reject("No order in database");
                })
                .catch(errors => {
                    reject(errors);
                });
        });
    }
}
