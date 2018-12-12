import React,{Component} from "react";
import {Link} from 'react-router-dom';
import {changeMode, deletePost} from '../../actions/index';
import {connect} from "react-redux";

import '../../css/typelist.css'

class News extends Component{

	renderNews = (news) => {
	    return(
	        <div className="column col-6" key={news.id}>
                <div className="card">
                    <div className="card-body">
                        <h1>{news.title}</h1>
                    </div>
                    <div className="card-footer">
                        <Link className="button-view" to={`${news.id}/`}>View theme</Link>
                    </div>
                </div>
            </div>
		);
	};

	render(){
		this.posts_types = [];
		const news = this.props.news;
		this.posts = news;
		console.log(news);
		return (
			<div className="columns">
				{news.map(this.renderNews.bind(this))}
			</div>
		)
	}
}

export default connect(null,{deletePost,changeMode})(News);