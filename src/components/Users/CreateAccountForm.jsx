import React, { Component } from 'react';
import '../../style/CreateForm.css'
import Button from '../GeneralComponents/Button'


class CreateAccountForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: ''
        }
    }

    ChangeEmailHandler = (event) => {
        this.setState({ email: event.target.value});
    }

    ChangeUsernameHandler = (event) => {
        this.setState({ username: event.target.value});
    }

    ChangePasswordHandler = (event) => {
        this.setState({ password: event.target.value});
    }
    
    render() { 
        return ( 
            <div className='container form-container'>
                <h3 className='text-center'>Create user</h3>
                <form>
                    <input type='text' className='form-control form-textfield' value={this.state.email} onChange={this.ChangeEmailHandler} placeholder='email'></input>
                    <input type='text' className='form-control form-textfield' value={this.state.username} onChange={this.ChangeUsernameHandler} placeholder='username'></input>
                    <input type='password' className='form-control form-textfield' value={this.state.password} onChange={this.ChangePasswordHandler} placeholder='password'></input>
                    <Button text='create account'/>
                </form>
            </div>
         );
    }
}
 
export default CreateAccountForm;