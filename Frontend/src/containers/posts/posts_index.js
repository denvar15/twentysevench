import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getBlogs} from "../../actions/index";

//contianers
import Posts_posts from './posts'
//dumb components
import Loading from "../../components/loading";
import Err from "../../components/error";

class Blogs extends Component{
	componentDidMount() {
		this.props.getBlogs();
	}
	render(){
		const isFetching = this.props.blogs.isFetching;
		const isFetched = this.props.blogs.isFetched;
		return(
			<div className="container">
				{isFetching?(<Loading/>):(isFetched?(<Posts_posts posts={this.props.blogs.posts}/>):(<Err/>))}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		blogs:state.blogs,
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({getBlogs},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Blogs);