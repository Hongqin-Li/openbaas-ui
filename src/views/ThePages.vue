<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card elevation="4" outlined>
          <v-card-title>
            Upload website
            <v-spacer />
            <v-btn small depressed color="primary" @click="handleUpload"
              >Deploy</v-btn
            >
          </v-card-title>
          <v-card-text>
            <v-file-input
              show-size
              accept=".zip"
              label="Your website zip here"
              v-model="file"
            ></v-file-input>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card elevation="4" outlined>
          <v-card-title>
            Basic Information
            <v-spacer />
            <v-btn small depressed color="primary">Config</v-btn>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="3">Page name</v-col>
              <v-col>{{ pageName }}</v-col>
            </v-row>

            <v-row>
              <v-col cols="3">URL</v-col>
              <v-col
                ><a :href="pageUrl">{{ pageUrl }}</a></v-col
              >
            </v-row>

            <v-row>
              <v-col cols="3">Token</v-col>
              <v-col>{{ pageToken }}</v-col>
              <v-col cols="auto">
                <v-btn-toggle rounded v-model="pageTokenBtnSel">
                  <v-btn small icon>
                    <v-icon small>$mdiEyeOutline</v-icon>
                  </v-btn>
                  <v-btn small icon>
                    <v-icon small>$mdiContentCopy</v-icon>
                  </v-btn>
                  <v-btn small icon>
                    <v-icon small>$mdiRefresh</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card elevation="4" outlined>
          <v-card-title>
            History
          </v-card-title>
          <v-data-table :headers="historyHeaders" :items="historyItems">
            <template v-slot:[`item.status`]="{}">
              <v-btn small depressed> rollback </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { uploadPage, getPageList } from "@/services/page";

export default Vue.extend({
  data: () => ({
    pageName: "helloworld",
    pageUrl: "http://openbaas.com/admin/helloworld",
    pageToken: "c7cebfcd-9513-442a-bdaa-624b741f3a3e",
    showToken: false,
    pageTokenBtnSel: 0,
    file: undefined,

    historyHeaders: [
      { text: "Version", align: "start", sortable: true, value: "version" },
      { text: "File name", align: "", sortable: false, value: "fname" },
      { text: "Upload time", align: "", sortable: true, value: "time" },
      { text: "Status", align: "", sortable: false, value: "status" }
    ],
    historyItems: [
      { version: "3", fname: "index.zip", time: "2020-01-30", status: "x" },
      { version: "2", fname: "index.zip", time: "2020-01-20", status: "x" },
      { version: "1", fname: "index.zip", time: "2020-01-10", status: "x" }
    ]
  }),
  created() {
    this.syncPageList();
  },
  methods: {
    handleUpload() {
      const form = new FormData();
      form.append("index.zip", this.file || "", "index.zip");
      uploadPage(form)
        .then(d => {
          console.log(d);
          this.syncPageList();
        })
        .catch(e => {
          this.$toast.error(e.response.data.error);
        })
        .finally(() => {
          console.log("xx");
        });
    },
    syncPageList() {
      getPageList().then((d: any) => {
        const items = d.data.results;
        this.historyItems = items.map((x: any, i: number) => ({
          version: i + 1,
          fname: x.file.name,
          time: x.updatedAt,
          status: "x"
        }));
        console.log(d);
      });
    }
  }
});
</script>

<style lang="scss">
tbody {
  tr:hover {
    background-color: transparent !important;
  }
}
</style>
