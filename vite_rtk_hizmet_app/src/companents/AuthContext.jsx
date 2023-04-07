import React, { createContext, useState } from "react";

const initialValue = {}

export const AuthContext = createContext(initialValue);

export default function AuthContextProvider(props) {
    const [token,setToken]=useState(null)
const authContextValue={
    token,
    setToken,
}
    return (
        <AuthContext.Provider value={authContextValue }>
            {props.children}
        </AuthContext.Provider>
    );
}
