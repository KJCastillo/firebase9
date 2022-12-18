import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);

  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
    //functions from auth packages must have auth in front
      .then((res) => {
        console.log("user logged in:", res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, login };
};
