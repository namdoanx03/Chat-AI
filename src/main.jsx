/* eslint-disable react/prop-types */
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/app.js";
import "./index.css";

const ChatDetail = React.lazy(() => import("./pages/ChatDetail.jsx")); // Tách code (Code Splitting)

// Thành phần hiển thị lỗi
function GlobalError({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center h-screen"
    >
      <h2 className="text-2xl font-bold text-red-600">Đã xảy ra lỗi!</h2>
      <p className="text-lg text-gray-800">{error.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Thử lại
      </button>
    </div>
  );
}

// Cấu hình Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/chat/info" />,
      },
      {
        path: "/chat/info",
        element: (
          <Suspense fallback={<div>Đang tải...</div>}>
            <ChatDetail />
          </Suspense>
        ),
      },
      {
        path: "/chat/:id",
        element: (
          <Suspense fallback={<div>Đang tải...</div>}>
            <ChatDetail />
          </Suspense>
        ),
      },
      {
        path: "*", // Xử lý đường dẫn không hợp lệ
        element: <Navigate to="/chat/info" />,
      },
    ],
  },
]);

// Kết nối React với DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary FallbackComponent={GlobalError}>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </ErrorBoundary>
);
