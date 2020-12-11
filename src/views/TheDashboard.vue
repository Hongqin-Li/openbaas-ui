<template>
  <v-container :class="{ 'pa-0': $vuetify.breakpoint.mobile }">
    <v-row no-gutters>
      <v-col
        v-if="!$vuetify.breakpoint.mobile"
        :cols="$vuetify.breakpoint.mobile ? 'auto' : '3'"
        style="position: sticky; top: 76px; max-height: calc(100vh - 90px)"
      >
        <TheDrawer />
      </v-col>
      <v-col :cols="$vuetify.breakpoint.mobile ? 12 : 9">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import TheDrawer from "@/components/TheDrawer.vue";
import Vue from "vue";

export default Vue.extend({
  components: { TheDrawer }
});
</script>
