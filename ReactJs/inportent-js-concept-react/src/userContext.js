import React, { createContext, useContext, useState } from "react";

// Create a context
const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'demo name', isLoggedIn: false });

    const loginUser = (name) => {
        setUser({ name: name, isLoggedIn: true });
    };

    const logOutUser = () => {
        setUser({ name: '', isLoggedIn: false });
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logOutUser }}>
            {children}
        </UserContext.Provider>
    );
};

const UserProfile = () => {
    const { user, loginUser, logOutUser } = useContext(UserContext);

    return (
        <div className="p-4 flex flex-col gap-1">
            <h2 className="font-bold">User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Status: {user.isLoggedIn ? "Logged In" : "Logged Out"}</p>
            <button className="bg-cyan-200 p-1 rounded-full" onClick={() => loginUser("New User")}>Log In</button>
            <button className="bg-cyan-200 p-1 rounded-full" onClick={logOutUser}>Log Out</button>
            <hr/>
        </div>
    );
};

const UserApp = () => {
    return (
        <UserProvider>
            <UserProfile />
        </UserProvider>
    );
};

export default UserApp;
