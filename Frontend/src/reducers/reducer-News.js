import {GETTING_NEWS} from "../actions";
import {GETTED_NEWS} from "../actions";
import {ERROR} from "../actions";

const intialState = {
	isGetting:false,
	isGetted:false,
	error:null,
	news:[]
};

export default function(state=intialState,action){
	switch(action.type){
		case GETTING_NEWS:
			return {...state,isGetting:true};
			break;
		case GETTED_NEWS:
			return {...state,isGetting:false,isGetted:true,news:action.payload.data};
			break;
		case ERROR:
			return {...state,isGetting:false,isGetted:false,error:action.payload};
			break;
	}
	return state;
}