<template>
  <v-app-bar color="white" app>
    <v-app-bar-nav-icon
      v-show="!$vuetify.breakpoint.mdAndUp"
      @click="$store.commit('toggleDrawer')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title v-show="$vuetify.breakpoint.mdAndUp">{{
      title
    }}</v-toolbar-title>
    <v-spacer />

    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      :background-color="!isFocused ? 'grey lighten-3' : undefined"
      :class="isSearching ? 'rounded-b-0' : ' rounded-lg'"
      :flat="!isFocused && !isSearching"
      autocomplete="off"
      class="mx-2 mx-md-4"
      hide-details
      solo
      dense
      hide-no-data
      label="What state are you from?"
      @focus="onFocus"
      @blur="onBlur"
    >
      <template #prepend-inner>
        <v-icon :color="!isFocused ? 'grey' : undefined" class="ml-1 mr-2"
          >mdi-magnify
        </v-icon>
      </template>
    </v-autocomplete>

    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-divider
        vertical
        inset
        class="mx-2"
        style="margin-top: auto; margin-bottom: auto; max-height: 1.5em;"
      />
      <v-btn text>Doc </v-btn>

      <v-tooltip open-delay="500" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn @click="onClickUser" icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account-circle-outline</v-icon>
          </v-btn>
        </template>
        <span>User</span>
      </v-tooltip>

      <v-tooltip open-delay="500" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <span>Settings</span>
      </v-tooltip>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Appbar",
  data: () => ({
    title: "OpenBaas",
    loading: false,
    items: [] as string[],
    search: null,
    select: null,
    states: ["Alabama"],
    isSearching: false,
    isFocused: false
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
    },
    onClickUser() {
      this.$router.push("login");
    },
    onFocus() {
      this.isFocused = true;
    },
    onBlur() {
      this.isFocused = false;
    }
  }
});
</script>
