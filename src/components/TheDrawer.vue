<template>
  <div>
    <template v-if="$vuetify.breakpoint.mobile">
      <v-navigation-drawer v-model="$store.state.openDrawer" fixed temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" color="primary">
            <v-list-item
              v-for="i in menuItemsPortrait"
              :key="i.name"
              :to="i.to"
              @click="onClickItem(i)"
            >
              <v-list-item-icon>
                <v-icon>{{ i.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ i.name }}</v-list-item-title>
            </v-list-item>
            <v-list-item v-for="i in menuItems" :key="i.name" :to="i.to">
              <v-list-item-icon>
                <v-icon>{{ i.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ i.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </template>
    <template v-else>
      <v-navigation-drawer floating>
        <v-list nav dense>
          <v-list-item-group v-model="group" color="primary">
            <v-list-item v-for="i in menuItems" :key="i.name" :to="i.to">
              <v-list-item-icon>
                <v-icon>{{ i.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ i.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
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
      {
        name: "Login",
        icon: "$mdiAccountCircleOutline"
      },
      { name: "Documentation", to: "/doc", icon: "$mdiFileDocumentOutline" }
    ]
  }),
  methods: {
    onClickItem(i: any) {
      // FIXME: logged in case
      if (i.name === "Login") this.$router.push("/login");
    }
  }
});
</script>
