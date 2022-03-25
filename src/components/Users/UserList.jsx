import React, { Component } from 'react';
import UserPage from './UserPage';
import UserService from '../../services/UserService'
import { BrowserRouter, Route } from 'react-router-dom'


class UserList extends Component {

    state = { users: [] }
    
    componentDidMount(){
        UserService.GetAllUsers().then((result) => {
            this.setState({users: result.data})
        })
    }

    GetUserRoute(id){
        return '/user/' + id;
    }

    render() { 
        return ( 
            <div>
                <BrowserRouter>
                {
                    this.state.users.map((user) => (
                        <Route path={this.GetUserRoute(user.id)} element={<UserPage/>}>click</Route>
                    ))
                }
                </BrowserRouter>
            </div>
         );
    }
}
 
export default UserList;