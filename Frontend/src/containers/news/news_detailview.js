import React,{Component} from 'react';
import {changeMode} from '../../actions/index';

import '../../css/postdetail.css'

class NewsDetail extends Component{

	render(){
		const data = this.props.data;
		this.href_respondent = [];
		return (
			<div className="panel">
				<div className="panel-header">
					<div className="panel-title h5 mt-10">{data.title}</div>
				</div>
				<div className="panel-body">
				   <p>{data.content}</p>
				</div>
			</div>
		);
	}
}

export default NewsDetail;