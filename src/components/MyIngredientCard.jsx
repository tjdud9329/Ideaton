import React from 'react';

const MyIngredientCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="flex items-center min-w-[160px] h-[60px] bg-[#F4F4F4] rounded-xl p-[12px] gap-[12px] shrink-0">
      {/* 직접 구하신 재료 이미지 */}
      <div className="w-[36px] h-[36px] bg-[#E5E5E5] rounded-md overflow-hidden shrink-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>

      <div className="flex flex-col flex-1">
        <span className="text-[14px] font-bold text-[#333333] leading-tight truncate">
          {item.name}
        </span>
        <span className="text-[12px] text-[#A3A3A3] leading-tight mt-[2px]">
          {item.weight} · 냉장
        </span>
      </div>

      <div className="text-[14px] font-bold text-[#333333]">D-{item.day}</div>
    </div>
  );
};

export default MyIngredientCard;
