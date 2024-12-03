import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { store } from './store/app.js';
import App from './App.jsx'
import { Provider } from 'react-redux';
import ChatDetail from './pages/ChatDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index: true,
        element: <Navigate to="/chat/info"/>
      },
      {
        path: "/chat/info",
        element:<ChatDetail/>
      },
      {
        path:'/chat/:id',
        element:<ChatDetail/>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
