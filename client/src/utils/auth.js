import decode from 'jwt-decode';

class AuthService {
    
  getProfile() {
    return decode(this.getToken());
  }

    //is user still logged in?
    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    ///did token expire?
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
            
        } catch (err) {
            return false;
        }
    }
    //token from local storage
    getToken() {
        return localStorage.getItem('id_token');
    }

    //setting token to local storage
    login(idToken) {
        localStorage.setItem('id_token', idToken);

        window.location.assign('/search');
    }

    //clearing token
    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
}

export default new AuthService();
//user authentication



