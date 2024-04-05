import { BrowserRouter } from "react-router-dom";
import "./app.css";
import AppRoutes from "./components/AppRoutes";
import { Provider } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { Store } from "./Redux/Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function App() {
  return (
    <>
      <Provider store={Store}>
        <ToastContainer />
        <AnimatePresence>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AnimatePresence>
      </Provider>
    </>
  );
}
