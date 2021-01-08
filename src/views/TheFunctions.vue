<template>
  <v-container :class="{ 'pa-0': $vuetify.breakpoint.mobile }">
    <v-card elevation="6" rounded outlined>
      <v-row no-gutters style="flex-wrap: nowrap;">
        <v-col cols="9" style="position: relative;">
          <MonacoEditor
            v-if="thisFunctionIdx >= 0"
            v-model="functions[thisFunctionIdx].code"
            :options="mainOptions"
            language="javascript"
            class="my-editor"
            :style="{ height: landscapeHeight, 'border-radius': 'inherit' }"
          />
          <MonacoEditor
            v-else
            v-model="tmpFunction.code"
            :options="mainOptions"
            language="javascript"
            class="my-editor"
            :style="{ height: landscapeHeight, 'border-radius': 'inherit' }"
          />
          <v-speed-dial absolute top right direction="left" v-model="fab">
            <template v-slot:activator>
              <v-btn
                small
                v-model="fab"
                color="white"
                fab
                depressed
                elevation="0"
                :style="{
                  border: fab
                    ? 'none'
                    : '1px solid rgba(0, 0, 0, .12) !important'
                }"
              >
                <v-icon v-if="fab">
                  $mdiClose
                </v-icon>
                <v-icon v-else>
                  $mdiDotsVertical
                </v-icon>
              </v-btn>
            </template>
            <v-btn fab dark small color="green">
              <v-icon>$mdiShare</v-icon>
            </v-btn>
            <v-btn fab dark small color="indigo">
              <v-icon>$mdiLinkVariant</v-icon>
            </v-btn>
            <v-btn fab dark small color="red">
              <v-icon>$mdiCloudUploadOutline</v-icon>
            </v-btn>
          </v-speed-dial>
        </v-col>
        <v-divider vertical />
        <v-col
          cols="3"
          class="d-flex flex-column no-scrollbar"
          :style="{ height: landscapeHeight, overflow: 'hidden auto' }"
        >
          <v-select
            :items="methodItems"
            v-model="requestMethod"
            solo
            dense
            style="border-top: none;"
            class="my-select"
          ></v-select>
          <v-divider></v-divider>

          <v-list dense class="my-list py-0">
            <v-list-group no-action class="my-list-group">
              <template v-slot:activator>
                <v-list-item-content>
                  Headers
                </v-list-item-content>
              </template>

              <v-list-item
                dense
                v-for="(p, i) in headerKeys"
                :key="i"
                class="pl-2 pr-1"
              >
                <v-row no-gutters dense>
                  <v-col cols="4">
                    <input class="my-input" v-model="p.key" label="Key" />
                  </v-col>
                  <v-col
                    cols="2"
                    style="display: flex; align-items: center; justify-content: center;"
                  >
                    =
                  </v-col>
                  <v-col cols="4">
                    <input class="my-input" v-model="p.value" />
                  </v-col>
                  <v-col
                    cols="2"
                    style="display: flex; align-items: center; justify-content: center;"
                  >
                    <v-btn
                      v-if="i === headerKeys.length - 1"
                      small
                      icon
                      @click="handleAddHeader"
                    >
                      <v-icon small>$mdiPlus</v-icon> </v-btn
                    ><v-btn v-else small icon @click="handleDeleteHeader(i)">
                      <v-icon small>$mdiTrashCanOutline</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item>
            </v-list-group>
          </v-list>
          <v-divider></v-divider>

          <v-card-text class="px-3 py-1 text-subtitle-1">
            Params
          </v-card-text>

          <v-divider></v-divider>

          <div class="pa-2">
            <MonacoEditor
              class="my-monaco"
              v-model="requestParams"
              :options="lightOption"
              language="json"
              :style="{ height: '10em' }"
            />
          </div>

          <v-divider></v-divider>

          <v-card-actions style="margin-top: auto;">
            <v-btn block depressed color="primary">
              Start Debug
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import MonacoEditor from "vue-monaco";

export default {
  components: {
    MonacoEditor
  },
  data: () => ({
    landscapeHeight: "calc(100vh - 150px)",

    mainOptions: {
      theme: "vs-dark",

      minimap: {
        enabled: false
      },
      overviewRulerBorder: false,
      hideCursorInOverviewRuler: true,
      scrollBeyondLastLine: false,
      scrollbar: {
        useShadows: false,
        vertical: "hidden",
        horizontal: "hidden"
      }
    },
    lightOption: {
      minimap: {
        enabled: false
      },
      // See: https://stackoverflow.com/questions/53448735/is-there-a-way-to-completely-hide-the-gutter-of-monaco-editor
      lineNumbers: "off",
      glyphMargin: false,
      folding: false,
      lineDecorationsWidth: 0,
      lineNumbersMinChars: 0,

      overviewRulerBorder: false,
      hideCursorInOverviewRuler: true,
      scrollBeyondLastLine: false,
      scrollbar: {
        useShadows: false,
        vertical: "hidden",
        horizontal: "hidden"
      }
    },
    fab: false,
    thisFunctionIdx: 0,
    functions: [{ id: "", name: "", updatedAt: "", deployedAt: "", code: "" }],
    tmpFunction: { code: "" },

    // debug request
    methodItems: ["GET", "POST", "PUT", "DELETE"],
    requestMethod: "POST",
    requestParams: "{}",
    headerKeys: [
      { key: "k", value: "v" },
      { key: "", value: "" }
    ]
  }),
  watch: {
    functionCode(newValue, oldValue) {
      // console.log(newValue);
    },
    "$store.state.addFunctionAction": (newValue, oldValue) => {
      console.log("observe add function store", newValue);
    }
  },
  methods: {
    handleAddHeader() {
      this.headerKeys.push({ key: "", value: "" });
    },
    handleDeleteHeader(i) {
      this.headerKeys.splice(i, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin no-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
}

.no-scrollbar {
  @include no-scrollbar();
}

.my-monaco ::v-deep .decorationsOverviewRuler {
  display: none;
}
.my-select ::v-deep > div > div:first-child {
  box-shadow: none !important;
  background: transparent !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 0;
}

.my-list,
.my-list ::v-deep div {
  background-color: transparent !important;
}

.my-input {
  padding: 0.1em 0.3em;
  width: 100%;
  border-radius: 0.3em;
  border: 1px solid rgba(0, 0, 0, 0.12);
  outline: none;
}
.my-list-group ::v-deep > div.v-list-group__header {
  padding: 0 10px;
}
.my-editor ::v-deep > div > div > div.margin {
  background-color: transparent !important;
}
.my-editor ::v-deep > div {
  background-color: transparent !important;
}
</style>
