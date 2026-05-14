import React from 'react';

const SeasonalCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="flex justify-between items-center w-full h-[64px] bg-[#FFEBEB] rounded-xl px-[16px] py-[12px]">
      <div className="flex items-center gap-[12px]">
        {/* 제철 식재료 원형 이미지 */}
        <div className="w-[40px] h-[40px] bg-[#C4C4C4] rounded-full overflow-hidden shrink-0">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          ) : null}
        </div>

        <div className="flex flex-col">
          <span className="text-[12px] text-[#A3A3A3] leading-tight">
            {item.site} · {item.weight}
          </span>
          <span className="text-[16px] font-bold text-[#333333] leading-tight mt-[2px]">
            {item.name}
          </span>
        </div>
      </div>

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
