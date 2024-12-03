import { Outlet } from "react-router-dom"
import SideBar from "./components/SideBar"

function App() {

  return (
    <>
      <div className="bg-primaryBg-default h-screen flex">
        <div className="xl:block hidden">  {/* to len hien ra, nho lai an di, co che cua tailwind la mobile first*/}
          <SideBar/>
        </div>
        <Outlet />
      </div>
    </>
  )
}

export default App
