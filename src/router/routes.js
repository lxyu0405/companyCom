import HomePage from '@/pages/homepage/HomePage'
import SecondPage from '@/pages/secondpage/Second'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'This is Home page'
    }
  },
  {
    path: '/second',
    name: 'Second',
    component: SecondPage,
    meta: {
      title: 'This is Second page'
    }
  }
]

export default routes
