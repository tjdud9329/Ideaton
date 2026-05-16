import React from 'react';
import { useNavigate } from 'react-router-dom';

import bookmarkIcon from '../assets/Icon/bookmarkIcon.svg';
import starIcon from '../assets/Icon/starIcon.svg';
import clockIcon from '../assets/Icon/clockIcon.svg';
const RecipeCard = ({ item }) => {
  const navigate = useNavigate();

  if (!item) return null;

  return (
    <div
      /* 1. 카드 전체 배경을 연한 회색(#F4F4F4)으로 설정 */
      className="flex flex-col w-[calc(50%-6px)] bg-[#F4F4F4] rounded-2xl overflow-hidden cursor-pointer shrink-0"
      onClick={() => navigate(`/recipe/${item.id}`)}
    >
      {/* 2. 이미지 영역: 세로 높이를 160 -> 120으로 줄여서 더 슬림하게 만듦 */}
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

      {/* 3. 하단 정보 영역 (회색 배경 위에 텍스트) */}
      <div className="flex flex-col p-[10px]">
        <span className="font-bold text-[14px] text-[#333333] truncate">
          {item.title}
        </span>

        {/* 배지 디자인: 배경보다 살짝 더 진하거나 밝은 회색으로 강조 */}
        <div className="flex gap-[5px] mt-[8px]">
          <div className="flex items-center gap-[3px] bg-white px-[6px] py-[3px] rounded-[4px] text-[10px] font-semibold text-[#555555] shadow-sm">
            <img src={starIcon} alt="난이도" className="w-[10px] h-[10px]" />
            <span>{item.level}</span>
          </div>

          <div className="flex items-center gap-[3px] bg-white px-[6px] py-[3px] rounded-[4px] text-[10px] font-semibold text-[#555555] shadow-sm">
            <img src={clockIcon} alt="시간" className="w-[10px] h-[10px]" />
            <span>{item.time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
