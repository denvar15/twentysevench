import {
	AUTH_USER,
	UNAUTH_USER,
	SIGNUP_USER,
	AUTH_ERROR,
	SIGNUP_ERROR,
    GET_USER,
    DISGET_USER
} from '../actions/types';

const intialState = {
	authenticated:false,
	loginError:null,
	signupError:null,
    user:null,
}
export default function(state=intialState,action){
	switch(action.type){
        case DISGET_USER:
            return {...state, user:null};
        case GET_USER:
            return {...state, user:action.payload, fetched:true};
		case AUTH_USER:
			return {...state,authenticated:true};
			break;
		case UNAUTH_USER:
			return {...state,authenticated:false};
			break;
		case AUTH_ERROR:
			return {...state,authenticated:false,loginError:action.payload,signupError:null};
			break;
		case SIGNUP_ERROR:
			return {...state,authenticated:true,loginError:null,signupError:action.payload};
			break;
	}
	return state;
}