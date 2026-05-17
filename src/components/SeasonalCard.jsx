import React from 'react';

const SeasonalCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="flex justify-between items-center w-full h-[64px] bg-[#F4F4F4] rounded-xl px-[16px] py-[12px]">
      <div className="flex items-center gap-[12px]">
        {/* 제철 식재료 원형 이미지 */}
        <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-full overflow-hidden shrink-0">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>

        {/* 텍스트 영역: 위아래 순서 변경 */}
        <div className="flex flex-col">
          {/* 1. 상품명(name)을 위로 올리고 글씨를 강조합니다 */}
          <span className="text-[16px] font-bold text-[#333333] leading-tight">
            {item.name}
          </span>
          {/* 2. 출처 및 무게(site · weight)를 아래로 내리고 연하게 처리합니다 */}
          <span className="text-[12px] text-[#A3A3A3] leading-tight mt-[4px]">
            {item.site} · {item.weight}
          </span>
        </div>
      </div>

      {/* 우측 가격 및 상태 표시 영역 */}
      <div className="flex items-center gap-[6px]">
        <span className="text-[16px] font-bold text-[#333333]">
          {Number(item.price).toLocaleString()}원
        </span>
        <div className="w-[6px] h-[6px] bg-[#7FC24B] rounded-full"></div>
      </div>
    </div>
  );
};

export default SeasonalCard;
