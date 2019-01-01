import ajax from './ajax'
const BASE = '/api'
export const reqTagList = () => ajax('/tagList')
