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
  RECEIVE_TOPICHOME,
  RECEIVE_GETTABDATA,
  RECEIVE_GETTABDATATWO
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
  [RECEIVE_TOPICHOME](state,{topicHome}){
    state.topicHome = topicHome
  },
  [RECEIVE_GETTABDATA](state,{getTabData}){
    state.getTabData = getTabData
  },

  [RECEIVE_GETTABDATATWO](state,{getTabData2}){
    state.getTabData2 = getTabData2.result
    console.log(getTabData2)
    //数组扁平化  拿到含有null的所有的包含对象的数组pre原始值
    // let bigArr = getTabData2.result.reduce((pre,curr)=>{
    //   curr.itemList.forEach(item=>{
    //     if(item){
    //       item.type = curr.type
    //       item.subTitle = curr.subTitle
    //       item.title = curr.title
    //     }
    //   })
    //   return pre.concat(curr.itemList)
    // },[])
    // // filter过滤掉数组中的null，得到所有有真实数据的数组
    // state.getTabData2 = bigArr.filter(item =>{
    //   return item !== null
    // })
  }

}
//subTitle  title
