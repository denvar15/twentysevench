import {combineReducers} from "redux";
import BlogReducer from "./reducer-blog";
import NewBlogReducer from "./reducer-newBlog";
import SinglePostReducer from "./reducer-singlepost";
import authReducer from "./reducer-auth";
import NewsReducer from './reducer-News';
import SingleNewsReducer from './reducer-singleNews'
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
	blogs:BlogReducer,
	form:formReducer,
	newpost:NewBlogReducer,
	post:SinglePostReducer,
	auth:authReducer,
    news:NewsReducer,
    singlenews:SingleNewsReducer,
});

export default rootReducer;