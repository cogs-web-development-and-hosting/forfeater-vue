<template>
  <div v-if="products">
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm-12">
        <router-link class="nav-link btn btn-warning btn-custom col-white" :to="{ name: 'ProductCreate' }">Create product</router-link>
        <div class="table-responsive">
          <table class="table table-sm table-hover table-bordered table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Rate</th>
                <th scope="col">Votes</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody v-if="products">
              <tr v-for="(product, key) in products" v-bind:key="key">
                <th scope="row">{{ product.id }}</th>
                <td>{{ product.name }}</td>
                <td>{{ product.avgScore }}</td>
                <td>{{ product.rankCount }}</td>
                <td>
                  <router-link
                    class="btn-action d-inline text-warning"
                    :to="{ name: 'ProductShow', params: { vendorId: product.vendorId, id: product.id } }"
                  >
                    <font-awesome-icon icon="list" />
                  </router-link>
                  <router-link
                    class="btn-action d-inline"
                    :to="{ name: 'ProductEdit', params: { vendorId: product.vendorId, id: product.id } }"
                  >
                    <font-awesome-icon icon="edit" />
                  </router-link>
                  <a class="btn-action d-inline text-danger" href @click="remove(product.id, key)">
                    <font-awesome-icon icon="trash" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
import { ProductService } from '@/services/product.service';

export default {
  props: {
    products: {
      required: true
    }
  },
  data() {
    return {
      service: new ProductService()
    };
  },
  methods: {
    remove: async function(productId, key) {
      await this.service.remove(this.$route.params.vendorId, productId);
      this.products.splice(key, 1);
    }
  }
};
</script>
