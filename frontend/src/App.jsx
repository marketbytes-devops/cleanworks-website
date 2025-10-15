import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicesInner from "./pages/Services/ServicesInner";
import ServiceFee from "./pages/ServiceFee";
import Blog from "./pages/Blog";
import BlogInner from "./pages/Blog/BlogInner";
import Contacts from "./pages/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about-us", Component: About },
      {
        path: "services",
        children: [
          { index: true, Component: Services },
          { path: ":id", Component: ServicesInner },
        ],
      },
      { path: "service-fee", Component: ServiceFee },
      {
        path: "blog",
        children: [
          { index: true, Component: Blog },
          { path: ":id", Component: BlogInner },
        ],
      },
      { path: "contacts", Component: Contacts },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;