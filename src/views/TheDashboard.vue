<template>
  <v-container :class="{ 'pa-0': $vuetify.breakpoint.mobile }">
    <v-row no-gutters>
      <v-col :cols="$vuetify.breakpoint.mobile ? 'auto' : '3'">
        <v-navigation-drawer
          v-model="$store.state.openDrawer"
          :absolute="$vuetify.breakpoint.mobile"
          :temporary="$vuetify.breakpoint.mobile"
          floating
        >
          <v-list nav dense>
            <v-list-item-group v-model="group" color="primary">
              <template v-if="!$vuetify.breakpoint.mdAndUp">
                <v-list-item
                  v-for="i in menuItemsPortrait"
                  :key="i.name"
                  :to="i.to"
                >
                  <v-list-item-icon>
                    <v-icon>{{ i.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>{{ i.name }}</v-list-item-title>
                </v-list-item>
              </template>
              <v-list-item v-for="i in menuItems" :key="i.name" :to="i.to">
                <v-list-item-icon>
                  <v-icon>{{ i.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ i.name }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col :cols="$vuetify.breakpoint.mobile ? 12 : 9">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Dashboard",
  components: {},
  computed: {},
  data: () => ({
    group: null,
    menuItems: [
      { name: "Monitor", to: "monitor", icon: "$mdiMonitor" },
      { name: "Functions", to: "functions", icon: "$mdiFunctionVariant" },
      {
        name: "Storage",
        to: "/dashboard/storage",
        icon: "$mdiDatabaseOutline"
      },
      { name: "Pages", to: "/dashboard/pages", icon: "$mdiApplication" },
      { name: "Settings", to: "settings", icon: "$mdiCogOutline" }
    ],
    menuItemsPortrait: [
      { name: "Documentation", to: "/doc", icon: "$mdiFileDocumentOutline" }
    ]
  }),
  methods: {
    onClickUser() {
      this.$router.push("/login");
    }
  }
});
</script>
