import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';
// assets에서 실제 이미지를 불러옵니다.
import bomdongImg from '../assets/봄동비빔밥.png';

const Qhaehdqlqlaqkq = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20 overflow-y-auto">
      {/* 상단 이미지 영역: 실제 assets 이미지를 적용 */}
      <div className="relative w-full h-[300px]">
        <img 
          src={bomdongImg} 
          alt="봄동 비빔밥" 
          className="w-full h-full object-cover" 
        />
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-[50px] left-[16px] w-8 h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md"
        >
          ←
        </button>
      </div>

      <div className="px-[24px] pt-[24px]">
        <h1 className="text-[20px] font-bold text-black mb-[8px]">봄동 비빔밥</h1>
        <p className="text-[12px] text-[#A3A3A3] mb-[20px]">아삭한 봄동과 매콤달콤한 고추장 소스의 환상적인 조화!</p>

        {/* 탭 메뉴 */}
        <div className="flex bg-[#F4F4F4] rounded-lg p-1 mb-[16px]">
          <button className="flex-1 py-2 bg-white rounded-md shadow-sm font-bold text-[14px]">필요한 재료</button>
          <button className="flex-1 py-2 text-[#A3A3A3] text-[14px]">조리 방법</button>
        </div>

        {/* 재료 리스트: 데모용 하드코딩 */}
        <div className="flex flex-col">
          <RecipeItem name="봄동" amount="100g (1단)" isSubstitutable={false} />
          <RecipeItem name="밥" amount="200g (1공기)" isSubstitutable={false} />
          <RecipeItem name="고추장" amount="2 숟가락" isSubstitutable={false} />
          <RecipeItem 
            name="참기름" 
            amount="1T 스푼" 
            isSubstitutable={true} 
            alternatives={[{ name: '들기름', price: '12,000' }, { name: '참깨', price: '5,000' }]} 
          />
        </div>
      </div>
    </div>
  );
};

export default Qhaehdqlqlaqkq;