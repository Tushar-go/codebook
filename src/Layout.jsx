import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/other/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./contexts/AuthContext";
import Loader from "./components/Loader";

function Layout() {
  const { loader } = useAuth();
  

  return (
    <div className=" dark:bg-slate-800 ">
     {loader && <Loader />}
      <ScrollToTop />
      <ToastContainer closeButton={false} autoClose={3000} />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
