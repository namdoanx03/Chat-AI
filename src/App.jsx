import { Outlet } from "react-router-dom"
import SideBar from "./components/SideBar"

function App() {

  return (
    <>
      <div className="bg-primaryBg-default h-screen flex">
        <SideBar/>
        <Outlet />
      </div>
    </>
  )
}

export default App
