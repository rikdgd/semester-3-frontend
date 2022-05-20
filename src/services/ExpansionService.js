import axios from "axios";

class ExpansionService {
    baseURL = 'http://localhost:8080/api/v1/';

    GetAllExpansions(){
        try{
            var data = axios.get(this.baseURL + 'allExpansions');
            return data;
        }
        catch(ex){
            console.log(ex);
            return null;
        }
    }

    GetExpansionById(id){
        try{
            var data = axios.get(this.baseURL + '/Expansion/' + id.toString())
            return data;
        }
        catch(ex){
            console.log(ex);
            return null;
        }
    }
}

export default new ExpansionService();