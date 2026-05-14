import React, { useState } from 'react';

const RecipeItem = ({ name, amount, isSubstitutable, alternatives = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 메인 재료 행: 높이 40px, 패딩 상하 8px, 좌우 16px */}
      <div 
        className={`flex justify-between items-center h-[40px] px-[16px] cursor-pointer ${
          isOpen && isSubstitutable ? 'border-b border-dashed border-[#999999]' : 'border-b border-[#999999]'
        }`}
        onClick={() => isSubstitutable && setIsOpen(!isOpen)}
      >
        <div className="relative inline-block">
          <span className={`text-[16px] text-[#333333] leading-[150%] ${isSubstitutable ? 'border-b border-solid border-[#333333]' : ''}`}>
            {name}
          </span>
        </div>
        <div className="text-[16px] text-[#999999] leading-[150%] tracking-[-0.02em]">{amount}</div>
      </div>

      {/* 대체 재료 영역: 하단 실선으로 마감 */}
      {isOpen && isSubstitutable && (
        <div className="flex flex-col bg-white">
          {alternatives.map((alt, idx) => (
            <div 
              key={idx} 
              className="flex justify-between items-center h-[40px] pl-[32px] pr-[16px] border-b border-solid border-[#999999]"
            >
              <span className="text-[16px] text-[#666666] leading-[150%]">{alt.name}</span>
              <span className="text-[16px] text-[#999999] leading-[150%]">{alt.amount}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeItem;