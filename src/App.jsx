import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Topbar from "./components/Topbar"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import Signin from "./pages/Signin"


function App() {


  return (
      <main className="bg-main-pattern min-h-screen bg-[length:250px_250px] -z-50 bg-repeat">
        <div className="w-full lg:w-4/5 mx-auto shadow-2xl shadow-enfanato">
          <Topbar/>
          <Navbar/>

          <div className="-translate-y-7 bg-white pb-16 z-50 ">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/signin" element={<Signin/>} />
            </Routes>
          </div>

          <Footer/>
        </div>
      </main>
  )
}

export default App
