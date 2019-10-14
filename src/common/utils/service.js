import awaitWrap from './awaitWrap';
import axios from './Axios';
import api from './api';

//获取对应订单数据
export const getOrderList=(param={})=>{
  let userId=param.userId?param.userId:'',pageNum=param.pageNum?param.pageNum:1,pageSize=param.pageSize?param.pageSize:10;
  return awaitWrap(axios.post(api.GET_ORDER_LIST,{userId,pageNum,pageSize}))
};
//雇主列表
export const getUserList=(param={})=>{
  let pageNum=param.pageNum?param.pageNum:1,pageSize=param.pageSize?param.pageSize:10;
  return awaitWrap(axios.post(api.GET_USER_LIST,{pageNum,pageSize}))
}
//黑名单列表
export const getBlackList=(param={})=>{
  let pageNum=param.pageNum?param.pageNum:1,pageSize=param.pageSize?param.pageSize:10;
  return awaitWrap(axios.post(api.GET_BLACK_LIST,{pageNum,pageSize}))
}
//雇员列表
export const getEmployeeList=(param={})=>{
  let pageNum=param.pageNum?param.pageNum:1,pageSize=param.pageSize?param.pageSize:10;
  return awaitWrap(axios.post(api.GET_EMPLOYEE_LIST,{pageNum,pageSize}))
}
