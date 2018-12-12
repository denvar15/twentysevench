import React,{Component} from 'react';
import {connect} from 'react-redux';
import {viewPost} from '../../actions/index';

import Loading from "../../components/loading";
import PostDetail from "./postdetail";
import {getBlogs} from "../../actions/index";

class ViewPost extends Component{
	componentWillMount() {
		const {id} = this.props.match.params;
		this.props.viewPost(id);
		getBlogs();
	}
	render(){
		const {isFetching,isFetched} = this.props.post;
		console.log(this.props);
		return(
		    <div className="container">
                {isFetching?<Loading/>:(isFetched?<PostDetail data={this.props} posts={this.props.blogs.posts}/>:<Loading/>)}
		    </div>
		)
	}
}

function mapStateToProps(state){
	return{
	    post: state.post,
	    blogs:state.blogs,

	}
}



export default connect(mapStateToProps, {viewPost})(ViewPost);