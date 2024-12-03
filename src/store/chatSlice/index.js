import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initData = {
    data: [],
}
/*
data:[
    {
        id: 1,
        title:'qef'
        message:[
            {id: 1, text:'React la gi', isBot:false},
            {id: 2, text:'React la lib cua js', isBot:true},
        ]
    }
]

*/

const ChatSlice = createSlice({
    name: 'chat',
    initialState: initData,
    reducers: {
        addChat:(state) => {
            state.data.push({
                id: uuidv4(),
                title:'Chat',
                message:[]
            })
        },
        addMessage:(state,action) => {
            const {idChat, userMess, botMess} = action.payload
            const chat = state.data.find((chat) => chat.id === idChat)
            if(chat){
                const newMessage = [
                    ...chat.message,
                    {id: uuidv4(), text: userMess, isBot:false},
                    {id: uuidv4(), text: botMess, isBot:true},
                ]
                chat.message = newMessage

                state.data = [...state.data]
            }
        },
        removeChat: (state, action) => {
            state.data  = state.data.filter((chat) => chat.id !== action.payload)
        }
    }
})

export const {addChat, removeChat, addMessage} = ChatSlice.actions

export default ChatSlice.reducer