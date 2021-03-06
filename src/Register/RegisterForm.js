import React from 'react';

class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirmation: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Register. Create a new account.</h1>
                <div className='form-group'>
                    <label className='control-label'>UserName</label>
                    <input
                        value = {this.state.username}
                        onChange = {this.onChange} 
                        type = 'text'
                        name = 'username'
                        className = 'form-control'
                    />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Password</label>
                    <input
                        value = {this.state.password}
                        onChange = {this.onChange} 
                        type = 'password'
                        name = 'password'
                        className = 'form-control'
                    />
                </div>
                <div className='form-group'>
                    <label className='control-label'>Confirm Password</label>
                    <input
                        value = {this.state.passwordConfirmation}
                        onChange = {this.onChange} 
                        type = 'password'
                        name = 'password'
                        className = 'form-control'
                    />
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary btn-lg'>Register</button>
                </div>
            </form>
        );
    }
}
export default RegisterForm;