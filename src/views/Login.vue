<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6" style="padding: 0;">
      <v-card
        :elevation="$vuetify.breakpoint.mobile ? 0 : 16"
        class="mb-4"
        :class="{
          'pa-4': !$vuetify.breakpoint.mobile,
          'mt-8': !$vuetify.breakpoint.mobile
        }"
      >
        <p class="text-h4 mx-4 pt-12 mb-4">
          Welcome Back!
        </p>
        <p class="text-body-1 mx-4 my-4">
          Log in with your username and password that you entered during
          registration.
        </p>
        <v-card-text>
          <v-text-field
            v-model="name"
            label="Your name"
            :disabled="loading"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            :disabled="loading"
            required
          ></v-text-field>

          <v-checkbox v-model="checkbox" :disabled="loading">
            <template v-slot:label>
              <div>Remember me for a week.</div>
            </template>
          </v-checkbox>

          <p class="text-body-1">
            Don't have an account?
            <router-link to="signup">Sign up</router-link>
          </p>
          <p class="text-body-1">
            <router-link to="signup">Forget password?</router-link>
          </p>
        </v-card-text>

        <v-card-text style="text-align:right;">
          <v-fab-transition>
            <v-btn
              :key="state"
              :loading="state == 'loading'"
              fab
              large
              dark
              :fixed="$vuetify.breakpoint.mobile"
              bottom
              right
              color="secondary"
              @click="onClick"
            >
              <v-icon>{{
                state == "invalid" ? "$mdiCircleEditOutline" : "$mdiArrowRight"
              }}</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    name: "",
    password: "",
    loading: false
  }),
  computed: {
    state() {
      if (this.name.length === 0 || this.password.length === 0)
        return "invalid";
      else if (this.loading) return "loading";
      else return "valid";
    }
  },
  methods: {
    onClick() {
      if (this.state == "valid") {
        this.loading = true;
        // TODO log in
      }
    }
  }
});
</script>
