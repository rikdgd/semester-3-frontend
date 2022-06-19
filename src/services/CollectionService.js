import axios from "axios";

class CollectionService {
    GetCollectionByUserId(userId) {
        return axios.get('http://localhost:8080/api/v1/user_collection/' + userId);
    }
}

export default new CollectionService();