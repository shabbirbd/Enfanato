import Topbar from "./components/Topbar"
import Navbar from "./components/navbar/Navbar"


function App() {


  return (
    <>
      <div className=" bg-main-pattern min-h-screen -z-50 bg-[length:200px_200px] bg-repeat">
        <div className="w-full lg:w-4/5 mx-auto shadow-2xl shadow-enfanato">
          <Topbar/>
          <Navbar/>
          <h2 className="text-enfanato">hello</h2>
        </div>
      </div>
    </>
  )
}

export default App
