import Mock from 'mockjs'
import category from './category'
import shouye_data from './shouye_data'
import fenlei_zhuanqu from './fenlei_zhuanqu'
import cateList from './cateList'
Mock.mock("/tagList",{code:0,data:shouye_data.tagList});
Mock.mock("/focusList",{code:0,data:shouye_data.focusList});
Mock.mock("/policyDescList",{code:0,data:shouye_data.policyDescList});
Mock.mock("/kingKongList",{code:0,data:shouye_data.kingKongModule.kingKongList});
Mock.mock("/indexActivityModule",{code:0,data:shouye_data.indexActivityModule});
Mock.mock("/categoryL1List",{code:0,data:fenlei_zhuanqu.categoryL1List});
Mock.mock("/categoryL2List",{code:0,data:fenlei_zhuanqu.categoryL2List});
Mock.mock("/cateList",{code:0,data:cateList});
Mock.mock("/category",{code:0,data:category});



