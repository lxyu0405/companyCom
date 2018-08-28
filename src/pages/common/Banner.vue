<template>
  <el-carousel id="container" trigger="click" :height="bannerHeight">
    <el-carousel-item v-for="image in images" :key="image.id">
      <!-- <img :src="image.path" :alt="image.title"> -->
      <div
        class="image"
        :style="{
          background: 'url(' + image.path + ') no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100%'
          }"></div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'MainBanner',
  data () {
    return {
      activeIndex: '1',
      images: [
        {
          id: 'banner1',
          path: require('@/assets/images/banner1.jpg'),
          title: 'banner'
        },
        {
          id: 'banner2',
          path: require('@/assets/images/banner2.jpg'),
          title: 'banner'
        },
        {
          id: 'banner3',
          path: require('@/assets/images/banner3.jpg'),
          title: 'banner'
        }
      ]
    }
  },
  computed: {
    bannerHeight () {
      const windowWidth = window.innerWidth
      if (windowWidth <= 700) {
        return '15rem'
      } else {
        return '25rem'
      }
    }
  }

}
</script>

<style scoped>
#container .image{
  width: 100%;
  height: 100%;
}
</style>
