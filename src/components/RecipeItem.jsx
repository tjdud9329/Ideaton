import React, { useState } from 'react';

const RecipeItem = ({ name, amount, isSubstitutable, alternatives = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-b border-[#F4F4F4]">
      {/* 재료 행 */}
      <div 
        className="flex justify-between items-center py-[14px] cursor-pointer"
        onClick={() => isSubstitutable && setIsOpen(!isOpen)}
      >
        <div className="relative inline-block">
          {/* 텍스트와 동일한 색상의 실선 밑줄 적용 */}
          <span className={`text-[16px] text-[#333333] ${isSubstitutable ? 'border-b border-[#333333]' : ''}`}>
            {name}
          </span>
        </div>
        <div className="text-[16px] text-[#A3A3A3]">{amount}</div>
      </div>

      {/* 클릭 시 나타나는 리스트 */}
      {isOpen && isSubstitutable && (
        <div className="bg-[#F9F9F9] px-[16px] py-[12px] mb-[10px] rounded-lg border border-[#E5E5E5]">
          <p className="text-[12px] text-[#999999] font-bold mb-[8px]">대체 가능한 재료</p>
          <div className="flex flex-col gap-[6px]">
            {alternatives.map((alt, idx) => (
              <div key={idx} className="flex justify-between text-[14px]">
                <span className="text-[#555555]">{alt.name}</span>
                <span className="text-[#A3A3A3]">{alt.price}원</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeItem;