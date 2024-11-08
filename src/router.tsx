import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PageNotFound from "./components/PageNotFound";
import ResumePage from "./components/ResumePage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default Router;
