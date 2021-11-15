import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider, signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged, updateProfile
} from "firebase/auth";
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
    const registration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)


    }

    const singout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

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
        fetch(`https://murmuring-inlet-82514.herokuapp.com/users`, {
            method: method,
            headers: { 'content-type': "application/json" },
            body: JSON.stringify(user)
        })

    }

    useEffect(() => {
        fetch(`https://murmuring-inlet-82514.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])

    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,

        })

    }


    return {
        signinWithGoogle,
        user,
        singout,

        registration,
        setUser,
        isLoading,
        setIsLoading,
        saveUser,
        setAdmin,
        updateName,
        signin,
        admin

    }
}
export default useFirebase;