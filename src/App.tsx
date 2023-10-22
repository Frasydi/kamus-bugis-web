import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Layout from "./layout";
import DetailLema from "./pages/detail";
import Privacy from "./pages/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        index : true,
        element : <Home />
      },
      {
        path : "/privacy", 
        element : <Privacy />
      },
      {
        path : "/:id", 
        element : <DetailLema />
      }
    ]
  },
]);

export default function App() {
    return (
      <RouterProvider router={router} />
    )
}