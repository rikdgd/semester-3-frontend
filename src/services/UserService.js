import axios from "axios";


class UserSevice {
    constructor(){
        this.baseUrl = 'http://localhost:8080/api/v1/users/';
    }


    GetAllUsers(){
        try{
            var data = axios.get(this.baseUrl);
            return data;
        }
        catch{
            console.log('failed to get data');
            return null;
        }
    }

    GetById(id){
        var url = this.baseUrl + id;

        try{
            var data; 
            
            axios.get(url)
            .then(response => {
                data = response.data
            });

            return data;
        }
        catch{
            console.log('failed to get data');
            return null;
        }
    }
}

export default new UserSevice;