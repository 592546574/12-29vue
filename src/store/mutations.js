//方法得对象
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
  },
  [RECEIVE_CATELIST](state,{cateList}){
    state.cateList = cateList
  },
  [RECEIVE_CATEGORY](state,{category}){
    state.category = category
  },
  [RECEIVE_CATEGORYL1LIST](state,{categoryL1List}){
    state.categoryL1List = categoryL1List
  },
  [RECEIVE_CATEGORYL2LIST](state,{categoryL2List}){
    state.categoryL2List = categoryL2List
  },
  [RECEIVE_GETTABS](state,{getTabs}){
    state.getTabs = getTabs
  },
  [RECEIVE_RECMANUAL](state,{recManual}){
    state.recManual = recManual
  },
  [RECEIVE_RECAUTO](state,{recAuto}){
    state.recAuto = recAuto
  },
  [RECEIVE_TOPICHOME](state,{topicHome}){
    state.topicHome = topicHome
  }
}
