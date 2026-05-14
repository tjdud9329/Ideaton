import React from 'react';

const RecipeCard = ({ item }) => {
  if (!item) return null;

  return (
    <div className="flex flex-col w-[160px] cursor-pointer shrink-0">
      {/* 레시피 썸네일 이미지 영역 */}
      <div className="relative w-full h-[120px] bg-[#E5E5E5] rounded-xl overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        ) : null}

        {/* 북마크 아이콘 */}
        <div className="absolute top-[10px] right-[10px]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 21V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H15C15.5304 1 16.0391 1.21071 16.4142 1.58579C16.7893 1.96086 17 2.46957 17 3V21L9 16L1 21Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <span className="font-bold text-[16px] text-[#333333] mt-[12px] truncate">
        {item.title}
      </span>

      <div className="flex gap-[6px] mt-[8px]">
        <div className="flex items-center gap-[4px] bg-[#F4F4F4] px-[8px] py-[4px] rounded-md text-[11px] text-[#555555]">
          <span>☆</span>
          <span>{item.level}</span>
        </div>
        <div className="flex items-center gap-[4px] bg-[#F4F4F4] px-[8px] py-[4px] rounded-md text-[11px] text-[#555555]">
          <span>🕒</span>
          <span>{item.time}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
