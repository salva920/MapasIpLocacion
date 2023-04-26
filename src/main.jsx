import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import * as bootstrap from "bootstrap";
import "animate.css";
import "leaflet/dist/leaflet.css"
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
