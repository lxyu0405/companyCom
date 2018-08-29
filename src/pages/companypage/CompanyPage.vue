<template>
  <div>
    <common-banner :imgSrc="imgPath" :imgLabel="imgLabel"></common-banner>
  </div>
</template>

<script>
import CommonBanner from '@/pages/common/Banner'
export default {
  name: 'CompanyPage',
  components: {
    CommonBanner
  },
  data () {
    return {
      imgPath: '/static/img/banner2.jpg',
      imgLabel: '公司概况'
    }
  }
}
</script>
