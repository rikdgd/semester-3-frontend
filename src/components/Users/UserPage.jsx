import React, { Component } from 'react';
import UserService from '../../services/UserService';
import '../../style/UserPage.css'

class UserPage extends Component {
    constructor(props){
        super(props);
        this.state = {user: props.user};
    }


    render() { 
        return ( 
            <div className='container'>
                <h4>{this.state.user.name}</h4>
                <a>{this.state.user.email}</a>
            </div>
         );
    }
}
 
export default UserPage;