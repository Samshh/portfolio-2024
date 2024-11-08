import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import PageNotFound from "./components/PageNotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Resume.pdf",
    element: <Navigate to="/Resume.pdf" replace />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default Router;
