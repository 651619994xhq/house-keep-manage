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
  let pageNum=param.pageNum?param.pageNum:1,pageSize=param.pageSize?param.pageSize:10,type=param.type?param.type:'';//类型1月嫂2.保姆3.育儿嫂
  return awaitWrap(axios.post(api.GET_EMPLOYEE_LIST,{pageNum,pageSize,type}))
}
//发送注册验证码
export const sendRegisterCode =(param={})=>{
  let phone=param.phone?param.phone:'';
  return awaitWrap(axios.post(api.SEND_SMS_CODE,{phone,type:1}))
}
//获取头部的轮播图
export const getBannerList =(param={})=>{
  return awaitWrap(axios.post(api.GET_BANNER_LIST,{}))
}
//给雇员添加评论
export const addComments =(param={})=>{
  let token=param.token?param.token:'',starClass=param.starClass?param.starClass:'',comment=param.comment?param.comment:'',employeeId=param.employeeId?param.employeeId:'';
  return awaitWrap(axios.post(api.ADD_COMMENTS,{token,starClass,comment,employeeId}))
}
