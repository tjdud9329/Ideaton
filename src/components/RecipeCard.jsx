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
      className="flex flex-col w-[160px] min-w-[160px] cursor-pointer shrink-0"
      onClick={() => navigate(`/recipe/${item.id}`)}
    >
      {/* 레시피 썸네일 이미지 영역 */}
      <div className="relative w-full h-[120px] bg-[#E5E5E5] rounded-xl overflow-hidden shrink-0">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover block"
          />
        ) : (
          <div className="w-full h-full bg-[#E5E5E5]" />
        )}

        {/* 2. 북마크 아이콘: SVG를 이미지 파일로 대체 */}
        <div className="absolute top-[10px] right-[10px]">
          <img src={bookmarkIcon} alt="북마크" className="w-[20px] h-[20px]" />
        </div>
      </div>

      {/* 텍스트 영역 */}
      <span className="font-bold text-[16px] text-[#333333] mt-[12px] truncate w-full">
        {item.title}
      </span>

      {/* 하단 배지 영역 */}
      <div className="flex gap-[6px] mt-[8px]">
        {/* 3. 난이도 배지: 별표 아이콘 이미지로 대체 */}
        <div className="flex items-center gap-[4px] bg-[#F4F4F4] px-[8px] py-[4px] rounded-md text-[11px] text-[#555555]">
          <img src={starIcon} alt="난이도" className="w-[12px] h-[12px]" />
          <span>{item.level}</span>
        </div>

        {/* 4. 시간 배지: 시계 아이콘 이미지로 대체 */}
        <div className="flex items-center gap-[4px] bg-[#F4F4F4] px-[8px] py-[4px] rounded-md text-[11px] text-[#555555]">
          <img src={clockIcon} alt="시간" className="w-[12px] h-[12px]" />
          <span>{item.time}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
