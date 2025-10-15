import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";  // Main Services (index.jsx)
import ServicesInner from "./pages/Services/ServicesInner";  // FIXED: Separate import for inner
import ServiceFee from "./pages/ServiceFee";
import Blog from "./pages/Blog";  // Main Blog (index.jsx)
import BlogInner from "./pages/Blog/BlogInner";  // FIXED: Separate import for inner
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
        Component: Services, 
        children: [{ path: ":id", Component: ServicesInner }]  
      },
      { path: "service-fee", Component: ServiceFee },
      { 
        path: "blog", 
        Component: Blog, 
        children: [{ path: ":id", Component: BlogInner }]  
      },
      { path: "contacts", Component: Contacts },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;