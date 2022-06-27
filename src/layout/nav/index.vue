<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="elMenu"
      text-color="#B0B0B2"
      active-text-color="#000"
      :unique-opened="true"
      ref="elMenu"
      @select="menuSelect"
    >
      <!-- 递归动态菜单 -->
      <MenuItem :data="routers" ref="myItem"></MenuItem>
    </el-menu>
  </div>
</template>

<script>
import MenuItem from "./menuItem.vue";
import { mapState } from "vuex";
import Layout from "@/layout";
import router from "@/router"
export default {
  components: { MenuItem },
  props: {},
  data() {
    return {
      // activeIndex: this.$route.path,
      isCollapse: false,
      defaultActive: "",
      // routers:[
      //   {
      //     name: "shop",
      //     path: "/shop",
      //     icon: "el-icon-star-off",
      //     children: [
      //       {
      //         name: "shopone",
      //         path: "/shopone",
      //         icon: "el-icon-star-off",
      //       },
      //        {
      //         name: "shoptwo",
      //         path: "/shoptwo",
      //         icon: "el-icon-star-off",
      //       },
      //     ],
      //   },
      // ]
    };
  },
  created() {},
  mounted() {
    // console.log(this.routers)
  },

  computed: {
    ...mapState({
      routers: (state) => state.user.menulist
    }),
    // newrouters() {
    // let a =  this.routers.map(item => {
    //     if(item.componenturl == "Layout"){
    //           item.component = Layout;
    //           delete item.componenturl
    //       }
    //       return item
    //   });
    //   router.addRoutes(a)
    //   return a
    // },
    activeIndex() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    menuSelect(e) {
      this.$refs.myItem.changePath(e);
    },
  },
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.activeItemStyle {
  background: #87cefa;
}
.elMenu {
  width: 200px;
  // background-color: orange;
  height: 100vh;
}
</style>
