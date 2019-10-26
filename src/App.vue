<template>
  <v-app>
    <v-system-bar window app style="-webkit-app-region: drag">
      <v-icon>mdi-checkbox-blank-circle</v-icon>
      <span>这里暂用作以后的标题栏</span>
      <v-spacer></v-spacer>
    </v-system-bar>
    <v-app-bar app :elevate-on-scroll="true">
      <v-toolbar-title class="headline">
        <span>Toolb Electron</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
    <v-footer
      color="white"
      app
    >
      <span class="black--text">Toolb Electron 开发版本  Electron 版本 <span id="electron-version">；Chromium 版本 <span id="chrome-version"></span></span>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    //
  })
};
</script>

<style type="text/css" lang="scss">
html {
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 5px; /*滚动条宽度*/
    /*height: 2px;  !*滚动条高度*!*/
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    border-radius: 0px;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background-color: #e0e0e0;
  }
}

/* Thank you, hilanmiao. */

.v-app-bar {
  -webkit-user-select: none;
}
</style>