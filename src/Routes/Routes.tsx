import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/Home/HomePage";
import CardList from "../Components/Content/CardList";
import CardDetail from "../Components/CardDetail/CardDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        element: <CardList />,
      },
    ],
  },
  {
    path: "detail/:id",
    element: <CardDetail />,
  },
]);
