//引入路由组件
import Msite from '../pages/Msite/Msite'
import Login from '../pages/Login/Login'
import Materi from '../pages/Materi/Materi'
import Search from '../pages/Search/Search'
import ShopCart from '../pages/ShopCart/ShopCart'

export default [
  {
    path:'/msite',
    component:Msite
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/materi',
    component:Materi
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  //重定向
  {
    path:'/',
    redirect:'msite'
  }
]
