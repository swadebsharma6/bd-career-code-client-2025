import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";


const AuthProvider = ({children}) => {
      const [loading, setLoading] = useState(true);
      const [user, setUser] = useState(null);

      const createUser = (email, password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password)
      }
      const signInUser = (email, password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password)
      }

      const logOut = ()=>{ 
            setLoading(true);
            return signOut(auth)
      }

      useEffect(()=>{
        const unSubscribe =   onAuthStateChanged(auth, currentUser =>{
                  console.log('observer', currentUser);
                  setUser(currentUser);
                  setLoading(false);
            })

            return ()=>{
                  unSubscribe();
            }
      }, [])

      const authInfo ={
            createUser,
            signInUser,
            logOut,
            loading,
            user,
      }

      return (
            <AuthContext value={authInfo}>
                  {children}
            </AuthContext>
      );
};

export default AuthProvider;