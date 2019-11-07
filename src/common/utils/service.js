import awaitWrap from './awaitWrap';
import axios from './Axios';
import api from './api';

//发送注册验证码
export const sendRegisterCode =(param={})=>{
  let phone=param.phone?param.phone:'';
  return awaitWrap(axios.post(api.SEND_SMS_CODE,{phone,type:1}))
};
//发送修改手机号代码
export const sendUpdatePhoneCode =(param={})=>{
  let phone=param.phone?param.phone:'';
  return awaitWrap(axios.post(api.SEND_SMS_CODE,{phone,type:2}))
};
//移动端注册接口
export const register =(param={})=>{
  let phone=param.phone?param.phone:'',smsCode=param.smsCode?param.smsCode:'',identityType=param.identityType?param.identityType:'';
  return awaitWrap(axios.post(api.REGISTER,{phone,smsCode,identityType}))
};
//登录接口
export const login =(param={})=>{
  let code=param.code?param.code:'';
  return awaitWrap(axios.post(api.LOGIN,{code}))
};

//获取头部的轮播图
export const getBannerList =(param={})=>{
  return awaitWrap(axios.post(api.GET_BANNER_LIST,{}))
};

//首页雇员列表
export const getEmployeeList=(param={})=>{
  let pageNum=param.pageNum?param.pageNum:1,pageSize=param.pageSize?param.pageSize:10,type=param.type?param.type:'';//类型1月嫂2.保姆3.育儿嫂
  return awaitWrap(axios.post(api.GET_EMPLOYEE_LIST,{pageNum,pageSize,type}))
};

//获取阿姨详情
export const getEmployeeInfo=(param={})=>{
  let id=param.id?param.id:'';
  return awaitWrap(axios.post(api.GET_EMPLOYEE_INFO ,{id}))
};

//获取我的用户信息
export const getMyInfo =(param={})=>{
  return awaitWrap(axios.post(api.GET_MY_INFO,{}))
};

//获取我的收藏列表
export const getMyCollectList=(param={})=>{
  let pageNum=param.pageNum?param.pageNum:1,pageSize=param.pageSize?param.pageSize:10;
  return awaitWrap(axios.post(api.GET_MY_COLLECT_LIST,{pageNum,pageSize}))
};

//取消收藏
export const deleteCollect=(param={})=>{
  let employeeIds=param.employeeIds?param.employeeIds:[];
  return awaitWrap(axios.post(api.DELETE_COLLECT,{employeeIds}))
};
//收藏
export const collect=(param={})=>{
  let employeeId=param.employeeId?param.employeeId:'';
  return awaitWrap(axios.post(api.COLLECT,{employeeId}))
};

//修改手机号
export const updatePhone=(param={})=>{
  let checkCode=param.checkCode?param.checkCode:'',phone=param.phone?param.phone:'';
  return awaitWrap(axios.post(api.UPDATE_PHONE,{checkCode,phone}));
};
//跟新用户信息
export const updateUserInfo=(param={})=>{
  let babyBirthday=param.babyBirthday?param.babyBirthday:'',birthday=param.birthday?param.birthday:'',identityType=param.identityType?param.identityType:'',address=param.address?param.address:'';
  return awaitWrap(axios.post(api.UPDATE_USER_INFO,{babyBirthday,birthday,identityType,address}))
};
//我的订单列表
export const getMyOrderList=(param={})=>{
  let pageNum=param.pageNum?param.pageNum:1,pageSize=param.pageSize?param.pageSize:10;
  return awaitWrap(axios.post(api.GET_ORDER_LIST,{pageNum,pageSize}))
};
//获取订单详情
export const getOrderDetail=(param={})=>{
  let id=param.id?param.id:'';
  return awaitWrap(axios.post(api.GET_ORDER_DETAIL,{id}))
};
//取消预约
export const cancelInterview=(param={})=>{
  let orderId=param.orderId?param.orderId:'';
  return awaitWrap(axios.post(api.CANCEL_INTERVIEW,{orderId}))
};
//雇主添加评论
export const addComments=(param={})=>{
  let employeeId=param.employeeId?param.employeeId:'',comment=param.comment?param.comment:'',starClass=param.starClass?param.starClass:'';
  return awaitWrap(axios.post(api.CANCEL_APPOINT,{employeeId,comment,starClass,source:1}))
};
