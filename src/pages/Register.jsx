import { useNavigate } from "react-router-dom";
import { signupService } from "../services/Auth";
import { toast } from "react-toastify";
import { useTitle } from "../hooks/useTitle";
import { useAuth } from "../contexts/AuthContext";

export const Register = () => {
  useTitle("Register");
  const { setUser, setToken } = useAuth();
  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    try {
      const authDetail = {
        firstname: event.target.fname.value,
        lastname: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };
      const { user, token } = await signupService(authDetail);

      token ? navigate("/productlist") : toast.error("check console");

      localStorage.setItem("signup", JSON.stringify({ token: token }));
      setToken(token);
      localStorage.setItem("user", JSON.stringify({ user: user }));
      setUser(user);

      toast.success("Register Sucessfully");
    } catch (error) {
      toast.error(error.message, {
        closeButton: true,
        position: "bottom-center",
      });
    }
  }

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          Register
        </p>
      </section>
      <form onSubmit={handleRegister}>
        <div className="mb-6">
          <label
            htmlFor="fname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            First Name
          </label>
          <input
            type="name"
            id="fname"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Sam "
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="lname"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Last name
          </label>
          <input
            type="name"
            id="lname"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Doe"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            minLength="7"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
      </form>
    </main>
  );
};
