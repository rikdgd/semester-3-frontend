import axios from "axios";
import SessionHandler from '../SessionHandler';


const baseURL = 'http://localhost:8080/api/v1/users/';


class UserSevice {

    GetAllUsers(){
        try{
            var data = axios.get(baseURL)
            return data;
        }
        catch{
            console.log('failed to get data');
            return null;
        }
    }

    GetById(id){
        var url = baseURL + id.toString();

        try{
            return axios.get(url);
        }
        catch{
            console.log('failed to get data');
            return null;
        }
    }

    CreateUser(user){
        axios.post('http://localhost:8080/api/v1/create_account', {
            name: user.username,
            email: user.email,
            password: user.password
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    /**
     * Tries to login the user with the given username and password.
     * @param {*} username 
     * @param {*} password 
     * @returns true when login was succesfull.
     */
    TryLogin(username, password){
        const url = 'http://localhost:8080/api/v1/login/' + username + '/' + password;
        var userId = axios.get(url);
        
        // login failed
        if(userId === -1){
            return false;
        }

        SessionHandler.SetUserId(userId);
        return true;
    }
}

export default new UserSevice();