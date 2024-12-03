import { Outlet } from "react-router-dom"
import SideBar from "./components/SideBar"
import { useEffect } from "react"
import Gemini from "./gemini"
import { useDispatch, useSelector } from "react-redux"
import { addChat } from "./store/chatSlice"

function App() {

  const dispatch = useDispatch()
  const {data} = useSelector(state => state.chat)

  useEffect(() => {
    dispatch(addChat())
  },[])

  useEffect(() => {
    console.log("data",data)
  },[data])

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
