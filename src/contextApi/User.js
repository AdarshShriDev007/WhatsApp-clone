import {
    createContext,
    useContext,
    useState
} from "react";

const UserContext = createContext(null);
export const useUserContext = ()=> useContext(UserContext);

export const UserProvider = (props)=>{
    const [user,setUser] = useState(null);
    return (
        <UserContext.Provider value={{user,setUser}}>
            {props.children}
        </UserContext.Provider>
    );
}