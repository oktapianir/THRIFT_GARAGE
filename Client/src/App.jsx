import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Katalog from "./pages/Katalog";
import Cart from "./pages/Cart";
import DetailItem from "./pages/Detail-Item";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Admin/Dashboard";
import DataItem from "./pages/Admin/Data-item";
import { CartProvider } from "./pages/CartContext";

function Layout() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Header hanya tampil jika bukan halaman admin */}
      {!isAdminPage && <Header />}

      <div style={{ display: "flex" }}>
        {/* Sidebar hanya tampil di halaman admin */}
        {isAdminPage && <Sidebar isOpen={true} onClose={() => {}} />}

        {/* Konten utama, padding kiri jika halaman admin */}
        <div style={{ flex: 1, paddingLeft: isAdminPage ? "250px" : "0" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail-item" element={<DetailItem />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/dataitem" element={<DataItem />} /> {/* Perhatikan prefix /admin */}
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
