<template>
  <v-card>
    <MonacoEditor
      class="editor"
      v-model="code"
      :options="options"
      language="javascript"
    />
  </v-card>
</template>

<script>
import MonacoEditor from "vue-monaco";
export default {
  components: {
    MonacoEditor
  },
  data: () => ({
    options: {
      minimap: {
        enabled: false
      },
      overviewRulerBorder: false,
      hideCursorInOverviewRuler: true,
      scrollBeyondLastLine: false,
      scrollbar: {
        vertical: "hidden",
        horizontal: "hidden"
      }
    }
  }),
  methods: {
    onChange(value) {
      console.log(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.editor {
  width: 600px;
  height: 800px;
}
</style>
