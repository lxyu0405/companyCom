import 'babel-polyfill'
import Vue from 'vue'
import {
  Row,
  Col,
  Menu,
  MenuItem,
  Container,
  Header,
  Footer,
  Main,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem
} from 'element-ui'
import '@/assets/styles/normalize.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // SEO优化
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // if (to.meta.keywords || to.meta.description) {
  //   const metas = document.getElementsByTagName('meta')
  //   for (let i = 0; i < metas.length; i++) {
  //     const meta = metas[i]
  //     if (meta.name) {
  //       if (meta.name === 'keywords' && to.meta.keywords) {
  //         meta.content = to.meta.keywords
  //       }
  //       if (meta.name === 'description' && to.meta.description) {
  //         meta.content = to.meta.description
  //       }
  //     }
  //   }
  // }
  next()
})

Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Collapse)
Vue.use(CollapseItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
