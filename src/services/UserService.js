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

    // GetById(id){
    //     var url = baseURL + id.toString();

    //     try{
    //         let data;
            
    //         axios.get(url)
    //         .then((response) => {
    //             console.log(response.data)
    //             data = response.data
    //         });

    //         return data;
    //     }
    //     catch{
    //         console.log('failed to get data');
    //         return null;
    //     }
    // }
}

export default new UserSevice;