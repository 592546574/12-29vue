//间接更新state--mutationtype--mutations--actions-im-
import {
  reqTagList
} from '../api'
import {
  RECEIVE_TAGLIST
} from  './mutation-type'
export default {
  async getTagList({commit}){
    const result = await reqTagList()
    if (result.code === 0){
      const tagList = result.data
      console.log(tagList)
      commit(RECEIVE_TAGLIST,{tagList})
    }
  }
}
