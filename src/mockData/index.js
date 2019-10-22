const Mock=require('mockjs');
import api from '@/common/utils/api';
const Random = Mock.Random;
//首页 banner 头部数据
const bannerData = function() {
  let data=[];
  let $data={
      status:1,
      message:'',
      url:'',
      returnData:[
        {
          id:1,
          title:'test',
          pictureUrl:'',
          bannerUrl:'',
          status:'',
          createTime:'',
          upShelfDate:'',
          downShelfDate:'',
          updateTime:''
        },
      ]
  }
  return $data;
};
Mock.mock(api.GET_BANNER_LIST, 'post', bannerData);

//首页 banner 头部数据
const homeEmployeeListData = function() {
  let $data={
    status:1,
    message:'',
    url:'',
    returnData:[
      {
        isSole:1,
        age:'test',
        nativePlace:'',
        workYear:'',
        oneSentenceEvaluation:'',
        code:'',
        label:'',
      },
    ]
  }
  return $data;
};
Mock.mock(api.GET_EMPLOYEE_LIST, 'post', homeEmployeeListData);




