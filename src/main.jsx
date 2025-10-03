import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppProvider from "./utils/AppProvider.jsx";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <Provider store={Store}>
        <AppProvider>
          <App />
        </AppProvider>
      </Provider>
    </StrictMode>
    <ToastContainer autoClose={2000} className="toast" />
  </>
);
