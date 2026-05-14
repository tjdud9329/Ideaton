import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/home';

function App() {
  return (
    <BrowserRouter>
      {/* 배경색을 주어 아이폰 프레임이 돋보이게 합니다 */}
      <div className="min-h-screen bg-gray-200 flex justify-center">
        {/* 아이폰 13 기준 너비: 390px */}
        <div className="relative w-full max-w-[390px] min-h-screen bg-white shadow-2xl flex flex-col overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Main />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
