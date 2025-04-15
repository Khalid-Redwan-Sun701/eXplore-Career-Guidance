import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
export const authContext = createContext();

const AuthProvider = (props) => {
  const { routes } = props;
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user with Email and password || Register
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user with Email and password || Login
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout || SignOut
  const handleLogout = () => {
    signOut(auth);
  };

  // Handle Google Sign In /  Log in
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Update or [manage] profile  of manually email, password user not google user
  const handleUpdateProfile = (dName, pUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: dName,
      photoURL: pUrl,
    });
  };

  const authInfo = {
    handleRegister,
    handleLogin,
    handleLogout,
    handleGoogleLogin,
    handleUpdateProfile,
    user,
    setUser,
    loading,
    setLoading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Current User', currentUser);

      if (currentUser) {
        console.log(currentUser);

        setUser(currentUser);
      } else {
        console.log(currentUser);

        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <authContext.Provider value={authInfo}>{routes}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
