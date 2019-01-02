//方法得对象
import {
  RECEIVE_TAGLIST
} from './mutation-type'
export default {
  [RECEIVE_TAGLIST](state,{tagList}){
    state.tagList = tagList
  }
}
