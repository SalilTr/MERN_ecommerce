import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import Pagenotfound from "./Pages/Pagenotfound";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import RegistrationForm from "./components/Register";
import LoginPage from "./components/LoginPage";
import Dashboard from "./Pages/user/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoutes from "./components/privateRoutes/Private";
import ForgotPassword from "./components/ForgotPassword";
import AdminPrivateRoutes from "./components/privateRoutes/AdminPrivate";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import CreateCategory from "./Pages/CreateCategory";
import Users from "./Pages/Users";
import CreateProduct from "./Pages/CreateProduct";
import Profile from "./Pages/user/Profile";
import Orders from "./Pages/user/Orders";
import Products from "./Pages/Products";
import UpdateProduct from "./Pages/UpdateProduct";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<PrivateRoutes />}>
            <Route path="" element={<Dashboard />} />
            <Route path="user/profile" element={<Profile />} />
            <Route path="user/orders" element={<Orders />} />
          </Route>
          <Route path="/admin-dashboard" element={<AdminPrivateRoutes />}>
            <Route path="" element={<AdminDashboard />} />
            <Route path="create-category" element={<CreateCategory />} />
            <Route path="create-products" element={<CreateProduct />} />
            <Route path="product/:slug" element={<UpdateProduct />} />
            <Route path="admin/users" element={<Users />} />
            <Route path="products" element={<Products />} />
          </Route>

          <Route path="/contact" element={<Contact />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
