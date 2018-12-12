import {
	GETTING_SINGLE_NEWS,
	GETTED_SINGLE_NEWS,
} from '../actions';

const intialState = {
	data:null,
    isGetting:false,
	isGetted:false,
	error:null,
};

export default function(state=intialState,action){
	switch (action.type) {
			case GETTING_SINGLE_NEWS:
				return {...state,isGetting:true};
				break;
			case GETTED_SINGLE_NEWS:
				return {...state,isGetting:false, isGetted:true, data:action.payload};
				break;
		}
	return state;
}