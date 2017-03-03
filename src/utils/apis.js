import axios from 'axios';
import pathURL from '../constants/url';

const BASE_URL = pathURL.baseURL;


// axios.interceptors.request.use((config) => {
// 		return AsyncStorage.getItem('UserDetails').then((isLoggedInNow) => {
// 			if(isLoggedInNow){
// 					let userDetails = JSON.parse(isLoggedInNow);
// 					let authToken = userDetails.token_type + ' ' + userDetails.access_token;
// 					config.headers['Authorization'] = authToken;
// 					return config;
// 			}
// 			else{
// 				return config;
// 			}
// 		});
// },(error) => {
//   return Promise.reject(error);
// });
//
// axios.interceptors.response.use(function (response) {
//     return response;
//   }, function (error) {
// 		if(error.response == undefined){
// 			networkErrorAlert();
// 			return Promise.reject(error);
// 		}
//     else if(error.response.status == 401){
// 			sessionOutError();
// 			return Promise.reject(error);
// 		}
//   });
//
// function networkErrorAlert(){
// 	if(!store.getState().userDetails.networkErrorAlert){
// 		store.dispatch({type : 'NETWORK_ALERT',payload : true});
// 		timeOutVar = setTimeout(()=> {
// 		 Alert.alert('Network Error','No Internet Connection.',
// 			[
// 				{ text : 'Ok' , onPress: () => {
// 						clearTimeout(timeOutVar);
// 						store.dispatch({type : 'NETWORK_ALERT',payload : false});
// 					}
// 				}
// 			]
// 			)
// 		},500);
// 	}
// }
//
// function sessionOutError(){
// 	if(!store.getState().userDetails.sessionOutErrorAlert)
// 	{
// 		store.dispatch({type : 'SESSION_OUT_ALERT',payload : true});
// 		timeOutVar = setTimeout(()=> {
// 		 Alert.alert('Session Expired','Please login again.',
// 			[
// 					{ text : 'Ok' , onPress: () => {
// 						clearTimeout(timeOutVar);
// 						store.dispatch({type : 'SESSION_OUT_ALERT',payload : false});
// 						AsyncStorage.multiRemove(['allEventList','alertEventList','classEventList','examEventList','generalEventList','UserDetails','profilePic','IsLoggedIn']).done();
// 						if(store.getState().userDetails.profilePic !== ""){
// 							RNFetchBlob.fs.unlink(store.getState().userDetails.profilePic);
// 						}
// 						store.dispatch({type : 'USER_LOGOUT'});
// 						Actions.login();
// 					}
// 				}
// 			]
// 			)
// 		},500);
// 	}
// }

export function getCall(url,params=null){
	return axios.get(BASE_URL+url,{params : params});
}

export function putCall(url,body){
	return axios.put(BASE_URL+url,body);
}

export function postCall(url,body){
	return axios.post(BASE_URL+url,body);
}
