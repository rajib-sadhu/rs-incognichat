import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const addNamePhoto = (currentUser, name, photo) => {
        return updateProfile(currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            console.log('Current User', currentUser);
            //  get and set token
            if (currentUser) {
                axios.post('https://rs-incognichat-server.vercel.app/jwt', { email: currentUser.email })
                    .then(res => {
                        // console.log(res.data.token);
                        const token = res.data.token
                        localStorage.setItem('access-token', token);

                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token');
            }
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const value = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        addNamePhoto
    }

    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;