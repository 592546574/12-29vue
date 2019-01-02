import ajax from './ajax'
const BASE = '/api'
export const reqTagList =()=>ajax(`/tagList`);
export const reqfocusList = () =>ajax('/focusList')
export const reqPolicyDescList = () =>ajax('/policyDescList')
export const reqKingKongList = () =>ajax('/kingKongList')
export const reqIndexActivityModule = () => ajax('/indexActivityModule')
