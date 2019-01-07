//间接更新state--mutationtype--mutations--actions-im-
import {
  reqTagList,
  reqfocusList,
  reqPolicyDescList,
  reqKingKongList,
  reqIndexActivityModule,
  reqCateList,
  reqCategory,
  reqCategoryL1List,
  reqCategoryL2List,
  reqGetTabs,
  reqRecManual,
  reqRecAuto,
  reqTopicHome
} from '../api'
import {
  RECEIVE_TAGLIST,
  RECEIVE_FOCUSLIST,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_KINGKONGLIST,
  RECEIVE_INDEXACTIVITYMODULE,
  RECEIVE_CATELIST,
  RECEIVE_CATEGORY,
  RECEIVE_CATEGORYL1LIST,
  RECEIVE_CATEGORYL2LIST,
  RECEIVE_GETTABS,
  RECEIVE_RECMANUAL,
  RECEIVE_RECAUTO,
  RECEIVE_TOPICHOME
} from './mutation-type'
export default {
  async getTagList({commit}){
    const result = await reqTagList()
    if (result.code === 0){
      const tagList = result.data
      console.log(tagList)
      commit(RECEIVE_TAGLIST,{tagList})
    }
  },
  async getFocusList({commit}){
    const result = await reqfocusList()
    if (result.code === 0 ){
      const focusList = result.data
      commit(RECEIVE_FOCUSLIST,{focusList})
    }
  },
  async getPolicyDescList({commit}){
    const result = await reqPolicyDescList()
    if (result.code === 0 ){
      const policyDescList = result.data
      commit(RECEIVE_POLICYDESCLIST,{policyDescList})
    }
  },
  async getKingKongList({commit}){
    const result = await reqKingKongList()
    if (result.code === 0 ){
      const kingKongList = result.data
      console.log(kingKongList)
      commit(RECEIVE_KINGKONGLIST,{kingKongList})
    }
  },
  async getIndexActivityModule({commit}){
    const result = await reqIndexActivityModule()
    if (result.code === 0 ){
      const indexActivityModule = result.data
      console.log(indexActivityModule)
      commit(RECEIVE_INDEXACTIVITYMODULE,{indexActivityModule})
    }
  },
  async getCateList({commit}){
    const result = await reqCateList()
    if (result.code === 0 ){
      const cateList = result.data
      console.log(cateList)
      commit(RECEIVE_CATELIST,{cateList})
    }
  },
  async getCategory({commit}){
    const result = await reqCategory()
    if (result.code === 0 ){
      const category = result.data
      console.log(category)
      commit(RECEIVE_CATEGORY,{category})
    }
  },
  async getCategoryL1List({commit}){
    const result = await reqCategoryL1List()
    if (result.code === 0 ){
      const categoryL1List = result.data
      commit(RECEIVE_CATEGORYL1LIST,{categoryL1List})
    }
  },
  async getCategoryL2List({commit}){
    const result = await reqCategoryL2List()
    if (result.code === 0 ){
      const categoryL2List = result.data
      commit(RECEIVE_CATEGORYL2LIST,{categoryL2List})
    }
  },
  async getGetTabs({commit}){
    const result = await reqGetTabs()
    if (result.code === 0 ){
      const getTabs = result.data
      commit(RECEIVE_GETTABS,{getTabs})
    }
  },
  async getRecManual({commit}){
    const result = await reqRecManual()
    if (result.code === '200' ){
      const recManual = result.data
      commit(RECEIVE_RECMANUAL,{recManual})
    }
  },
  async getRecAuto({commit}){
    const result = await reqRecAuto()
    if (result.code === '200' ){
      const RecAuto = result.data
      commit(RECEIVE_RECAUTO,{RecAuto})
    }
  },
  async getTopicHome({commit}){
    const result = await reqTopicHome()
    if (result.code === 0 ){
      const topicHome = result.data
      commit(RECEIVE_TOPICHOME,{topicHome})
    }
  },
}
