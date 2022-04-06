import axios from "axios";


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
}

export default new UserSevice();