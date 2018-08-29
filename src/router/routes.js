import HomePage from '@/pages/homepage/HomePage'
import CompanyPage from '@/pages/companypage/CompanyPage'

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
  }
]

export default routes
