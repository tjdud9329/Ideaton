import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';

/**
 * @description 레시피 상세 페이지 컴포넌트
 * @param {Array} recipes - MOCK_DATA에서 넘어온 레시피 전체 리스트
 */
const RecipeDetail = ({ recipes }) => {
  const navigate = useNavigate();
  
  // 1. URL 파라미터에서 레시피 ID를 추출합니다. (예: /recipe/1 -> id는 1)
  const { id } = useParams();

  // 2. 전체 레시피 리스트에서 현재 ID와 일치하는 레시피 정보를 찾습니다.
  // URL의 id는 문자열이므로 숫자로 변환(parseInt)하여 비교합니다.
  const recipe = recipes.find(r => r.id === parseInt(id));

  // 3. 예외 처리: 만약 일치하는 레시피가 없을 경우 에러 문구를 보여줍니다.
  if (!recipe) return <div className="p-10 text-center">레시피를 찾을 수 없습니다.</div>;

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20">
      
      {/* --- 상단 헤더 이미지 섹션 --- */}
      <div className="relative w-full h-[250px]">
        {/* 레시피 대표 이미지 */}
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover" 
        />
        
        {/* 뒤로가기 버튼: 이전 페이지(홈 화면)로 이동 */}
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-[40px] left-[16px] w-[32px] h-[32px] bg-white/80 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform"
        >
          ←
        </button>
      </div>

      {/* --- 본문 콘텐츠 섹션 --- */}
      <div className="px-[16px] pt-[20px]">
        {/* 레시피 제목 */}
        <h1 className="text-[24px] font-bold text-[#333333] mb-[20px]">
          {recipe.title}
        </h1>
        
        {/* 탭 메뉴 (UI 고정 요소) */}
        <div className="flex border-b border-[#F4F4F4] mb-[16px]">
          <button className="flex-1 py-[10px] font-bold border-b-2 border-[#333333]">
            필요한 재료
          </button>
          <button className="flex-1 py-[10px] text-[#A3A3A3]">
            조리 방법
          </button>
        </div>

        {/* --- 재료 목록 섹션 --- */}
        <div className="flex flex-col">
          {/* 해당 레시피가 가진 재료 배열(ingredients)을 순회하며 RecipeItem 부품을 생성합니다. */}
          {recipe.ingredients.map((ing, idx) => (
            <RecipeItem 
              key={idx}                      // 리스트 렌더링을 위한 고유 키
              name={ing.name}                // 재료명
              amount={ing.amount}            // 수량/용량
              isSubstitutable={ing.isSubstitutable} // 대체 가능 여부 (밑줄 표시 로직에 사용)
              alternatives={ing.alternatives} // 대체 가능한 재료 리스트 (클릭 시 토글)
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;