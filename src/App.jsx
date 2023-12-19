import { createContext, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Topbar from "./components/Topbar"
import Navbar from "./components/navbar/Navbar"
import ForgotPassword from "./pages/ForgotPassword"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"


export const CartContext = createContext();
const cartItem = [
  {
    productId: 1,
    quantity: 2
  },
  {
    productId: 3,
    quantity: 3
  }
];

function App() {
  const [cart, setCart] = useState(['hello']);

  

  useEffect(()=>{
    setCart(cartItem)
  }, [cartItem])


  return (
      <main className="bg-main-pattern min-h-screen bg-[length:250px_250px] -z-50 bg-repeat">
        <CartContext.Provider value={[cart, setCart]}>
          <div className="w-full lg:w-4/5 mx-auto shadow-2xl relative shadow-enfanato">
            <Topbar/>
            <Navbar/>

            <div className="-translate-y-7 bg-white pb-16 ">
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signin" element={<Signin/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/password-recovery" element={<ForgotPassword/>} />
              </Routes>
            </div>

            <Footer/>
          </div>
        </CartContext.Provider>
      </main>
  )
}

export default App
