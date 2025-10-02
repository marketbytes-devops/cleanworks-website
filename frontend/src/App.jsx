import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceFee from "./pages/ServiceFee";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about-us", Component: About },
      { path: "services", Component: Services },
      { path: "service-fee", Component: ServiceFee },
      { path: "blog", Component: Blog },
      { path: "contacts", Component: Contacts },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
