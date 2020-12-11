<template>
  <v-app>
    <TheAppbar />
    <TheDrawer v-if="$vuetify.breakpoint.mobile" />
    <v-main>
      <!-- Provides the application the proper gutter -->
      <!-- If using vue-router -->
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import TheAppbar from "@/components/TheAppbar.vue";
import TheDrawer from "./components/TheDrawer.vue";

export default Vue.extend({
  name: "App",
  components: {
    TheAppbar,
    TheDrawer
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900");
a {
  text-decoration: none;
}
</style>
