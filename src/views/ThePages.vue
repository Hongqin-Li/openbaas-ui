<template>
  <v-container>
    <v-dialog v-model="dialogDelete" max-width="290">
      <v-card>
        <v-card-title class="headline">Remove this page?</v-card-title>
        <v-card-text>
          After deletion, you won't be able to retrieve it. Thus, it's better to
          backup your file before comfirming deletion.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="handleDeletePage(selectedItem)"
            >OK</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col cols="12">
        <v-card elevation="4" outlined>
          <v-card-title>
            Upload Website
            <v-spacer />
            <v-btn
              small
              depressed
              color="primary"
              @click="handleUpload"
              :loading="uploading"
              :disabled="uploading || !file"
              >Upload</v-btn
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
            <template v-slot:[`item.fname`]="{ item }">
              <a :href="item.url">{{ item.fname }}</a>
            </template>
            <template v-slot:[`item.action`]="{ item }">
              <v-btn
                v-if="item.url === pageSourceUrl"
                small
                icon
                style="pointer-events: none;"
              >
                <v-icon small color="green darken-1">$mdiCheckCircle</v-icon>
              </v-btn>
              <v-btn
                v-else
                small
                icon
                :loading="item.deploying"
                :disabled="item.deleting || item.deploying"
                @click="handleDeployPage(item)"
              >
                <v-icon small>$mdiUpload</v-icon>
              </v-btn>

              <v-btn
                small
                icon
                :loading="item.deleting"
                :disabled="item.deleting || item.deploying"
                @click="toDeletePage(item)"
              >
                <v-icon small>$mdiTrashCanOutline</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {
  uploadPage,
  getPageList,
  deployPage,
  deletePage,
  getMyPageUrl
} from "@/services/page";
import dayjs from "dayjs";

interface PageListItem {
  id: string;
  version: number;
  time: string;
  url: string;
  deploying: boolean;
  deleting: boolean;
}

export default Vue.extend({
  data: () => ({
    pageName: "helloworld",
    pageToken: "c7cebfcd-9513-442a-bdaa-624b741f3a3e",
    pageUrl: "",
    pageSourceUrl: "",
    showToken: false,
    pageTokenBtnSel: 0,
    file: undefined,
    uploading: false,
    dialogDelete: false,

    selectedItem: {},

    historyHeaders: [
      { text: "Version", align: "start", sortable: true, value: "version" },
      { text: "File name", align: "", sortable: false, value: "fname" },
      { text: "Upload time", align: "", sortable: true, value: "time" },
      { text: "Actions", align: "", sortable: false, value: "action" }
    ],
    historyItems: [] as PageListItem[]
  }),
  created() {
    this.syncPageInfo();
    this.syncPageList();
  },
  methods: {
    log(item: PageListItem) {
      console.log("log", item.id, item.url, this.pageSourceUrl);
      return 1;
    },
    handleUpload() {
      if (!this.uploading && this.file) {
        this.uploading = true;
        uploadPage(this.file as any)
          .then((d: any) => {
            this.$toast.success("Upload successfullly");
            this.file = undefined;
            this.syncPageList();
          })
          .catch(e => {
            this.$toast.error(e.response.data.error);
          })
          .finally(() => {
            this.uploading = false;
          });
      }
    },
    handleDeployPage(item: PageListItem) {
      if (!item.deploying) {
        item.deploying = true;
        deployPage(item.url)
          .then((resp: any) => {
            this.$toast.success("Deploy successfully");
            console.log("deployPage url", resp.data.result.url);
            this.syncPageInfo();
          })
          .catch(e => {
            this.$toast.error(e.response.data.error);
          })
          .finally(() => {
            item.deploying = false;
          });
      }
    },
    toDeletePage(item: PageListItem) {
      this.selectedItem = item;
      this.dialogDelete = true;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    handleDeletePage(item: PageListItem) {
      if (!item.deleting) {
        this.dialogDelete = false;
        item.deleting = true;
        deletePage(item.id)
          .then(d => {
            console.log(d);
            this.historyItems = this.historyItems.filter(i => i.id !== item.id);
            this.$toast.success("Remove successfully");
          })
          .catch(e => {
            this.$toast.error(e.response.data.error);
          })
          .finally(() => {
            item.deleting = false;
          });
      }
    },
    syncPageInfo() {
      getMyPageUrl()
        .then((d: any) => {
          console.log("getMyPageUrl", d.data);
          this.pageUrl = d.data.result.pageUrl;
          this.pageSourceUrl = d.data.result.pageSourceUrl;
        })
        .catch(e => {
          console.log("syncPageInfo err", e);
        });
    },
    syncPageList() {
      getPageList().then((d: any) => {
        const items = d.data.results;
        this.historyItems = items.map(
          (x: any, i: number) =>
            ({
              version: i + 1,
              id: x.objectId,
              fname: x.fileName,
              time: dayjs(x.updatedAt).format("YYYY-MM-DD"),
              url: x.file.url,
              deploying: false,
              deleting: false
            } as PageListItem)
        );
        console.log("syncPageList", d);
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
