import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

const [user, setUser] = useState();
useEffect(() => {
    const userToken = localStorage.getItem('user_token');
    const usersStorage = localStorage.getItem('users_db');

    if (userToken && userStorage) {
        const hasUser = JSON.parse(userStorage)?.filter(
            (user) => user.email === JSON.parse(userToken).email
        );
    }

    if (hasUser) setUser(hasUser[0]);
}, [])


export const AuthContext = ({ children }) => {
    return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

