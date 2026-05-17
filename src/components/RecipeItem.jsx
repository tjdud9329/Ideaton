 import React, { useState } from 'react';

const RecipeItem = ({ name, amount, isSubstitutable, alternatives = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col bg-white">
      {/* 메인 재료 행: 높이 40px, 패딩 상하 8px, 좌우 16px */}
      {/* 구분선 색상도 통일감을 위해 가이드 규격을 따릅니다. */}
      <div 
        className={`flex justify-between items-center h-[40px] px-[16px] cursor-pointer ${
          isOpen && isSubstitutable ? 'border-b border-dashed border-[#999999]' : 'border-b border-[#999999]'
        }`}
        onClick={() => isSubstitutable && setIsOpen(!isOpen)}
      >
        <div className="relative inline-block">
          {/* [정정] 피그마 인스펙터에 명시된 글자 색상 #8D8292를 정확하게 반영 */}
          <span className={`text-[16px] text-[#8D8292] leading-[150%] ${isSubstitutable ? 'border-b border-solid border-[#8D8292]' : ''}`}>
            {name}
          </span>
        </div>
        {/* [정정] 피그마 인스펙터에 명시된 수량/중량 글자 색상 #8D8292를 정확하게 반영 */}
        <div className="text-[16px] text-[#8D8292] leading-[150%] tracking-[-0.02em]">{amount}</div>
      </div>

      {/* 대체 재료 영역 */}
      {isOpen && isSubstitutable && (
        <div className="flex flex-col bg-white">
          {alternatives.map((alt, idx) => (
            <div 
              key={idx} 
              className="flex justify-between items-center h-[40px] pl-[32px] pr-[16px] border-b border-solid border-[#999999]"
            >
              {/* 대체 재료 텍스트도 매칭에 맞게 톤 조절 */}
              <span className="text-[16px] text-[#8D8292] leading-[150%]">{alt.name}</span>
              <span className="text-[16px] text-[#8D8292] leading-[150%]">{alt.amount}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeItem;