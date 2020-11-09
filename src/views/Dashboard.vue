<template>
  <v-container>
    <v-navigation-drawer
      v-model="$store.state.openDrawer"
      absolute
      :permanent="$vuetify.breakpoint.mdAndUp"
      :bottom="!$vuetify.breakpoint.mdAndUp"
    >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="title" style="flex: 0 0 auto;">
            Backend as a Service
          </v-list-item-title>
          <v-btn
            v-if="!$vuetify.breakpoint.mdAndUp"
            icon
            style="flex: 0 0 auto; margin-left: auto;"
          >
            <v-icon>$mdiAccountCircleOutline</v-icon>
          </v-btn>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group v-model="group" color="primary">
          <template v-if="!$vuetify.breakpoint.mdAndUp">
            <v-list-item v-for="i in menuItemsPortrait" :key="i.name">
              <v-list-item-icon>
                <v-icon>{{ i.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ i.name }}</v-list-item-title>
            </v-list-item>
          </template>
          <v-list-item v-for="i in menuItems" :key="i.name">
            <v-list-item-icon>
              <v-icon>{{ i.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ i.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
      { name: "Monitor", to: "", icon: "$mdiMonitor" },
      { name: "Functions", icon: "$mdiFunctionVariant" },
      { name: "Storage", icon: "$mdiDatabaseOutline" },
      { name: "Site", icon: "$mdiApplication" },
      { name: "Settings", icon: "$mdiCogOutline" }
    ],
    menuItemsPortrait: [
      { name: "Documentation", to: "", icon: "$mdiFileDocumentOutline" }
    ]
  })
});
</script>
