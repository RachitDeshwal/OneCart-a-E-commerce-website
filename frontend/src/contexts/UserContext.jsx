import { useContext, createContext,useState,useEffect } from "react";
import { useAuthContext } from "./AuthContext";
import axios from "axios";
import { linkWithCredential } from "firebase/auth";

export const UserContext = createContext({
  
});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const[userData,setUserData]=useState("")
  let {serverUrl}=useAuthContext();
  const getCurrentUser=async()=>{
    try{
        const result=await axios.post(`${serverUrl}/api/user/getcurrentuser`,{}, {withCredentials:true})
        setUserData(result.data)

    }
    catch(err){
        console.log(err);
    }
  }
  useEffect(()=>{
    getCurrentUser()

  },[])
  const value = {
    userData,setUserData,getCurrentUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
   
