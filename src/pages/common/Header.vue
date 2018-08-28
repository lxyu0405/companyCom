<template>
  <el-container id="container">
    <el-header class="hidden-xs-only">
      <el-row>
        <el-col :span="2">
          <img class="logo" src="@/assets/images/logo.svg" alt="logo">
        </el-col>
        <el-col :span="18" :offset="4">
          <el-menu
            @select="handleSelect"
            :default-active="activeIndex"
            mode="horizontal"
            text-color="#2c3e50">
            <el-menu-item v-for="(menu, index) in menus" :key="menu.id" :index="index.toString()">
              {{menu.label}}
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-row id="mobile-header" class="hidden-sm-and-up">
        <el-collapse v-model="name" accordion>
          <el-collapse-item name="1">
            <template slot="title">
              <el-row id="mobile-navbar" type="flex" justify="space-between" align="middle">
                <img class="logo" src="@/assets/images/logo.svg" alt="logo">
                <i class="el-icon-menu"></i>
              </el-row>
            </template>
            <el-menu
              @select="handleSelect"
              :default-active="activeIndex"
              mode="vertical"
              style="z-index: 99"
              text-color="#2c3e50">
              <el-menu-item v-for="(menu, index) in menus" :key="menu.id" :index="index.toString()">
                {{menu.label}}
              </el-menu-item>
            </el-menu>
          </el-collapse-item>
        </el-collapse>
      </el-row>
  </el-container>
</template>

<script>
export default {
  name: 'MainHeader',
  data () {
    return {
      activeIndex: '0',
      name: '0',
      menus: [
        {
          id: 'nav1',
          label: '首页',
          path: '/'
        },
        {
          id: 'nav2',
          label: '公司概况',
          path: '/second'
        },
        {
          id: 'nav3',
          label: '产品与服务',
          path: '/'
        },
        {
          id: 'nav4',
          label: '企业文化',
          path: '/'
        },
        {
          id: 'nav5',
          label: '联系我们',
          path: '/'
        }
      ]
    }
  },
  methods: {
    handleSelect (val) {
      this.activeIndex = val
      this.name = '0'
      const path = this.menus[val].path
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.logo{
  width: 4rem;
  height: 4rem;
}
#mobile-header {
  padding: 0 1rem;
}
#mobile-header .logo{
  width: 3rem;
  height: 3rem;
}
#container .el-menu {
  border: none;
}
#mobile-navbar {
  height: 100%;
}
#mobile-navbar i {
  font-size: 1.5rem;
}
</style>
