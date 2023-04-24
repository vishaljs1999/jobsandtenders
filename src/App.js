import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Routes/RootLayout";
import Dashboard from "./Pages/Dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[{

      path:"/dashboard",
      element:<Dashboard />
    }]

  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
