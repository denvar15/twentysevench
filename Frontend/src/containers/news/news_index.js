import React,{Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getNews} from "../../actions/index";
//contianers
import News from "./news_screen";
//dumb components
import Loading from "../../components/loading";
import Err from "../../components/error";

class NewsView extends Component{
	componentDidMount() {
		this.props.getNews();
	}

	renderall(isGetting, isGetted){
	    return(
	        <div className="container">
                {isGetting?(<Loading/>):(isGetted?(<News news={this.props.news.news}/>):(<Err/>))}
	        </div>
            );
	}

	render(){
		const isGetting = this.props.news.isGetting;
		const isGetted = this.props.news.isGetted;
		return (
		    <div className="container">
                {this.renderall(isGetting, isGetted)}
		    </div>
        );
	}
}

function mapStateToProps(state){
	return {
		news:state.news,
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({getNews},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsView);