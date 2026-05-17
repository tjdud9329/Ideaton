import React from 'react';
import { useNavigate } from 'react-router-dom';

import bookmarkIcon from '../assets/Icon/bookmarkIcon.svg';

const RecipeCard = ({ item }) => {
  const navigate = useNavigate();

  if (!item) return null;

  return (
    <div
      className="flex flex-col w-[calc(50%-6px)] bg-[#F4F4F4] rounded-2xl overflow-hidden cursor-pointer shrink-0"
      onClick={() => navigate(`/recipe/${item.id}`)}
    >
      {/* 이미지 영역 */}
      <div className="relative w-full h-[120px] bg-[#D9D9D9] shrink-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover block"
          />
        ) : null}

        {/* 북마크 아이콘 */}
        <div className="absolute top-[10px] right-[10px]">
          <img src={bookmarkIcon} alt="북마크" className="w-[18px] h-[18px]" />
        </div>
      </div>

      {/* 하단 정보 영역 */}
      <div className="flex flex-col p-[10px]">
        <span className="font-bold text-[14px] text-[#333333] truncate">
          {item.title}
        </span>

        {/* 배지 디자인: 안쪽은 비우고 테두리 선만 살린 스타일 */}
        <div className="flex gap-[5px] mt-[8px]">
          {/* 1. 초급(난이도) 배지 - 빈 별 아이콘 */}
          <div className="flex items-center gap-[3.5px] bg-[#F1FFE6] border border-[#7FC24B] px-[6px] py-[3px] rounded-[4px] text-[10px] font-bold text-[#7FC24B]">
            {/* fill="none"으로 속을 비우고 stroke로 선만 초록색을 줍니다 */}
            <svg
              className="w-[11px] h-[11px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>{item.level}</span>
          </div>

          {/* 2. 시간 배지 - 시계 아이콘 */}
          <div className="flex items-center gap-[3.5px] bg-[#F1FFE6] border border-[#7FC24B] px-[6px] py-[3px] rounded-[4px] text-[10px] font-bold text-[#7FC24B]">
            <svg
              className="w-[11px] h-[11px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{item.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
