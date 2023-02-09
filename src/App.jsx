import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/rootLayout/Root";
import Home from "./pages/rootLayout/Home";

const router = createBrowserRouter([
  {
    path: "/portfolio_one/",
    element: <Root />,
    children: [{ index: true, element: <Home /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
