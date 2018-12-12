import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {createPost, deletePost} from '../../actions/index';
import {changeMode} from '../../actions/index';
import moment from 'moment';
import {Field,reduxForm} from "redux-form";

import '../../css/postdetail.css'

class PostDetail extends Component{
	delete(){
		const {data} = this.props.data.post;
		this.props.deletePost(data.id,()=>{
			this.props.data.history.push("/posts/");
		});
	}

	renderEditButton(){
		const {data} = this.props.data.post;
		const owner = data.author;
		const requestUser = localStorage.getItem('username');
		if(owner==requestUser){
			return (
				<Link className="button-back" to={`/edit_post/${data.id}`}>Edit</Link>
			)
		}
	}
	renderDeleteButton(){
		const {data} = this.props.data.post;
		const owner = data.author;
		const requestUser = localStorage.getItem('username');
		if(owner==requestUser){
			return (
				<button className="button-back" onClick={this.delete.bind(this)}>Delete</button>
			)
		} 
	}

	onSubmit(formValue, data){
	    data.type = formValue.type;
		    data.respondent = formValue.id ;
		this.props.createPost(data,()=>{
		    console.log(formValue, data);
		    window.location.href = "/posts/";
		})
	}

	renderPost = (post, data) => {
		if (post.respondent === 'no respondent') {
			 this.href_respondent[data.id] = data.type + '/'
		} else {
			this.href_respondent[data.id] = 'view_post/' + post.respondent
		}
		if (post.id  == data.respondent) {
			return(
			<div className="column col-12" key={data.id}>
				<div className="card">
                    <div className="card-body">
				    Title: {data.title}
				  </div>
				  <div className="card-body">
				    Content: {data.content}
				  </div>
				  <div className="card-footer">
				    <Link className="button-view" to={`/posts/view_post/${data.id}`}>View</Link>
				  </div>
				</div>
			</div>
			);
		}
	};

	render(){
		const {fields:{title,content},handleSubmit} = this.props;
		const {data} = this.props.data.post;
		window.data = data;
		const time = moment(data.published).format("MMM Do YY");

		const posts = this.props.posts;
		this.href_respondent = [];
		return (
			<div className="panel">
				<div className="panel-header">
					<div className="panel-subtitle float-right">Posted:-{time}</div>
					<div className="panel-title h5 mt-10">{data.title}</div>
					<div className="panel-subtitle">By:-{data.author}</div>
					<div className="panel-subtitle">Type:  {data.type}</div>
					<div className="panel-subtitle">Respondent:  {data.respondent}</div>
				</div>
				<div className="panel-body">
				   <p>{data.content}</p>
				</div>
				<div className="panel-footer">
				  	<div className="btn-group btn-group-block">
                   		{this.renderEditButton()}
                   		{this.renderDeleteButton()}
                    <Link className="button-back" to="/posts/">Back</Link>
                  </div>
					<div className="panel-footer">
						<div className="columns">
							<div className="column col-12">
                                <button className='button-rotor' onClick={() => {const e = document.getElementById("LOL");
                                        if (e.style.display === 'none') {
                                            e.style.display = 'inline'
                                        }else {
                                            e.style.display = 'none'
                                        }}}><i className="fas fa-angle-down"> </i> Post response
                                </button>

                                <form className='card' onSubmit = {handleSubmit(this.onSubmit.bind(this, data))}>
                                    <ul id='LOL' style={{display: 'none'}}>
                                        <div className="form-group">
                                            <label className="form-label">Title</label>
                                            <Field component="input"  name="title" type="text" className="form-input" placeholder="Enter the title of the Post"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Message</label>
                                            <Field component="textarea" name="content" className="form-input" id="input-example-3" placeholder="Textarea" rows="3"/>
                                        </div>
                                        <div className="form-group">
                                            <button className="button-view" type="submit" id="vini">Post</button>
                                            <Link to="/posts/" className="button-back"> Cancel</Link>
                                        </div>
                                    </ul>
                                </form>
                            </div>
						</div>
                        <button className='button-rotor' onClick={() => {const e = document.getElementById("MEM");
                                        if (e.style.display === 'none') {
                                            e.style.display = 'inline'
                                        }else {
                                            e.style.display = 'none'
                                        }}}><i className="fas fa-angle-down"> </i> Posts responses
                                </button>
                        <div id='MEM' className="columns" style={{display: 'none'}}>
                            {posts.map(this.renderPost.bind(this, data))}
                        </div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		newpost:state.newpost,
	}
}

export default connect(mapStateToProps, {deletePost,changeMode, createPost})(reduxForm({
	form:'PostForm',
	fields:['title','content', 'type' , 'respondent'],
})(PostDetail));