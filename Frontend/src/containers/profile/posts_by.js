import React,{Component} from "react";
import {Link} from 'react-router-dom';

import '../../css/profile.css'

class PostsBy extends Component{

	renderPost = (post) => {
		if (this.props.user[0].username === post.author) {
			return(
			    <div>
                    <div className="column-post" key={post.id}>
                        <div className="card">
                            <div className="Data-post-title">
                            {post.title}
                          </div>
                          <div className="Data-post">
                            Text: {post.content}
                          </div>
                            <div className="Data-post">
                                Type:  {post.type}
                            </div>
                            <div className="Data-post">
                                Respondent:
                                <Link to={`/posts/${this.href_respondent[post.id]}`}> {post.respondent}</Link>
                            </div>
                          <div className="Data-post-button">
                            <Link className="button-view" to={`/posts/view_post/${post.id}`}>View</Link>
                          </div>
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
			<div>
                <button className='button-rotor-darker' onClick={() => {const e = document.getElementById("MEM");
                                        if (e.style.display === 'none') {
                                            e.style.display = 'inline'
                                        }else {
                                            e.style.display = 'none'
                                        }}}><i className="fas fa-angle-down"> </i> Your posts
                    </button>
                <div style={{display: 'none'}} id='MEM'>
				    {posts.map(this.renderPost.bind(this))}
                </div>
			</div>
		)
	}
}

export default PostsBy;