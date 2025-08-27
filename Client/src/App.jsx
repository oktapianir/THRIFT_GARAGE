import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Katalog from "./pages/Katalog";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Admin/Dashboard";

import { CartProvider } from "./pages/CartContext";

function Layout() {
  const location = useLocation();
  const isDashboardPage = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* Header hanya jika bukan halaman dashboard */}
      {!isDashboardPage && <Header />}

      <div style={{ display: "flex" }}>
        {/* Sidebar hanya jika di halaman dashboard */}
        {isDashboardPage && <Sidebar isOpen={true} onClose={() => {}} />}

        {/* Routing utama */}
        <div style={{ flex: 1, paddingLeft: isDashboardPage ? '250px' : '0' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <CartProvider>
    <Router>
      <Layout />
    </Router>
    </CartProvider>
  );
}

export default App;

