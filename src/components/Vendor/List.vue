<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Vendors</li>
      </ol>
    </nav>
    <div class="row pt-3">
      <div class="col-sm">
        <h1 class="text-center">Vendor list</h1>
      </div>
    </div>
    <VendorTable :vendors.sync="vendors" />
  </div>
</template>

<script>
import VendorTable from '@/components/Vendor/Table';
import { VendorService } from '@/services/vendor.service';

export default {
  data() {
    return {
      vendors: {},
      service: new VendorService()
    };
  },
  async mounted() {
    this.vendors = await this.service.getAll();
  },
  components: { VendorTable }
};
</script>
