import Mock from 'mockjs'
import category from './category'
import shouye_data from './shouye_data'
Mock.mock("/tagList",{code:0,data:shouye_data.tagList});
Mock.mock("/focusList",{code:0,data:shouye_data.focusList});
Mock.mock("/policyDescList",{code:0,data:shouye_data.policyDescList});
Mock.mock("/kingKongList",{code:0,data:shouye_data.kingKongModule.kingKongList});
Mock.mock("/indexActivityModule",{code:0,data:shouye_data.indexActivityModule});


