import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main, { MOCK_DATA } from './pages/home'; // { MOCK_DATA } 추가 임포트
import RecipeDetail from './pages/RecipeDetail'; // RecipeDetail 컴포넌트 추가

function App() {
  return (
    <BrowserRouter>
      {/* 배경색을 주어 아이폰 프레임이 돋보이게 합니다 */}
      <div className="min-h-screen bg-gray-200 flex justify-center">
        {/* 아이폰 13 기준 너비: 390px */}
        <div className="relative w-full max-w-[390px] min-h-screen bg-white shadow-2xl flex flex-col overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Main />} />
            {/* 새로운 상세 페이지 경로만 추가했습니다. recipes 데이터를 prop으로 넘겨줍니다. */}
            <Route path="/recipe/:id" element={<RecipeDetail recipes={MOCK_DATA.Recipes} />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;