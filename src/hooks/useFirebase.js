import { getAuth,
    signInWithPopup,
     GoogleAuthProvider,signOut ,
     createUserWithEmailAndPassword ,
     onAuthStateChanged,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from '../firebase/firebase.init'
initilizeAuthentication()
const auth = getAuth();
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
   const [isLoading, setIsLoading] = useState(true);
   const [user, setUser] = useState({})
   const [admin, setAdmin] = useState(false)


   const signinWithGoogle = () => {
       return signInWithPopup(auth, googleProvider)
          
   }
 const register = (email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)


 }
 
   const singout=()=>{
       signOut(auth).then(() => {
           // Sign-out successful.
           setUser({})
         }).catch((error) => {
           // An error happened.
         });
   }
   useEffect(() => {
       const unsubscribed = onAuthStateChanged(auth, user => {
           if (user) {
               setUser(user);
           }
           else {
               setUser({})
           }
           setIsLoading(false);
       });
       return () => unsubscribed;
   }, [])


   const saveUser = (email, displayName, method) => {

    const user = { email, displayName }
    fetch(`http://localhost:5000/users`, {
        method: method,
        headers: { 'content-type': "application/json" },
        body: JSON.stringify(user)
    })

}

useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
}, [user?.email])

const updateName = (name) => {
    updateProfile(auth.currentUser, {
        displayName: name,
       
    })

}


   return{
       signinWithGoogle,
       user,
       singout,
      
       register,
       setUser,
       isLoading,
       setIsLoading,
       saveUser,
       setAdmin,
       updateName,
       admin

   }
}
export default useFirebase;