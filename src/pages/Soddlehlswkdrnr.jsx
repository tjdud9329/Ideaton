import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';

const Soddlehlswkdrnr = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20">
      <div className="relative w-full h-[250px] bg-[#D9D9D9] flex items-center justify-center">
        <span className="text-gray-500">냉이 된장국 이미지</span>
        <button onClick={() => navigate(-1)} className="absolute top-[40px] left-[16px] w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">←</button>
      </div>

      <div className="px-[16px] pt-[20px]">
        <h1 className="text-[24px] font-bold text-[#333333] mb-[20px]">냉이 된장국</h1>
        
        <div className="flex border-b border-[#F4F4F4] mb-[16px]">
          <button className="flex-1 py-[10px] font-bold border-b-2 border-[#333333]">필요한 재료</button>
          <button className="flex-1 py-[10px] text-[#A3A3A3]">조리 방법</button>
        </div>

        <div className="flex flex-col">
          <RecipeItem name="냉이" amount="1봉지" isSubstitutable={false} />
          <RecipeItem name="두부" amount="1/2모" isSubstitutable={false} />
          <RecipeItem name="된장" amount="2T" isSubstitutable={false} />
          <RecipeItem 
            name="멸치육수" 
            amount="500ml" 
            isSubstitutable={true} 
            alternatives={[{ name: '다시마육수', price: '2,000' }]} 
          />
          <RecipeItem name="대파" amount="1/4대" isSubstitutable={false} />
        </div>
      </div>
    </div>
  );
};

export default Soddlehlswkdrnr;