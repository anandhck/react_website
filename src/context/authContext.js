import {createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    
    const login = async (inputs) => {
       const res = await axios.post("http://localhost:8000/api/auth/login", 
      { inputs },
      { withCredentials: true } // Ensure cookies are sent and received
    );
        setCurrentUser(res.data);
    }
   const logout = async () => {
        try {
            await axios.post("http://localhost:8000/api/auth/logout");
            setCurrentUser(null);
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);
    
    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>{ children }</AuthContext.Provider>
)
    
}