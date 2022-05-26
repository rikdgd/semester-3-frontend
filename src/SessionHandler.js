class SessionHandler{
    userIdKey = 'userId';

    SetUserId(id) {
        sessionStorage.setItem(this.userIdKey, id);
    }

    GetUserId() {
        return sessionStorage.getItem(this.userIdKey);
    }

    ClearUserId() {
        sessionStorage.removeItem(this.userIdKey);
    }
}

export default new SessionHandler();