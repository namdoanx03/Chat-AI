import { useEffect, useState } from 'react'
import IconTemp from '../assets/temp.jpeg'
import IconMenu from '../assets/menu.png'
import SideBar from '../components/SideBar'
import IconStar from '../assets/star.png'
import { useParams } from 'react-router-dom'
import Gemini from '../gemini'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../store/chatSlice'

const ChatDetail = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [dataDetail, setDataDetail] = useState([])
    const [inputChat, setInputChat] = useState("")
    const {id} = useParams()
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.chat)


    useEffect(() => {
        if(data.length > 0){
            const chat = data.find(chat => chat.id === id)
            if(chat){
                setDataDetail(chat.message)
            }
        }
    },[data, id])

    const handleChatDetail = async () => {
        if(id){
            const chatText = await Gemini(inputChat)
            if(chatText){
                const dataMessage = {
                    idChat:id,
                    userMess:inputChat,
                    botMess:chatText
                }
                dispatch(addMessage(dataMessage))
            }
        }
    }

  return (
    <div className="text-white xl:w-[80%] w-full relative">
        <div className='flex items-center space-x-2 p-4'>
            <button onClick={() => setMenuToggle(!menuToggle)}>
                <img src={IconMenu} alt='menu icon' className='w-8 h-8 xl:hidden'/> 
            </button>
            <h1 className="text-xl uppercase font-bold ">Gemini</h1>
        </div>

        {menuToggle && (
            <div className='absolute h-full top-0 left-0'>
                <SideBar onToggle = {() => setMenuToggle(!menuToggle)}/>
            </div>
        )}
        <div className="max-w-[90%] w-full mx-auto mt-20 space-y-10">
            {id ? (<div className='flex flex-col space-y-4 p-4 h-[400px] border overflow-x-hidden overflow-y-auto'>
            {Array.isArray(dataDetail) && dataDetail.map((item) => (
                <div className='flex flex-col space-y-6' key={item.id}>
                    {item.isBot ? <img src={IconStar} alt='star icon' className='w-8 h-8 xl:hidden'/> :  <p>User</p>}
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
        )
        :
        (
            <div className="flex flex-col space-y-5">
                <div className="space-y-1">
                    <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400
                    text-[35px] font-bold inline-block text-transparent bg-clip-text
                    ">Xin Chào</h2>
                    <p className="text-3xl">Hôm nay tôi có thể giúp gì cho bạn ?</p>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="w-[200px] h-[200px] bg-primaryBg-sideBar flex items-center justify-center rounded-lg">
                        <p>Lên kế hoạch bữa ăn</p>
                    </div>
                    <div className="w-[200px] h-[200px] bg-primaryBg-sideBar flex items-center justify-center rounded-lg">
                        <p>Cụm từ ngôn ngữ mới</p>
                    </div>
                    <div className="w-[200px] h-[200px] bg-primaryBg-sideBar flex items-center justify-center rounded-lg">
                        <p>Bí quyết viết thư xin việc</p>
                    </div>
                    <div className="w-[200px] h-[200px] bg-primaryBg-sideBar flex items-center justify-center rounded-lg flex-col space-y-2">
                        <p>Tạo hình với AI</p>
                        <img src={IconTemp} alt='Temp icon' className='w-[130px] h-[130px]' />
                    </div>
                </div>
            </div>
        )}
            <div className='flex items-center space-x-4 w-full'>
                <input type='text' placeholder='Nhập câu lệnh tại đây'
                onChange={(e) => setDataDetail(e.target.value)} 
                className='p-4 rounded-lg bg-primaryBg-default border w-[90%]'/>
                <button className='p-4 rounded-lg bg-green-500 text-white'
                onClick={() => handleChatDetail()}
                >Gửi</button>
            </div>   
        </div>
    </div>
  )
}

export default ChatDetail