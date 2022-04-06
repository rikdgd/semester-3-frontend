import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                            <nav>
                                <Link to={user.id.toString()} className='btn btn-primary'>view</Link>
                            </nav>
                        </div>
                    ))
                }
            </div>
         );
    }
}
 
export default UserList;