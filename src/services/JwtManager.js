import CookieManager from '../CookieManager';

class JwtManager {

    accessTokenKey = 'accessKey';
    refreshTokenKey = 'refreshKey';

    GetAccesToken() {
        return CookieManager.GetCookieByName(this.accessTokenKey);
    }

    GetRefreshToken() {
        return CookieManager.GetCookieByName(this.refreshTokenKey);
    }

    StoreAccesToken(token) {
        CookieManager.StoreCookie(this.accessTokenKey, token);
    }

    StoreRefreshToken(token) {
        CookieManager.StoreCookie(this.refreshTokenKey, token);
    }
}

export default new JwtManager();