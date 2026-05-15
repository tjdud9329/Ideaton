import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';

// 필요한 에셋들 (서영님이 정리한 경로 기준)
import bomdongImg from '../assets/Food/봄동비빔밥.png';
import chevronRightIcon from '../assets/Icon/chevron-rightIcon.svg';
import bookmarkIcon from '../assets/Icon/bookmarkIcon.svg';
import plusIcon from '../assets/Icon/plusIcon.svg';
import minusIcon from '../assets/Icon/minusIcon.svg';
import starIcon from '../assets/Icon/starIcon.svg';
import clockIcon from '../assets/Icon/clockIcon.svg';

const Qhaehdqlqlaqkq = () => {
  const navigate = useNavigate();

  return (
    // 전체 컨테이너에 max-w-[390px]와 mx-auto를 주어 중앙 정렬을 유지합니다.
    <div className="flex flex-col min-h-screen bg-white relative overflow-x-hidden font-['Pretendard'] max-w-[390px] mx-auto border-x border-gray-100">
      
      {/* 1. Status Bar (53px) */}
      <div className="h-[53px] w-full pt-[18px] pr-[26px] pb-[14px] pl-[27px] flex justify-between items-end">
        <span className="text-[15px] font-bold tracking-[-0.02em]">9:41</span>
        <div className="flex gap-1"></div>
      </div>

      {/* 2. Header (44px) */}
      <div className="h-[44px] px-[16px] flex justify-between items-center border-b-[0.4px] border-black/20">
        <button onClick={() => navigate(-1)}>
          <img src={chevronRightIcon} alt="back" className="w-6 h-6 rotate-180" />
        </button>
        <button>
          <img src={bookmarkIcon} alt="save" className="w-6 h-6" />
        </button>
      </div>

      <div className="overflow-y-auto pb-[150px]">
        {/* 3. 이미지 영역 (342px) */}
        <div className="w-full h-[342px] bg-[#D9D9D9]">
          <img src={bomdongImg} alt="봄동 비빔밥" className="w-full h-full object-cover" />
        </div>

        <div className="px-[16px] pt-[24px]">
          {/* 4. 타이틀 및 설명 */}
          <h1 className="text-[18px] font-semibold leading-[150%] tracking-[-0.02em] text-black mb-[8px]">
            봄동 비빔밥
          </h1>
          <p className="text-[14px] font-medium leading-[150%] tracking-[-0.02em] text-[#A3A3A3] mb-[20px]">
            아삭한 봄동과 매콤달콤한 고추장 소스의 환상적인 조화!
          </p>

          {/* 5. 인분 조절 및 태그: [수정] 버튼 뒤 원형 배경 추가 */}
          <div className="flex justify-between items-center mb-[20px]">
            <div className="w-[145px] h-[47px] flex items-center justify-between border border-[#7FC24B] rounded-[16px] px-[12px] py-[4px]">
              {/* 감소 버튼: 24x24 원형 배경 */}
              <button className="w-[24px] h-[24px] flex items-center justify-center bg-[#EBF5E6] rounded-full">
                <img src={minusIcon} alt="감소" className="w-[12px] h-[12px]" />
              </button>
              
              <span className="text-[16px] font-medium text-black">
                1 <span className="text-[14px]">인분</span>
              </span>
              
              {/* 증가 버튼: 24x24 원형 배경 */}
              <button className="w-[24px] h-[24px] flex items-center justify-center bg-[#EBF5E6] rounded-full">
                <img src={plusIcon} alt="증가" className="w-[12px] h-[12px]" />
              </button>
            </div>
            
            <div className="flex gap-[8px]">
              <div className="h-[24px] bg-[#E8E8EA] px-[8px] py-[4px] rounded-[4px] text-[10px] flex items-center gap-[4px]">
                <img src={starIcon} alt="star" className="w-[12px] h-[12px]" />
                <span className="text-[#555555]">난이도</span>
              </div>
              <div className="h-[24px] bg-[#E8E8EA] px-[8px] py-[4px] rounded-[4px] text-[10px] flex items-center gap-[4px]">
                <img src={clockIcon} alt="time" className="w-[12px] h-[12px]" />
                <span className="text-[#555555]">25분</span>
              </div>
            </div>
          </div>

          {/* 6. 탭 메뉴 */}
          <div className="w-full h-[40px] flex bg-[#F4F4F4] rounded-[8px] p-[4px] mb-[20px]">
            <button className="w-[171px] h-[32px] bg-white rounded-[100px] shadow-sm font-bold text-[14px] text-black">필요한 재료</button>
            <button className="flex-1 text-[#A3A3A3] text-[14px]">조리 도구</button>
          </div>

          {/* 7. 재료 리스트: 민서님이 편하신 하드코딩 방식으로 유지합니다. */}
          <div className="flex flex-col border-t border-[#999999]">
            <RecipeItem name="봄동" amount="100g (1단)" isSubstitutable={false} />
            <RecipeItem name="밥" amount="200g (1공기)" isSubstitutable={false} />
            <RecipeItem 
              name="매실청" 
              amount="1T 스푼" 
              isSubstitutable={true} 
              alternatives={[{ name: '설탕', amount: '1T 스푼' }, { name: '올리고당', amount: '1T 스푼' }]} 
            />
            <RecipeItem name="된장" amount="1T 스푼" isSubstitutable={false} />
            <RecipeItem name="고춧가루" amount="2.5 숟가락" isSubstitutable={false} />
            <RecipeItem name="멸치액젓" amount="1.5T 스푼" isSubstitutable={false} />
            <RecipeItem name="참기름" amount="2T 스푼" isSubstitutable={false} />
          </div>
        </div>
      </div>

      {/* 8. [수정] 요리 시작 버튼: absolute를 사용하여 390px 프레임 하단에 딱 붙입니다. */}
      <div className="absolute bottom-[40px] left-0 w-full px-[16px] z-50">
        <button className="w-full h-[52px] bg-[#D7D7D7] rounded-[16px] font-bold text-[16px] text-black shadow-md">
          요리 시작
        </button>
      </div>

      {/* 9. Home Indicator 영역 */}
      <div className="absolute bottom-0 w-full h-[30px] bg-white flex justify-center items-center">
        <div className="w-[134px] h-[5px] bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Qhaehdqlqlaqkq;