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
    border-radius: 10px;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 99px;
    background-color: #cccccc;
  }
}

/* Thank you, hilanmiao. */

.v-app-bar {
  -webkit-user-select: none;
}
</style>