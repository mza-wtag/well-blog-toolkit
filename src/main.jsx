import React from "react";
import ReactDOM from "react-dom/client";
import Home from "@pages/Home.jsx";
import Layout from "./Layout.jsx";
import "./index.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@store/store.js";
import Login from "@components/Login/Login.jsx";
import Register from "@components/Register/Register.jsx";
import Profile from "@pages/Profile.jsx";
import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute.jsx";
import Blog from "@pages/Blog.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/me" element={<ProtectedRoute element={<Profile />} />} />
      <Route path="/blog/:id" element={<ProtectedRoute element={<Blog />} />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
