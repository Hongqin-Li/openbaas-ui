<template>
  <v-dialog v-model="dialog" max-width="400px">
    <v-card>
      <v-card-title>
        <span class="headline">Add A Function</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="name"
                label="Function Name*"
                persistent-hint
                hint="Some fancy name here, whatever you like"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6" md="6">
              <v-text-field
                label="Deno Version*"
                v-model="version"
                hint="The version of Deno"
                persistent-hint
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="description"
                label="Description"
                persistent-hint
                hint="It a good practice to describe your functions in short"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="addFunction">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    dialog: false,
    name: "",
    description: "",
    version: ""
  }),
  watch: {
    "$store.state.addFunctionDialog": function(val) {
      console.log("o");
      this.name = "New Function";
      this.description = "Your description here";
      this.version = "1.6.0";
      this.dialog = true;
    }
  },
  methods: {
    addFunction() {
      this.$store.commit("addFunction", {
        name: this.name,
        version: this.version,
        description: this.description
      });
      this.dialog = false;
    }
  }
});
</script>

<style lang="scss" scoped></style>
