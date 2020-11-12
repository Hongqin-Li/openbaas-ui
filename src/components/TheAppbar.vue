<template>
  <v-app-bar color="primary" dark app>
    <v-btn icon v-show="showNavbtn" @click="onClickNav">
      <v-icon>{{ navIcon }}</v-icon>
    </v-btn>
    <v-toolbar-title v-show="showTitle">{{ title }}</v-toolbar-title>
    <v-spacer />

    <v-autocomplete
      v-model="select"
      v-show="showSearchbar"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      :class="isSearching ? 'rounded-b-0' : ' rounded-lg'"
      :flat="!isFocused && !isSearching"
      autocomplete="off"
      class="mx-2 mx-md-4"
      hide-details
      solo-inverted
      dense
      hide-no-data
      prepend-inner-icon="$mdiMagnify"
      label="What state are you from?"
      @focus="onFocus"
      @blur="onBlur"
    >
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
            <v-icon>$mdiAccountCircleOutline</v-icon>
          </v-btn>
        </template>
        <span>User</span>
      </v-tooltip>

      <v-tooltip open-delay="500" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>$mdiDotsVertical</v-icon>
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
  computed: {
    state() {
      switch (this.$route.name) {
        case "dashboard":
          return "MainSearch";
        case "login":
          return "OpenPage";
        case "signup":
          return "OpenPage";
        default:
          return "MainSearch";
      }
    },
    title() {
      switch (this.$route.name) {
        case "dashboard":
          return "OpenBaaS";
        case "login":
          return "Log in";
        case "signup":
          return "Sign up";
        default:
          return "";
      }
    },
    navIcon() {
      switch (this.$route.name) {
        case "dashboard":
          return "$mdiMenu";
        default:
          return "$mdiArrowLeft";
      }
    },
    showNavbtn() {
      if (this.$vuetify.breakpoint.mobile) {
        return true;
      }
      return false;
    },
    showTitle() {
      if (this.$vuetify.breakpoint.mobile) {
        switch (this.$route.name) {
          case "dashboard":
            return false;
          case "login":
            return true;
          case "signup":
            return true;
          default:
            return false;
        }
      } else return true;
    },
    showSearchbar() {
      if (this.$vuetify.breakpoint.mobile) {
        switch (this.$route.name) {
          case "dashboard":
            return true;
          default:
            return false;
        }
      } else {
        switch (this.$route.name) {
          case "dashboard":
            return true;
          default:
            return false;
        }
      }
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
      this.$router.push("/login");
      console.log(this.$route.name);
    },
    onClickNav() {
      if (this.$route.name === "dashboard") this.$store.commit("toggleDrawer");
      else if (this.$route.name === "login") this.$router.back();
      else this.$router.back();
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
