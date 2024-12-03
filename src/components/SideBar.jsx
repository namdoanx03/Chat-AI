import IconPlus from '../assets/plusIcon.png'
import IconChat from '../assets/chat.png'
import IconTrash from '../assets/remove.png'
import IconMenu from '../assets/menu.png'
import PropType from "prop-types";

// eslint-disable-next-line react/prop-types
const SideBar = ({onToggle}) => {
  return (
      <div className="bg-primaryBg-sideBar w-[280px] h-screen text-white p-8">
        <button className='flex ml-auto xl:hidden' onClick={onToggle}>
            <img src={IconMenu} alt='menu icon' className='w-8 h-8'/>
        </button>
        <div className="sidebar-container mt-20">
            <button className="px-4 py-2 flex items-center space-x-4 bg-gray-600 mb-20">
                <img src={IconPlus} alt='plus icon' className='w-4 h-4'/>
                <p >Cuộc trò chuyện mới</p>
            </button>
            <div>
                <p>Gần đây:</p>
                <div className='chat_recent flex flex-col space-y-6 mt-3'>
                    <div className='flex items-center justify-between p-3 bg-gray-800'>
                        <div className='flex items-center space-x-4'>
                            <img src={IconChat} alt='chat icon' className='w-8 h-8'/>
                            <p>Chat</p>
                        </div>
                        <img src={IconTrash} alt='Trash icon' className='w-5 h-5' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

SideBar.prototype ={ 
    onToggle: PropType.func
}
export default SideBar