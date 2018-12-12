import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getBlogs} from "../../actions/index";
import {get_nowuser} from '../../actions/Authentication/index'
//contianers
import Posts from "./typeslist";
//dumb components
import Loading from "../../components/loading";
import Err from "../../components/error";

class Blogs extends Component{
	componentDidMount() {
		this.props.getBlogs();
	}

	renderall(koef, isFetching, isFetched){
		if (koef !== null) {
		    return(
		        <div className="container">
                    {isFetching?(<Loading/>):(isFetched?(<Posts user={this.props.auth.user} posts={this.props.blogs.posts}/>):(<Err/>))}
		        </div>
            );
        } else {
		    return (
                <div className="container">
                    <Posts user={null} posts={this.props.blogs.posts}/>
                </div>
            )
        }
	}

	render(){
		const isFetching = this.props.blogs.isFetching;
		const isFetched = this.props.blogs.isFetched;
		if (this.props.auth.user === null) {
		    this.props.get_nowuser();
        }
		return (
		    <div className="container">
                {this.renderall(this.props.auth.user, isFetching, isFetched)}
		    </div>
        );
	}
}

function mapStateToProps(state){
	return {
		blogs:state.blogs,
        auth:state.auth,
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({getBlogs, get_nowuser},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Blogs);