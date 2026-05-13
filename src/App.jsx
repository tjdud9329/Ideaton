import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      {/* 1. 레이아웃 감싸기: Routes 바깥에 위치해야 함 */}
      <div className="min-h-screen bg-gray-100 flex justify-center">
        <div className="relative w-full max-w-[430px] min-h-screen bg-white shadow-2xl flex flex-col">
          
          <Routes>
            {/* 2. Route 컴포넌트의 첫 글자는 반드시 대문자(Route)여야 합니다 */}
            <Route path="/" element={<Main />} />
            {/* 나중에 다른 페이지가 추가되면 여기에 계속 작성 */}
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;