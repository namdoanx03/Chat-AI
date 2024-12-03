import { configureStore } from '@reduxjs/toolkit'
import chatReducere from './chatSlice'

export const store = configureStore({
    reducer: {
        chat:chatReducere
    },
})
export default store