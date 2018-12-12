import React,{Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {renderInput} from '../../utils/redux-form-fields';
import {signup} from '../../actions/Authentication/index';

import '../../css/signup.css'

class Signup extends Component{

	formSubmit(formValue){
		console.log(formValue);
		this.props.signup(formValue,()=>{
			this.props.history.push('/');
		});
	}

	render(){
		const {handleSubmit} = this.props;
		const {signupError} = this.props.auth;
		return(
			<div>
			<form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
                <div className='forms-signup'>
                    <Field component={renderInput} label="Email" name="email" type="Email"/>
                    <Field component={renderInput} label="Username" name="username" type="text"/>
                    <Field component={renderInput} label="Password" name="password" type="password"/>
                    <div className="form-group">
                        {signupError?(<div className="form-group"><span className="label label-error">{signupError}</span></div>):""}
                        <button className="button-view">Signup</button>
                    </div>
                </div>
			</form>
			</div>
		);
	}
}

Signup = reduxForm({
	form:'SignupForm',
	fields:['email','username','password']
})(Signup);

Signup = withRouter(Signup); 

function mapStateToProps(state){
	return{
		auth:state.auth
	}
}
export default connect(mapStateToProps,{signup})(Signup);