import { createBrowserRouter } from "react-router-dom";
import { CreateNewAccount } from "../pages/CreateNewAccount/CreateNewAccount";
import { Home } from "../pages/Home/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new-account",
    element: <CreateNewAccount />,
  },
]);
