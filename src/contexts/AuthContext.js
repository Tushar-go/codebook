import { createContext, useContext, useState, useEffect } from "react";




const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);
  const [loader, setLoader] = useState(false);

  
 
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 800);
    
  }, [token]);

  useEffect(() => {
    // Check if there's a token in localStorage
    const storedToken = localStorage.getItem("signup");
    const storedUser = localStorage.getItem("user");
    
    if (storedToken && storedUser) {
      const parsedToken = JSON.parse(storedToken).token;
      const parsedUser = JSON.parse(storedUser).user;
      
      // Set token and user in state
      setToken(parsedToken);
      setUser(parsedUser);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        loader,
        setLoader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };