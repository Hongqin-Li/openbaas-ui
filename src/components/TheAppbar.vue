<template>
  <v-app-bar color="primary" dark app>
    <v-btn icon v-show="showNavbtn" @click="onClickNav">
      <v-icon>{{ navIcon }}</v-icon>
    </v-btn>
        <the-function-dialog />

    <v-toolbar-title v-show="showTitle">{{ title }}</v-toolbar-title>
    <v-spacer />

    <v-btn icon v-show="showAddbtn" @click="onClickAdd">
      <v-icon>$mdiPlus</v-icon>
    </v-btn>

    <v-autocomplete
      v-model="select"
      v-show="showSearchbar"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      :class="isSearching ? 'rounded-b-0' : ' rounded-lg'"
      :flat="!isFocused && !isSearching"
      item-text="name"
      item-value="value"
      autocomplete="off"
      class="mx-2 mx-md-4"
      hide-details
      solo-inverted
      dense
      hide-no-data
      :prepend-inner-icon="searchIcon"
      :label="searchHint"
      @focus="onFocus"
      @blur="onBlur"
    >
      <template v-slot:item="{ item }">
        <v-icon small class="mr-4">{{ item.icon }}</v-icon>
        <v-list-item-content v-text="item.name"> </v-list-item-content>
        <v-list-item-action class="my-0">
          <v-list-item-content v-text="item.hint"> </v-list-item-content>
        </v-list-item-action>
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
import { FunctionItem } from "@/store";
import TheFunctionDialog from "./TheFunctionDialog.vue";

interface SearchListItem {
  value: string;
  name: string;
  hint: string;
  icon: string;
}

export default Vue.extend({
  name: "Appbar",
  components: {
    TheFunctionDialog,
  },
  data: () => ({
    loading: false,
    appbarItems: [] as SearchListItem[],
    search: null,
    select: null,
    states: [
      { value: "id", name: "Alabama", hint: "xx", icon: "$mdiFileOutline" }
    ],
    isSearching: false,
    isFocused: false
  }),
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
    select(val) {
      if (this.$route.name === "dashboard/function") {
        this.$store.commit("selectFunction", val);
      }
      console.log("select val", val);
    }
  },
  computed: {
    // FIXME: current no used
    state() {
      switch (this.$route.name) {
        case "dashboard":
        case "dashboard/page":
          return "MainSearch";
        case "login":
          return "OpenPage";
        case "signup":
          return "OpenPage";
        default:
          return "MainSearch";
      }
    },
    items() {
      if (this.$route.name === "dashboard/function") {
        return this.$store.state.functions.map((i: FunctionItem) => {
          return {
            name: i.name,
            value: i.id,
            icon: "$mdiFileOutline",
            hint: i.deployedAt
              ? i.deployedAt === i.updatedAt
                ? "Deployed"
                : "Outdated"
              : "Not deployed"
          };
        });
      } else {
        return this.appbarItems;
      }
    },
    title() {
      switch (this.$route.name) {
        case "dashboard":
        case "dashboard/page":
        case "dashboard/function":
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
        case "dashboard/page":
        case "dashboard/function":
          return "$mdiMenu";
        default:
          return "$mdiArrowLeft";
      }
    },
    searchIcon() {
      if (this.$route.name === "dashboard/function") {
        return "";
      } else return "$mdiMagnify";
    },
    searchHint() {
      if (this.$route.name === "dashboard/function") {
        return "Search for functions";
      } else return "Search for something";
    },
    showNavbtn() {
      if (this.$vuetify.breakpoint.mobile) {
        return true;
      }
      return false;
    },
    showAddbtn() {
      if (this.$route.name === "dashboard/function") {
        return true;
      } else return false;
    },
    showTitle() {
      if (this.$vuetify.breakpoint.mobile) {
        switch (this.$route.name) {
          case "dashboard":
          case "dashboard/page":
          case "dashboard/function":
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
          case "dashboard/page":
          case "dashboard/function":
            return true;
          default:
            return false;
        }
      } else {
        switch (this.$route.name) {
          case "dashboard":
          case "dashboard/page":
          case "dashboard/function":
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
        this.appbarItems = this.states.filter(e => {
          return (
            (e.name || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1
          );
        });
        this.loading = false;
      }, 500);
    },
    onClickUser() {
      this.$router
        .push("/login")
        .then()
        .catch(e => {
          console.warn("route to login again");
        });
    },
    onClickNav() {
      const icon = this.navIcon;
      if (icon === "$mdiMenu") this.$store.commit("toggleDrawer");
      else if (icon === "$mdiArrowLeft") this.$router.back();
      else console.error("Unexpected nav icon");
    },
    onClickAdd() {
      this.$store.commit("addFunctionDialogAction");
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
