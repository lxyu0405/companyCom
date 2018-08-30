import HomePage from '@/pages/homepage/HomePage'
import CompanyPage from '@/pages/companypage/CompanyPage'
import ProductPage from '@/pages/productpage/ProductPage'

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
    path: '/company',
    name: 'Company',
    component: CompanyPage,
    meta: {
      title: 'This is Company page'
    }
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductPage,
    meta: {
      title: 'This is Product page'
    }
  }
]

export default routes
