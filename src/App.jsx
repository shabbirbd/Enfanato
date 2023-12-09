import Topbar from "./components/Topbar"
import Navbar from "./components/navbar/Navbar"


function App() {


  return (
    <>
      <div className="w-full lg:w-4/5 mx-auto">
        <Topbar/>
        <Navbar/>
        <h2 className="text-red-400">hello</h2>
      </div>
    </>
  )
}

export default App
