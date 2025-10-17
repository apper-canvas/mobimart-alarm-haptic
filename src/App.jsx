import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;