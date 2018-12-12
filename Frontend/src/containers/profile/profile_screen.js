import React,{Component,PropTypes} from "react";
import {connect} from "react-redux";
import {deletePost} from "../../actions/index";
import PostsBy from './posts_by'

import '../../css/profile.css'

class Profile extends Component{
	onSubmit(formValue){
		this.props.createPost(formValue,()=>{
			 this.props.history.push("/posts/");
		})
	}

	render(){
	    const posts = this.props.posts;
	    console.log(this.props);
		return(
			<div className="column col-12" key={this.props.user[0].username}>
				<div className="Data">
                    <div className="Data-user">
                        Your name: {this.props.user[0].username}
				  </div>
				  <div className="Data-user">
                      Type: {this.props.user[0].type}
				  </div>
					<div className="Data-user">
                        Email:  {this.props.user[0].email}
				    </div>
				</div>
                <div className="column col-11">
                    <div className="card">
                        <PostsBy posts={this.props.posts} user={this.props.user}/>
                    </div>
                </div>
            </div>
		);
	}
}

//redux form almost similar to connect 1st parameter is form object 2nd is mapStateToProps 3rd is mapDispatchToProps.
//we will use shorthand of mapDispatchToProps ,We could have written mapDispatchToProps function and then use bindActionCreators to map dispatch to props .but instead of doing all that we just pass the function as argument in reduxForm.

export default connect(null,{deletePost})(Profile);