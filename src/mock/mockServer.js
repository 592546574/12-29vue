import Mock from 'mockjs'
import category from './category'
import msite from './msite'
Mock.mock("/tagList",{code:0,data:msite.tagList});
