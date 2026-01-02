import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";



const AuthProvider = ({children}) => {
      const [loading, setLoading] = useState(true);
      const [user, setUser] = useState(null);
   

      const provider = new GoogleAuthProvider();

      const googleSignin  =()=>{
            setLoading(true);
            return signInWithPopup(auth, provider)
      }

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

                  if (currentUser?.email){
                        const userData =  {email: currentUser?.email};
                        axios.post("https://bd-career-code-server-2025.vercel.app/jwt", userData,{
                              withCredentials: true
                        })
                        .then(res =>{
                              console.log(res.data)
                        })
                        .catch(error => alert(error.message));
                        
                  }

                  
            })

            return ()=>{
                  unSubscribe();
            }
      }, [])

      const authInfo ={
            createUser,
            signInUser,
            logOut,
            googleSignin,
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