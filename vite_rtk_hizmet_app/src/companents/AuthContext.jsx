import React, { createContext, useState } from "react";
import {useSelector } from "react-redux";
import useApi from "../hooks/useApi"

const initialValue = {}

export const AuthContext = createContext(initialValue);

export default function AuthContextProvider(props) {
    const [token, setToken] = useState(null)
    const LocalStorageToken = localStorage.getItem("token")
    const userState = useSelector(state => state.userState)
    const api = useApi()


    if (token === null && LocalStorageToken !== null) {
        setToken(LocalStorageToken)
    } else if (token !== null && LocalStorageToken === null) {
        localStorage.setItem("token", token)
    } else if (token !== null && LocalStorageToken !== null && token !== LocalStorageToken) {
        localStorage.setItem("token", token)
    }
    if (token !== null && userState.userData === null) {
        api
            .get("user/appData")
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const authContextValue = {
        token,
        setToken,
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {props.children}
        </AuthContext.Provider>
    );
}
