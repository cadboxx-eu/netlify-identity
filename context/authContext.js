import {createContext, useState, useEffect} from 'react';
import netlifyIdentity from 'netlify-identity-widget';

export const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false,
});

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [authReady, setAuthReady] = useState(false);

    useEffect(() => {
        netlifyIdentity.on('login', (user) => {
            setUser(user);
            netlifyIdentity.close();
            console.log('Login event', user)
        });

        netlifyIdentity.on('logout', (_) => {
            setUser(null);
            console.log('Logout event')
        });

        netlifyIdentity.on('init', (user) => {
            setUser(user);
            setAuthReady(true);
        });

        // Init netlify identity connection
        netlifyIdentity.init();

        return () => {
            netlifyIdentity.off('login');
            netlifyIdentity.off('logout');
        }
    }, []);

    const login = () => {
        netlifyIdentity.open();
    }

    const logout = () => {
        netlifyIdentity.logout();
    }

    return (
        <AuthContext.Provider
          value={{
            user,
            login,
            logout,
            authReady
          }}
        >
            {children}
        </AuthContext.Provider>
    )
}
