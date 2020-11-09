<template>
  <v-app>
    <appbar />
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <v-fade-transition appear>
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Appbar from "@/components/Appbar.vue";

export default Vue.extend({
  name: "App",

  components: {
    Appbar
  },
  data: () => ({
    title: "OpenBaas",
    loading: false,
    items: [] as string[],
    search: null,
    select: null,
    states: ["Alabama"]
  }),
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    }
  },
  methods: {
    querySelections(v: string) {
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        }) as string[];
        this.loading = false;
      }, 500);
    }
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");
</style>
