import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PageNotFound from "./components/PageNotFound";
import ResumePage from "./components/ResumePage";
import Layout from "./Layout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default Router;
