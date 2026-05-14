import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';

// 1. 서영님이 정리한 Food 및 Icon 폴더 경로를 정확히 반영합니다.
import bomdongImg from '../assets/Food/봄동비빔밥.png';
import chevronIcon from '../assets/Icon/chevronIcon.svg';
import bookmarkIcon from '../assets/Icon/bookmarkIcon.svg';
import plusIcon from '../assets/Icon/plusIcon.svg';
import minusIcon from '../assets/Icon/minusIcon.svg';
import starIcon from '../assets/Icon/starIcon.svg';
import clockIcon from '../assets/Icon/clockIcon.svg';

const Qhaehdqlqlaqkq = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-x-hidden font-['Pretendard']">
      {/* 2. Status Bar: 피그마 수치 53px 반영 */}
      <div className="h-[53px] w-full pt-[18px] pr-[26px] pb-[14px] pl-[27px] flex justify-between items-end">
        <span className="text-[15px] font-bold tracking-[-0.02em]">9:41</span>
        <div className="flex gap-1"> {/* 시스템 아이콘 영역 */} </div>
      </div>

      {/* 3. Header: 높이 44px, 꺽쇠 방향 180도 회전 */}
      <div className="h-[44px] px-[16px] flex justify-between items-center border-b-[0.4px] border-black/20">
        <button onClick={() => navigate(-1)}>
          <img src={chevronIcon} alt="back" className="w-6 h-6 rotate-180" />
        </button>
        <button>
          <img src={bookmarkIcon} alt="save" className="w-6 h-6" />
        </button>
      </div>

      <div className="overflow-y-auto pb-[120px]">
        {/* 4. 이미지 영역: 피그마 높이 342px 반영 */}
        <div className="w-[390px] h-[342px] bg-[#D9D9D9]">
          <img src={bomdongImg} alt="봄동 비빔밥" className="w-full h-full object-cover" />
        </div>

        <div className="px-[16px] pt-[24px]">
          {/* 5. 타이틀 및 설명: SB 18px / M 14px 반영 */}
          <h1 className="text-[18px] font-semibold leading-[150%] tracking-[-0.02em] text-black mb-[8px]">
            봄동 비빔밥
          </h1>
          <p className="text-[14px] font-medium leading-[150%] tracking-[-0.02em] text-[#A3A3A3] mb-[20px]">
            아삭한 봄동과 매콤달콤한 고추장 소스의 환상적인 조화!
          </p>

          {/* 6. 인분 조절 및 태그: 텍스트 기호 대신 서영님의 아이콘 파일 적용 */}
          <div className="flex justify-between items-center mb-[20px]">
            <div className="w-[145px] h-[47px] flex items-center justify-between border border-[#7FC24B] rounded-[16px] px-[12px] py-[4px]">
              <button><img src={minusIcon} alt="감소" className="w-6 h-6" /></button>
              <span className="text-[16px] font-medium text-black">1 <span className="text-[14px]">인분</span></span>
              <button><img src={plusIcon} alt="증가" className="w-6 h-6" /></button>
            </div>
            
            <div className="flex gap-[8px]">
              <div className="h-[24px] bg-[#E8E8EA] px-[6px] py-[4px] rounded-[4px] text-[10px] flex items-center gap-[4px]">
                <img src={starIcon} alt="star" className="w-[12px] h-[12px]" />
                <span className="text-[#555555]">난이도</span>
              </div>
              <div className="h-[24px] bg-[#E8E8EA] px-[6px] py-[4px] rounded-[4px] text-[10px] flex items-center gap-[4px]">
                <img src={clockIcon} alt="time" className="w-[12px] h-[12px]" />
                <span className="text-[#555555]">25분</span>
              </div>
            </div>
          </div>

          {/* 7. 탭 메뉴: 선택된 탭 171x32px */}
          <div className="w-[358px] h-[40px] flex bg-[#F4F4F4] rounded-[8px] p-[4px] mb-[20px]">
            <button className="w-[171px] h-[32px] bg-white rounded-[100px] shadow-sm font-bold text-[14px] text-black">필요한 재료</button>
            <button className="flex-1 text-[#A3A3A3] text-[14px]">조리 도구</button>
          </div>

          {/* 8. 재료 리스트 */}
          <div className="flex flex-col border-t border-[#999999]">
            <RecipeItem name="봄동" amount="100g (1단)" isSubstitutable={false} />
            <RecipeItem name="밥" amount="200g (1공기)" isSubstitutable={false} />
            <RecipeItem 
              name="매실청" 
              amount="1T 스푼" 
              isSubstitutable={true} 
              alternatives={[{ name: '설탕', amount: '1T 스푼' }, { name: '올리고당', amount: '1T 스푼' }]} 
            />
            {/* 나머지 재료 생략... */}
          </div>
        </div>
      </div>

      {/* 9. 요리 시작 버튼: Fixed 하단 고정, 높이 52px */}
      <div className="fixed bottom-[30px] left-0 w-full px-[16px] pointer-events-none">
        <button className="w-[358px] h-[52px] bg-[#D7D7D7] rounded-[16px] font-bold text-[16px] text-black pointer-events-auto shadow-md">
          요리 시작
        </button>
      </div>

      {/* 10. Home Indicator 영역 */}
      <div className="fixed bottom-0 w-full h-[30px] bg-white flex justify-center items-center pointer-events-none">
        <div className="w-[134px] h-[5px] bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Qhaehdqlqlaqkq;