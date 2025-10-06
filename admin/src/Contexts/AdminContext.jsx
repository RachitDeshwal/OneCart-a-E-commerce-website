import { createContext, useContext, useEffect } from "react"
import { AuthContext, AuthDataContext, useAuthContext } from "./AuthContext.jsx"
import { useState } from "react"
import axios from 'axios'

export const AdminDataContext=createContext()

export function AdminContext({children}){
    const {serverUrl}=useAuthContext()
    
    const[adminData,setAdminData]=useState(null)
    const getAdmin=async()=>{
        
        try{
        const result= await axios.post(`${serverUrl}/api/user/getadmin`,{},{withCredentials:true}) 
        setAdminData(result.data)
        console.log(result)

    }
    catch(err){
        console.log(err)

    }}
    useEffect(()=>{
        getAdmin()
    },[])
    let value={
        adminData,setAdminData,getAdmin
    }
    return(
        <AdminDataContext.Provider value={value}>
            {children}

        </AdminDataContext.Provider>
    
    )
}
export const useAdminContext = () => useContext(AdminDataContext);