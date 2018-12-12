import React,{Component} from "react";
import {Link} from 'react-router-dom';

import '../../css/posts.css'

class Posts_posts extends Component{

	renderPost = (post) => {
		if (post.respondent === 'no respondent') {
			 this.href_respondent[post.id] = post.type + '/'
		} else {
			this.href_respondent[post.id] = 'view_post/' + post.respondent
		}
		if ('/posts/' + post.type + '/' === location.pathname) {
			return(
			<div className="column col-12" key={post.id}>
				<div className="card">
                    <div className="card-body">
				    {post.title}
				  </div>
				  <div className="card-body">
				    Text: {post.content}
				  </div>
					<div className="card-body">
						Type:  {post.type}
				    </div>
					<div className="card-body">
						Respondent:
						<Link to={`/posts/${this.href_respondent[post.id]}`}> {post.respondent}</Link>
					</div>
				  <div className="card-footer">
				    <Link className="button-view" to={`/posts/view_post/${post.id}`}>View</Link>
				  </div>
				</div>
			</div>
			);
		}
	};
	render(){
		this.href_respondent = [];
		const posts = this.props.posts;
		return (
			<div className="columns">
				{posts.map(this.renderPost.bind(this))}
			</div>
		)
	}
}

export default Posts_posts;