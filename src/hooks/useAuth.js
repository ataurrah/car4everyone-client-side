import { useContext } from "react"
import { AuthContext } from "../contex/authProvider";


const useAuth = ()=>{
    return useContext(AuthContext)
}
export default useAuth;