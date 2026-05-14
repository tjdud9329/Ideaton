import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';

const Qhaehdqlqlaqkq = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20">
      <div className="relative w-full h-[250px] bg-[#D9D9D9] flex items-center justify-center">
        <span className="text-gray-500">봄동 비빔밥 이미지</span>
        <button onClick={() => navigate(-1)} className="absolute top-[40px] left-[16px] w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">←</button>
      </div>

      <div className="px-[16px] pt-[20px]">
        <h1 className="text-[24px] font-bold text-[#333333] mb-[20px]">봄동 비빔밥</h1>
        
        <div className="flex border-b border-[#F4F4F4] mb-[16px]">
          <button className="flex-1 py-[10px] font-bold border-b-2 border-[#333333]">필요한 재료</button>
          <button className="flex-1 py-[10px] text-[#A3A3A3]">조리 방법</button>
        </div>

        <div className="flex flex-col">
          <RecipeItem name="봄동" amount="100g" isSubstitutable={false} />
          <RecipeItem name="밥" amount="1공기" isSubstitutable={false} />
          <RecipeItem name="간장" amount="1T" isSubstitutable={false} />
          <RecipeItem name="고춧가루" amount="1T" isSubstitutable={false} />
          <RecipeItem name="다진마늘" amount="0.5T" isSubstitutable={false} />
          <RecipeItem 
            name="참기름" 
            amount="1T" 
            isSubstitutable={true} 
            alternatives={[{ name: '들기름', price: '12,000' }, { name: '참깨', price: '5,000' }]} 
          />
        </div>
      </div>
    </div>
  );
};

export default Qhaehdqlqlaqkq;