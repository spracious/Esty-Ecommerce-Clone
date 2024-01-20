import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Vintage from "./components/pages/Vintage";
import Footer from "./components/Footer";
import Product from "./components/pages/Product";
import Cart from "./components/pages/Cart";
import Admin from "./adminComponents/pages/Admin";
import AdminNav from "./adminComponents/pages/subComponents/AdminNav";
import AdminUsers from "./adminComponents/pages/AdminUsers";
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vintage" element={<Vintage />} />
            <Route path="/Product/:id/" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sign-in" element={<Sigin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
             <Route path="/signIn" element={<SignIn/>}/>
            <Route path="/Admin" element={<Admin />} />

            <Route path="/AdminUser" element={<AdminUsers />} />
            <Route path="/AdminProduct" element={<AdminProduct />} />
            <Route path="/AdminNewUsers" element={<AdminNewUsers />} />
            <Route path="/CartNav" element={<CartNav />} />
            <Route path="/AdminNewProducts" element={<AdminNewProducts />} />
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
