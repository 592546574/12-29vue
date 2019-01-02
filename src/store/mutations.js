//方法得对象
import {
  RECEIVE_TAGLIST,
  RECEIVE_FOCUSLIST,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_KINGKONGLIST,
  RECEIVE_INDEXACTIVITYMODULE
} from './mutation-type'
export default {
  [RECEIVE_TAGLIST](state,{tagList}){
    state.tagList = tagList
  },
  [RECEIVE_FOCUSLIST](state,{focusList}){
    state.focusList = focusList
  },
  [RECEIVE_POLICYDESCLIST](state,{policyDescList}){
    state.policyDescList = policyDescList
  },
  [RECEIVE_KINGKONGLIST](state,{kingKongList}){
    state.kingKongList = kingKongList
  },
  [RECEIVE_INDEXACTIVITYMODULE](state,{indexActivityModule}){
    state.indexActivityModule = indexActivityModule
  }
}
