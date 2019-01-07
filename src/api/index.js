import ajax from './ajax'
const BASE = '/api'
export const reqTagList =()=>ajax(`/tagList`);
export const reqfocusList = () =>ajax('/focusList')
export const reqPolicyDescList = () =>ajax('/policyDescList')
export const reqKingKongList = () =>ajax('/kingKongList')
export const reqIndexActivityModule = () => ajax('/indexActivityModule')
export const reqCategoryL1List = () =>ajax('/categoryL1List')
export const reqCateList =() =>ajax('/cateList')
export const reqCategory = () =>ajax('/category')
export const reqCategoryL2List = () =>ajax('/categoryL2List')
export const reqGetTabs = () =>ajax('/getTabs')
export const reqRecManual = () =>ajax(BASE +'/topic/v1/find/recManual.json')
export const reqRecAuto = () =>ajax(BASE + '/topic/v1/find/recAuto.json?')
export const reqTopicHome =() =>ajax('/topicHome')
