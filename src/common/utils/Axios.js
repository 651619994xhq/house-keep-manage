import axios from 'axios';
import store from '@/store';
import Router from '@/router'; //引入router模块
import * as Auth from '@/common/utils/auth'; //导入cookie工具类
const baseURL = process.env.BASE_URL;
import Vue from 'vue';
//TODO 过期的话 清理cookie 信息
let cookieObj={
    //当用户过期的时候清理cookie信息
     removeAccessTokenAndApiGateway:()=>{
         Auth.removeApiGateway();
         Auth.removeAccessToken();
     }
};




class Axios {
    constructor (props) {
        this.instance = axios.create({
            // baseURL:store.state.apiGateway?store.state.apiGateway:baseURL,  //这里使用传过来的网关
            baseURL,
            timeout: 60000,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'Content-Type, Scope-Authorization',
                'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS',
                // 'Scope-Authorization':"", //这里使用传过来的token
                // appName,
                // 'x-app-code': appName,
                ...props
            }
        })
    }

    updateProps (props) {
        this.instance.defaults.headers = {...this.instance.defaults.headers, ...props}
    }
    post (path, params) {
        var self=this;
       //跟新header
       //  this.updateProps({
       //      'Scope-Authorization':Auth.getAccessToken()
       //  });
        return new Promise((resolve, reject)=>{
            this.instance.post(path,{...params},{headers:{}})
              .then((res)=>{
                  console.log('res==>',res);
                  // if(res.status==1){
                  //     resolve(res.returnData||{});
                  //     return;
                  // };
                  if(res.data.status==1){
                        resolve(res.data.returnData||{});
                        return;
                  };
                  reject(res.message||'系统错误');

              })
              .catch((e)=> {
                  let msg=e+'';
                  if( msg.indexOf('timeout') > -1){
                      reject('网络超时,请稍后重试');
                      return;
                  };
                  reject(e||'系统错误');
              })
        });

    }

    //暂时所有的请求 都用post get请求 暂时没有处理逻辑 如果之后需要 再加
    get (path, {success, error}) {
        this.instance.get(path)
            .then(function (response) {
                if (response && response.data && (Number(response.data.status) === 0 || response.data.code === 200)) {
                    success && success(response.data.data)
                } else {
                    error && error(response.data.msg)
                }
            })
            .catch(function (e) {
                error && error(e)
            })
    }
    //这里只是用来写测试掉接口用的
    testPost (path,params, {success, error}) {
        success && success()
    }

}
let axiosIns = new Axios({})
export default axiosIns
