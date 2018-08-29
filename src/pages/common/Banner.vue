<template>
  <el-container>
    <div
        class="image"
        :style="{
          background: 'url(' + imgSrc + ') no-repeat',
          backgroundPosition: 'center 20%',
          backgroundSize: '100%'}"
          >
      </div>
  </el-container>
</template>

<script>
export default {
  name: 'CommonBanner',
  props: {
    imgSrc: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.image {
  height: 25rem;
  width: 100%;
}
</style>
