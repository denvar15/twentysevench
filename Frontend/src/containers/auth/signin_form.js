import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Field,reduxForm} from 'redux-form';
import {renderInput} from '../../utils/redux-form-fields';
import {signin, get_nowuser} from '../../actions/Authentication/index';
import SocialAuth from './socialauth';

import '../../css/signin.css'

class Signin extends Component{
	formSubmit(formValue){
		this.props.signin(formValue,()=>{
			this.props.history.push("/posts/");
		});
	}
	render(){
		const {handleSubmit} = this.props;
		const {loginError} = this.props.auth;
		return(
			<div className="columns columns-signin">
				<div className="column">
					<form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
						<Field component={renderInput} type="text" name="username" label="Email"/>
						<Field component={renderInput} type="password" name="password" label="Password"/>
						<div className="form-group">
							{loginError?(<div className="form-group"><span className="label label-error">{loginError}</span></div>):""}
							<button type="submit" className="button-view">Sign In</button>
						</div>
					</form>
				</div>
	            <div className="divider-vert" data-content="OR"> </div>
	            <div className="column col-5">
	              <form>
	                <div className="form-group">
                        <button className="btn btn-link btn-block"><p className='Links-text-signin'>Continue with Social Accounts</p></button>
	                </div>
	                <div className="form-group">
	                  <SocialAuth/>
	                  {/*<button className="btn btn-block btn-fb"><i className="fa fa-facebook" aria-hidden="true"></i></button>*/}
	                </div>
	              </form>
	            </div>
       
			</div>
		);
	}
}

Signin = withRouter(Signin);

Signin = reduxForm({
	form:'SigninForm',
	fields:['username','password']
})(Signin);

function mapStateToProps(state){
	return{
		auth: state.auth
	}
}

export default connect(mapStateToProps,{signin, get_nowuser})(Signin);