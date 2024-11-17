import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import PageNotFound from "./components/PageNotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/404",
    element: <PageNotFound />,
  },
  {
    path: "*",
    element: <Navigate to={"/404"} replace />,
  },
]);

export default Router;
