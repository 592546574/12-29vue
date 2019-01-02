//间接更新state--mutationtype--mutations--actions-im-
import {
  reqTagList,
  reqfocusList,
  reqPolicyDescList,
  reqKingKongList,
  reqIndexActivityModule
} from '../api'
import {
  RECEIVE_TAGLIST,
  RECEIVE_FOCUSLIST,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_KINGKONGLIST,
  RECEIVE_INDEXACTIVITYMODULE
} from  './mutation-type'
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
}
