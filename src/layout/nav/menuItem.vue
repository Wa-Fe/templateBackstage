<!--
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-06-24 11:46:30
 * @LastEditTime: 2022-06-24 17:21:14
 * @LastEditors: Wa_Fe
-->
<template>
  <div>
    <template v-for="(item, index) in data">
      <!-- 因为有子集和无子集渲染html标签不一样，所以要分为两种情况
           情况一：有子集的情况：                         -->
      <el-submenu
        :key="index"
        :index="item.path"
        :class="{'avtiveStyle':activePath == item.path}"
        v-if="item.children && item.children.length > 0"
      >
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
        <MenuItem :data="item.children"></MenuItem>
      </el-submenu>
      <!-- 情况二：没子集的情况： -->
      <el-menu-item :key="index" v-else :index="item.path" :class="{'avtiveStyle':activePath == item.path}">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  components: {},
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activePath:this.$route.path
    };
  },
  created() {},
  mounted() {
  },
  watch: {
  },
  computed: {},
  methods: {
    changePath(path) {
      this.activePath = path
      this.$router.push({
        path:path
      })
    },
  },
};
</script>
<style lang="scss" scoped>
.avtiveStyle{
   background: rgba(255, 62, 62, 0.1);
}
</style>
<style>
.el-menu-item:focus{
   background: rgba(255, 62, 62, 0.1);
}
</style>