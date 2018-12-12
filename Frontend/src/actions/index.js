import axios from "axios";

export const GETTING_NEWS = 'GETTING_NEWS';
export const GETTED_NEWS = 'GETTED_NEWS';

export const GETTING_SINGLE_NEWS = 'GETTING_SINGLE_NEWS';
export const GETTED_SINGLE_NEWS = 'GETTED_SINGLE_NEWS';

export const FETCHING_BLOGS = "FETCHING_BLOGS";
export const FETCHED_BLOGS = "FETCHED_BLOGS";
export const ERROR = "ERROR";

export const CREATING_POST = "CREATING_POST";
export const CREATED_POST = "CREATE_POST";

export const DELETING_POST = 'DELETING_POST';
export const DELETED_POST = 'DELETED_POST';

export const FETCHING_POST = 'FETCHING_POST';
export const FETCHED_POST = 'FETCHED_POST';

export const EDITING_POST = 'EDITING_POST';
export const EDITED_POST = 'EDITED_POST';

export const NEW_FETCHING_BLOGS = "NEW_FETCHING_BLOGS";
export const NEW_FETCHED_BLOGS = "NEW_FETCHED_BLOGS";

export const NEW_CREATING_POST = "NEW_CREATING_POST";
export const NEW_CREATED_POST = "NEW_CREATE_POST";

export const NEW_DELETING_POST = 'NEW_DELETING_POST';
export const NEW_DELETED_POST = 'NEW_DELETED_POST';

export const NEW_FETCHING_POST = 'NEW_FETCHING_POST';
export const NEW_FETCHED_POST = 'NEW_FETCHED_POST';

export const NEW_EDITING_POST = 'NEW_EDITING_POST';
export const NEW_EDITED_POST = 'NEW_EDITED_POST';

import {tokenHeader} from '../utils/headers';

const root_url = "http://localhost:8000/";

export function getNews(){
	const sub_url = "news/api/";
	const url = `${root_url}${sub_url}`;

	const request = axios.get(url,tokenHeader());

	return (dispatch) =>{
		dispatch({type:GETTING_NEWS});
		request.then((response)=>{
			dispatch({type:GETTED_NEWS,payload:response});
		})
		.catch((err)=>{
			dispatch({type:ERROR,payload:err});
		})
	};
}

export function viewSingleNews(id){
	const sub_url = `news/api/detail/${id}`;
	const url = `${root_url}${sub_url}`;
	const request = axios.get(url,tokenHeader());
	return (dispatch) =>{
		dispatch({type:GETTING_SINGLE_NEWS});
		request.then((response)=>{
			dispatch({type:GETTED_SINGLE_NEWS,payload:response.data});
		});
	}
}

export function getBlogs(){
	const sub_url = "blog/api/";
	const url = `${root_url}${sub_url}`;
	
	const request = axios.get(url,tokenHeader());

	return (dispatch) =>{
		dispatch({type:FETCHING_BLOGS});
		request.then((response)=>{
			dispatch({type:FETCHED_BLOGS,payload:response});
		})
		.catch((err)=>{
			dispatch({type:ERROR,payload:err});
		})
	};

}

export function createPost(fromValue,callback){
	const sub_url = "blog/api/create/";
	const url = `${root_url}${sub_url}`;
	//console.log(props);

	const request = axios
		.post(url,fromValue,tokenHeader())
		.then(() => callback());

	return {
		type:CREATED_POST,
		payload:request
	}
	/*return (dispatch) => {
		dispatch({type:CREATING_POST});
		request.then((response)=>{
			dispatch({type:CREATED_POST,payload:response.data});
		});
	}*/

}

export function deletePost(id,callback){
	const sub_url = `blog/api/delete/${id}`;
	const url = `${root_url}${sub_url}`;
	const request = axios.delete(url,tokenHeader());

	return (dispatch) => {
		dispatch({type:DELETING_POST});
		request.then(()=>{
			dispatch({type:DELETED_POST});
			callback();
		});
	}
}

export function viewPost(id){
	const sub_url = `blog/api/detail/${id}`;
	const url = `${root_url}${sub_url}`;
	const request = axios.get(url,tokenHeader());
	return (dispatch) =>{
		dispatch({type:FETCHING_POST});
		request.then((response)=>{
			dispatch({type:FETCHED_POST,payload:response.data});
		});
	}
}

export function editPost(fromValue,id,callback){
	console.log(fromValue);
	const sub_url = `blog/api/update/${id}/`;
	const url = `${root_url}${sub_url}`;
	const request = axios.put(url,fromValue,tokenHeader());
	return (dispatch) =>{
		dispatch({type:EDITING_POST});
		request.then((response)=>{
			dispatch({type:EDITED_POST});
			callback();
		});
	}
}



export function NewgetBlogs(){
	const sub_url = "blog/api/new/";
	const url = `${root_url}${sub_url}`;

	const request = axios.get(url,tokenHeader());

	return (dispatch) =>{
		dispatch({type:NEW_FETCHING_BLOGS});
		request.then((response)=>{
			dispatch({type:NEW_FETCHED_BLOGS,payload:response});
		})
		.catch((err)=>{
			dispatch({type:ERROR,payload:err});
		})
	};

}

export function NewcreatePost(fromValue,callback){
	const sub_url = "blog/api/newcreate/";
	const url = `${root_url}${sub_url}`;
	//console.log(props);

	const request = axios
		.post(url,fromValue,tokenHeader())
		.then(() => callback());

	return {
		type:NEW_CREATED_POST,
		payload:request
	}
	/*return (dispatch) => {
		dispatch({type:CREATING_POST});
		request.then((response)=>{
			dispatch({type:CREATED_POST,payload:response.data});
		});
	}*/

}

export function NewdeletePost(id,callback){
	const sub_url = `blog/api/newdelete/${id}`;
	const url = `${root_url}${sub_url}`;
	const request = axios.delete(url,tokenHeader());

	return (dispatch) => {
		dispatch({type:NEW_DELETING_POST});
		request.then(()=>{
			dispatch({type:NEW_DELETED_POST});
			callback();
		});
	}

}

export function NewviewPost(id){
	const sub_url = `blog/api/newdetail/${id}`;
	const url = `${root_url}${sub_url}`;
	const request = axios.get(url,tokenHeader());
	return (dispatch) =>{
		dispatch({type:NEW_FETCHING_POST});
		request.then((response)=>{
			dispatch({type:NEW_FETCHED_POST,payload:response.data});
		});
	}
}

export function NeweditPost(fromValue,id,callback){
	console.log(fromValue);
	const sub_url = `blog/api/newupdate/${id}/`;
	const url = `${root_url}${sub_url}`;
	const request = axios.put(url,fromValue,tokenHeader());
	return (dispatch) =>{
		dispatch({type:NEW_EDITING_POST});
		request.then((response)=>{
			dispatch({type:NEW_EDITED_POST});
			callback();
		});
	}
}