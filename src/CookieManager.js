class CookieManager {

    StoreCookie(key, value) {
        try {
            document.cookie = key + '=' + value + ';';
        }
        catch {
            console.log('Cookie details invalid.');
        }
    }

    GetAllCookies() {
        return document.cookie;
    }

    GetCookieByName(name) {
        const cName = name + '=';
        const cDecoded = decodeURIComponent(document.cookie);
        const cArray = cDecoded.split(';');
        
        let result;
        cArray.forEach(val => {
            if(val.indexOf(cName) === 0) result = val.substring(cName.length);
        });

        return result;
    }
}

export default new CookieManager();