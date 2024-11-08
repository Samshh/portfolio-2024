import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PageNotFound from "./components/PageNotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default Router;
