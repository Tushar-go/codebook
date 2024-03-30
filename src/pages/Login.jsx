import { useRef } from "react";
import { useTitle } from "../hooks/useTitle";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { loginService } from "../services/Auth";

export const Login = () => {
  useTitle("Login");

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const { user, token } = await loginService({ email, password });

      token ? navigate("/productlist") : toast.error("token not found");

      localStorage.setItem("signup", JSON.stringify({ token: token }));
      setToken(token);
      localStorage.setItem("user", JSON.stringify({ user: user }));
      setUser(user);
    } catch (error) {
      toast.error(error.message, {
        closeButton: true,
        position: "bottom-center",
      });
    }
  }

  const { setUser, setToken } = useAuth();

  async function handleLoginGuest() {
    try {
      // Assign values directly to the input elements
      emailRef.current.value = "testuser@gmail.com";
      passwordRef.current.value = "testuser321";
  
      // Retrieve values from input elements
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
  
      
      const { user, token } = await loginService({ email, password });
  
     
      token ? navigate("/productlist") : toast.error("Token not found");
  
      
      localStorage.setItem("signup", JSON.stringify({ token }));
      setToken(token);
      localStorage.setItem("user", JSON.stringify({ user }));
      setUser(user);
    } catch (error) {
     
      toast.error(error.message, { closeButton: true, position: "bottom-center" });
    }
  }

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          Login
        </p>
      </section>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            ref={emailRef}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="jon@example.com"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log In
        </button>
      </form>
      <button onClick={handleLoginGuest} className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login As Guest</button>
    </main>
  );
};
