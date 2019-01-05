//引入路由组件
import Msite from '../pages/Msite/Msite'
import Login from '../pages/Login/Login'
import Materi from '../pages/Materi/Materi'
import Search from '../pages/Search/Search'
import ShopCart from '../pages/ShopCart/ShopCart'
import Recommend from '../pages/Materi/Recommend/Recommend'
import Baskinasingle from '../pages/Materi/Basinasingle/Basinasingle'
import Home from '../pages/Materi/Home/Home'
import Intelligent from '../pages/Materi/Intelligent/Intelligent'
import Update from '../pages/Materi/Update/Update'


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
    component:Materi,
    children:[
      {
        path:'/materi/recommend',
        component:Recommend,
      },
      {
        path:'/materi/baskinasingle',
        component:Baskinasingle,
      },
      {
        path:'/materi/home',
        component:Home,
      },
      {
        path:'/materi/intelligent',
        component:Intelligent,
      },
      {
        path:'/materi/update',
        component:Update,
      },
      {
        path:'/materi',
        redirect:'recommend'
      },
      {
        path:'',
        redirect:'/materi/recommend'
      }
    ]
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
