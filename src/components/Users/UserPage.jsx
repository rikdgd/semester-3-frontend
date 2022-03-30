import React, { Component } from 'react';
import UserService from '../../services/UserService';
import UserPageContainer from './UserPageContainer';

class UserPage extends Component {
    constructor(props) {
        super(props);

        var userId = props.params.userId;

        UserService.GetById(userId).then((response) => {
            this.state = {
                user: response.data
            }
        })
    }
    
    render() { 
        return ( 
            <div>
                <a>{this.state.user.id}</a>
                <a>{this.state.user.name}</a>
                <a>{this.state.user.email}</a>
            </div>
         );
    }
}
 
export default UserPage;