import axios from 'axios';
import {
	AUTH_USER,
	UNAUTH_USER,
	SIGNUP_USER,
	AUTH_ERROR,
    GET_USER,
    DISGET_USER
} from '../types';
import {ERROR, FETCHED_BLOGS, FETCHED_POST, FETCHING_BLOGS, FETCHING_POST} from "../index";
import {tokenHeader} from "../../utils/headers";

const ROOT_URL = 'http://localhost:8000/accounts/api/';

export function signup(formValue,callback){
	const URL = `${ROOT_URL}register/`;
	return (dispatch) =>{
		axios.post(URL, formValue)
		.then((response)=>{
			const{username}= response.data;
			window.location.href = "/posts/";
			dispatch({type:SIGNUP_USER});
			localStorage.setItem('token',response.data.token);
			localStorage.setItem('username',username);
			callback();
		})
		.catch((error)=>{
			dispatch({type:AUTH_ERROR,payload:'ERROR OCCURED USERNAME MAY EXISTS IN DATABASE'});
		})
	}
}

export function get_nowuser(){
	const url =`${ROOT_URL}get/now_user/`;

	const request = axios.get(url, tokenHeader());

	return (dispatch) =>{
		request.then((response)=>{
			dispatch({type:GET_USER,payload: response.data});
		})
		.catch((err)=>{
			dispatch({type:ERROR,payload:err});
		})
	};
}

export function signin(formValue,callback){
	const URL =`${ROOT_URL}home/login/token/`;
	const url_new =`${ROOT_URL}create/now_user/`;
	return (dispatch) => {
	    axios.post(URL,formValue)
		.then((response)=>{
		    const {username} = response.data.user;
		    console.log(response.data.user);
		    dispatch({type: AUTH_USER, payload: response.data.user});
		    localStorage.setItem('token', response.data.token);
		    localStorage.setItem('username', username);
		    axios.post(url_new, response.data.user)
                .then((response)=> {
                    callback();
                })
		})
		.catch((err)=>{
			dispatch({type:AUTH_ERROR,payload:'BAD LOGIN CREDENTIALS'});
		})
	}
}

export function signout(callback){
	localStorage.removeItem('token');
	localStorage.removeItem('username');
	return (dispatch) =>{
		dispatch({type:UNAUTH_USER});
		dispatch({type:DISGET_USER});
		callback();
	}
}