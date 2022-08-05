import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import { customTheme } from "./theme";
import customStore from "./store";
import axios from "axios";
import "./index.css";

const NODE_ENV = process.env.NODE_ENV;
const BASE_URL =
    NODE_ENV && NODE_ENV === "development"
        ? process.env.REACT_APP_DEV_API_URL
        : process.env.REACT_APP_PROD_API_URL;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <ReduxProvider store={customStore}>
            <BrowserRouter>
                <ChakraProvider resetCSS theme={customTheme}>
                    <App />
                </ChakraProvider>
            </BrowserRouter>
        </ReduxProvider>
    </React.StrictMode>
);

axios.defaults.baseURL = BASE_URL + "/api";
serviceWorkerRegistration.register();
reportWebVitals();
