
import { createContext, ReactNode,  useState, useEffect } from "react"
import { auth, firebase } from '../services/firebase';



export const AuthContext = createContext({} as AuthContextType)
type User = {
    id: string;
    name?: string;
    avatar?: string;
    phoneNumber?: string | null | undefined;
  }
  type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
    logOut: () => void;
  }
  type AuthContextProps = {
    children: ReactNode;
  }
  
  
export function AuthContextProvider(props: AuthContextProps){
    const [user, setUser] = useState<User>()
    console.log(`agora user na página auth ${user?.id}`)

    useEffect(()=>{     

      const unsubscript = auth.onAuthStateChanged(user => {
         if (user){

           const {displayName, photoURL, uid, phoneNumber} = user
          
           
           if(!displayName || !photoURL){
             throw new Error('Missing information from Google Account.')
           }
           setUser({
             id: uid,
             name: displayName,
             avatar: photoURL,
             phoneNumber: phoneNumber

           })
         
         }
       })
       
       return () => {
         unsubscript()
       }
     }, [])


     async function signInWithGoogle(){   

     

      const provider = new firebase.auth.GoogleAuthProvider();
      
      const result = await  auth.signInWithPopup(provider)    
     
      if (result.user){
          const {displayName, photoURL, uid} = result.user
          
          if(!displayName || !photoURL){
            throw new Error('Missing information from Google Account.')
          }
          
          
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
          
          
      }
    }
    
    function logOut(){
        firebase.auth().signOut()
        return setUser(undefined)
    }

    
  
    return(
        <>
           <AuthContext.Provider value={{ user, signInWithGoogle, logOut }}>
                {props.children}
           </AuthContext.Provider>
  
        </>
    )
}