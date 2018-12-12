import React,{Component} from 'react';
import {Link,Route,withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import '../css/header.css'
import logo from '../images/27-spring18.jpg'

import Blogs from "./types/types_index";
import PostNew from "./create_post/post_new";
import ViewPost from './post_detail/view_post';
import EditPost from './post_detail/edit_post';
import Signup from './auth/signup_form';
import Signin from './auth/signin_form';
import Posts from './posts/posts_index'
import Profiles from './profile/profile_index'
import NewsView from './news/news_index'
import SingleNewsView from './news/news_detail_index'

import requireAuth from './HOC/authenticate';

import {signout} from '../actions/Authentication';

class Header extends Component{
	logoutUser(){
		this.props.signout(()=>{
			this.props.history.push('/signin');
		})
	}
	renderAuthMode(authenticated){
		if(authenticated){
			return(
				<section className="navbar-section">
                    <a className="btn btn-link" onClick={this.logoutUser.bind(this)}><p className='Links-text'>Logout</p></a>
				</section>
			);
		}
		return(
			<section className="navbar-section">
                <Link to="/signup" className="btn btn-link"><p className='Links-text'>Sign Up</p></Link>
                <Link to="/signin" className="btn btn-link"><p className='Links-text'>Sign In</p></Link>
			</section>
		);

	}
	render(){
		const {authenticated} = this.props;
		return(
                <div className="contianer">
                    <div className="container">
                        <div className="columns">
                            <div className='NavBar'>
                                <div className="column col-lg-12">
                                    <header className="navbar">
                                         <a className="navbar-logo"><img src={logo} height='50px' width='50px'/></a>
                                        <section className="navbar-section"><Link to="/posts/" className="btn btn-link"><p className='Links-text'>Home</p></Link>
                                            <Link to="/news/" className="btn btn-link"><p className='Links-text'>News</p></Link>
                                            {authenticated?(<Link to="/profile/" className="btn btn-link"><p className='Links-text'>Profile</p></Link>):""}
                                            {authenticated?(<Link to="/posts/create_post" className="btn btn-link"><p className='Links-text'>Create Post</p></Link>):""}
                                            </section>
                                        {this.renderAuthMode(authenticated)}
                                        </header>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Route path="/profile" component={requireAuth(Profiles)}/>
                    <Route exact path="/posts" component={requireAuth(Blogs)}/>
                    <Route path = "/posts/:id" component = {requireAuth(Posts)}/>
                    <Route path = "/signup" component ={Signup}/>
                    <Route path = "/signin" component ={Signin}/>
                    <Route path = "/posts/create_post" component= {requireAuth(PostNew)}/>
                    <Route path = "/posts/view_post/:id" component = {requireAuth(ViewPost)}/>
                    <Route path = "/posts/edit_post/:id" component = {requireAuth(EditPost)}/>
                    <Route exact path="/news" component={requireAuth(NewsView)}/>
                    <Route path="/news/:id" component={requireAuth(SingleNewsView)}/>
                </div>
		);
	}
}

function mapStateToProps(state){
	return{
		authenticated:state.auth.authenticated,
        auth: state.auth
	}
}

export default withRouter(connect(mapStateToProps,{signout})(Header));

