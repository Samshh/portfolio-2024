import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);

export default Router;