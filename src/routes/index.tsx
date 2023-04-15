import { createBrowserRouter } from "react-router-dom";
import { CreateNewAccount, Home } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-account",
    element: <CreateNewAccount />,
  },
]);
