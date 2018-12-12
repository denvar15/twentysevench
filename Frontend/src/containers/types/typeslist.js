import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {changeMode, deletePost} from '../../actions/index';
import {connect} from "react-redux";

import '../../css/typelist.css'

class Posts extends Component{

	find = (array, value) => {
		for (let i = 0; i < array.length; i++) {
			if (array[i] === value)
				return i;
		}
		return -1;
	};

	count = (array, ob) => {
        let count = 0;
        for (let i = 0; i < array.length; ++i) {
            if (array[i] === ob)
                count++;
        }
        return count
    };


	delete = (theme) => {
		const posts = this.props.posts;
		console.log(this.props);
		console.log(theme);
		let counter = 0;
		if (this.props.user[0].type === 'moder') {
		    posts.map((post) => {if (theme.type === post.type) {
			counter++;
            this.props.deletePost(post.id, () => {
            	console.log(this.count(this.posts_types, theme.type), counter);
            	if (counter === this.count(this.posts_types, theme.type))
            	{
            		window.location.href = "/posts/";
            	}
            }
            )
		}
		}
		)
        } else {
		    window.location.href = "/posts/";
        }

	};

	renderDeleteButton(post){
		if(this.deletebutton === true){
			return (
				<button className="button-delete" onClick={this.delete.bind(null, post)}>Delete theme</button>
			)
		} else {
		    return (
		        <div> </div>
            )
        }
	}

	renderPost = (post) => {
		this.posts_types.push(post.type);
		if (this.find(this.typelist, post.type) === -1) {
			this.typelist.push(post.type);
			return(
			<div className="column col-6" key={post.id}>
				<div className="card">
					<div className="card-body">
                        <h1>{post.type}</h1>
				    </div>
				  <div className="card-footer">
                      <Link className="button-view" to={`/posts/${post.type}/`}>View theme</Link>
				  </div>
					<div className="card-footer">
                        {this.renderDeleteButton(post)}
					</div>
				</div>
			</div>
		);
		}
	};

	render(){
	    this.deletebutton = false;
	    console.log(this.props.user);
	    if (this.props.user !== null) {
	        if (this.props.user[0].type === 'moder') {
	            this.deletebutton = true;
	        }
        }
		this.posts_types = [];
		this.typelist = [];
		const posts = this.props.posts;
		this.posts = posts;
		return (
			<div className="columns">
				{posts.map(this.renderPost.bind(this))}
			</div>
		)
	}
}

export default connect(null,{deletePost,changeMode})(Posts);