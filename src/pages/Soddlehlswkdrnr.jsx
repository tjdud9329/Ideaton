import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';
// assets에서 실제 이미지를 불러옵니다.
import naengiImg from '../assets/냉이된장국.png';

const Soddlehlswkdrnr = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20 overflow-y-auto">
      {/* 상단 이미지 영역: 실제 assets 이미지를 적용 */}
      <div className="relative w-full h-[300px]">
        <img 
          src={naengiImg} 
          alt="냉이 된장국" 
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
        <h1 className="text-[20px] font-bold text-black mb-[8px]">냉이 된장국</h1>
        <p className="text-[12px] text-[#A3A3A3] mb-[20px]">봄 내음 가득한 냉이와 구수한 된장의 깊은 맛!</p>

        <div className="flex bg-[#F4F4F4] rounded-lg p-1 mb-[16px]">
          <button className="flex-1 py-2 bg-white rounded-md shadow-sm font-bold text-[14px]">필요한 재료</button>
          <button className="flex-1 py-2 text-[#A3A3A3] text-[14px]">조리 방법</button>
        </div>

        <div className="flex flex-col">
          <RecipeItem name="냉이" amount="1봉지" isSubstitutable={false} />
          <RecipeItem name="두부" amount="1/2모" isSubstitutable={false} />
          <RecipeItem name="된장" amount="2T 스푼" isSubstitutable={false} />
          <RecipeItem 
            name="멸치육수" 
            amount="500ml" 
            isSubstitutable={true} 
            alternatives={[{ name: '다시마육수', price: '2,000' }, { name: '치킨스톡', price: '4,500' }]} 
          />
        </div>
      </div>
    </div>
  );
};

export default Soddlehlswkdrnr;