import React, { Component } from 'react';
import UserService from '../../services/UserService'


class UserList extends Component {

    state = { users: [] }
    
    componentDidMount(){
        UserService.GetAllUsers().then((result) => {
            this.setState({users: result.data})
        })
    }

    // GetUserRoute(id){
    //     return '/user/' + id;
    // }

    render() { 
        return ( 
            <div>
                {
                    this.state.users.map((user) => (
                        <div className='container' key={user.id}>
                            <a>{user.id}</a>
                            <br/>
                            <a>{user.name}</a>
                            <br/>
                            <a>{user.email}</a>
                            <br/>
                            <a className='btn btn-primary'>view</a>
                        </div>
                    ))
                }
            </div>
         );
    }
}
 
export default UserList;