import { createContext, useState } from "react"
import { Toaster } from "react-hot-toast"
import { Route, Routes, useLocation } from "react-router-dom"
import CompareCard from "./components/CompareCard"
import Footer from "./components/Footer"
import ProductPreview from "./components/ProductPreview"
import Topbar from "./components/Topbar"
import Navbar from "./components/navbar/Navbar"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Compare from "./pages/Compare"
import ForgotPassword from "./pages/ForgotPassword"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"


export const CartContext = createContext();
export const CopmareContext = createContext();


function App() {
  const [cart, setCart] = useState([]);
  const [compare, setCompare] = useState([]);
  const location = useLocation();

  



  return (
      <div className="bg-main-pattern min-h-screen bg-[length:250px_250px]  -z-50 bg-repeat">
        <CopmareContext.Provider value={[compare, setCompare]}>
        <CartContext.Provider value={[cart, setCart]}>
          {
            compare.length > 0 && location.pathname !== '/compare' && <CompareCard/>
          }
          <Toaster 
              position="top-right"
              reverseOrder={false}   
              toastOptions={{
                className: 'bg-enfanato text-white outline-1 outline-dashed outline-black',
              }}   
          />
          <div className="w-full lg:w-4/5 mx-auto shadow-2xl relative shadow-enfanato">
            <Topbar/>
            <Navbar/>

            <div className="-translate-y-7 bg-white pb-16 ">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/password-recovery" element={<ForgotPassword/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/product/:id" element={<ProductPreview/>} />
                <Route path="/compare" element={<Compare/>} />
              </Routes>
            </div>

            <Footer/>
          </div>
        </CartContext.Provider>
        </CopmareContext.Provider>
      </div>
  )
}

export default App
