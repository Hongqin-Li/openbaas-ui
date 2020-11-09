import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";
import { icons } from "./icons";
Vue.use(Vuetify);

export default new Vuetify({
  icons,
  breakpoint: {
    mobileBreakpoint: "sm" // This is equivalent to a value of 960
  },
  theme: {
    themes: {
      light: {
        primary: colors.indigo.darken1,
        secondary: colors.red.lighten1,
        accent: colors.indigo.base
      }
    }
  }
});
