import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { RouterProvider } from "react-router";
import router from "./router/router.jsx";
import AuthProvider from "./context/AuthContext/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <div className="max-w-7xl mx-auto p-2">
     <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   </div>
  </StrictMode>
);
