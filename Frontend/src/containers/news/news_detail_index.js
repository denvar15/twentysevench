import React,{Component} from 'react';
import {connect} from 'react-redux';
import Loading from "../../components/loading";
import PostDetail from "./news_detailview";
import {viewSingleNews} from "../../actions/index";
import {bindActionCreators} from "redux";

class SingleNewsView extends Component{

	componentWillMount() {
		const {id} = this.props.match.params;
		viewSingleNews(id);
		this.props.viewSingleNews(id);
	}

	render(){
		const {isGetting,isGetted} = this.props.singlenews;
		return(
		    <div className="container">
                {isGetting?<Loading/>:(isGetted?<PostDetail data={this.props.singlenews.data}/>:<Loading/>)}
		    </div>
		)
	}
}

function mapStateToProps(state){
	return{
	    singlenews: state.singlenews,
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({viewSingleNews},dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleNewsView);