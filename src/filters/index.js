import {INTERVIEW_TYPE,WORK_TYPE,ORDER_STATUS} from '../common/utils/constants';
import Vue from 'vue';
Vue.filter('INTERVIEW_TYPE_FILTER',function (value) {
   for(let i=0,len=INTERVIEW_TYPE.length;i<len;i++){
     if(value==INTERVIEW_TYPE[i]['id']){
       return INTERVIEW_TYPE[i]['name']
     };
   };
   return '';
});
Vue.filter('WORK_TYPE_FILTER',function (value) {
  for(let i=0,len=WORK_TYPE.length;i<len;i++){
    if(value==WORK_TYPE[i]['id']){
      return WORK_TYPE[i]['name']
    };
  };
  return '';
});
Vue.filter('ORDER_STATUS_FILTER',function (value) {
  for(let i=0,len=ORDER_STATUS.length;i<len;i++){
    if(value==ORDER_STATUS[i]['id']){
      return ORDER_STATUS[i]['name']
    };
  };
  return '';
});
