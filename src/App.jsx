import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/home';
// 팀의 파일명 규칙을 반영한 임포트
import Qhaehdqlqlaqkq from './pages/qhaehdqlqlaqkq'; 
import Soddlehlswkdrnr from './pages/soddlehlswkdrnr';

function App() {
  return (
    <BrowserRouter>
      {/* 배경색을 주어 아이폰 프레임이 돋보이게 합니다 */}
      <div className="min-h-screen bg-gray-200 flex justify-center">
        {/* 아이폰 13 기준 너비: 390px */}
        <div className="relative w-full max-w-[390px] min-h-screen bg-white shadow-2xl flex flex-col overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Main />} />
            
            {/* 1번 카드(봄동비빔밥)를 누르면 이동할 경로 */}
            <Route path="/recipe/1" element={<Qhaehdqlqlaqkq />} />
            
            {/* 2번 카드(냉이된장국)를 누르면 이동할 경로 */}
            <Route path="/recipe/2" element={<Soddlehlswkdrnr />} />
            
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;