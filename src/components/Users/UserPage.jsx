import React, { Component } from 'react';
import UserService from '../../services/UserService';
import '../../style/UserPage.css'

class UserPage extends Component {
    constructor(props){
        super(props);
        //this.state = {user: props.user};
        
        const { params } = this.props.match.params;
        const user = UserService.GetById(params.id);
        
        this.state = {user: user};
    }


    render() { 
        console.log(this.props);
        const { params } = this.props.match.params;
        const user = UserService.GetById(params.id);

        return ( 
            <div className='container' key={this.state.user.id}>
                <a>{this.state.user.id}</a>
                <br/>
                <a>{this.state.user.name}</a>
                <br/>
                <a>{this.state.user.email}</a>
                <br/>
            </div>
         );
    }
}
 
export default UserPage;