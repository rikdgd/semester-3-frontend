import axios from "axios";


class CardService {

    GetRandomCardCollection(){
        var url = 'http://localhost:8080/api/v1/allCards';

        try {
            var data = axios.get(url);
            return data;
        } 
        catch (error) {
            console.log('receiving data from api failed.');
            return null;
        }
    }

    GetById(id){
        var url = 'http://localhost:8080/api/v1/card/' + id
        try{
            var data = axios.get(url)
            return data;
        }
        catch (error){
            console.log('failed to get card information.')
            return null;
        }
    }
}

export default new CardService();