import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const [signupUser, setSignupUser] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState();
  const [idtoken, setIdtoken] = useState();
  const navigate = useNavigate();

  //   function createUser() {
  //     createUserWithEmailAndPassword(auth, signupUser.email, signupUser.password)
  //       .then((res) => {
  //         setUser(res.user);
  //         console.log(user);
  //         res.user.getIdToken().then((token) => {
  //           setIdtoken(token);
  //           navigate("/profile");
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }

  const createUser = async () => {
    const data = await createUserWithEmailAndPassword(
      auth,
      signupUser.email,
      signupUser.password
    );

    setUser(data.user);
    setIdtoken(data.user.getIdToken());
    const info = await axios.post(
      "https://hackout-2022-backend.herokuapp.com/api/v1/users/signup",
      {},
      {
        headers: {
          authorization: idtoken,
        },
      }
    );
    console.log(user);
    console.log(idtoken)
    navigate("/profile");
  };

  function signinUser() {
    signInWithEmailAndPassword(auth, loginUser.email, loginUser.password)
      .then((res) => {
        setUser(res.user);
        console.log(user);
        res.user.getIdToken().then((token) => {
          setIdtoken(token);
          navigate("/profile");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout() {
    signOut(auth).then(() => setUser(null));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
        res.getIdToken().then((token) => setIdtoken(token));
      } else {
        setUser(null);
      }
    });
    return unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        setLoginUser,
        signupUser,
        setSignupUser,
        createUser,
        signinUser,
        logout,
        user,
        setIdtoken,
        setUser,
        idtoken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
