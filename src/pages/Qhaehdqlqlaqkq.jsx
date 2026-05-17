import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';

// 필요한 에셋들 (서영님이 정리한 경로 기준)
import bomdongImg from '../assets/Food/bomdong-bibimbap.png';
import chevronRightIcon from '../assets/Icon/chevron-rightIcon.svg';
import bookmarkIcon from '../assets/Icon/bookmarkIcon.svg';
import plusIcon from '../assets/Icon/plusIcon.svg';
import minusIcon from '../assets/Icon/minusIcon.svg';
import starIcon from '../assets/Icon/starIcon.svg';
import clockIcon from '../assets/Icon/clockIcon.svg';

const Qhaehdqlqlaqkq = () => {
  const navigate = useNavigate();

  // 인분 수를 저장할 상태 변수 (기본값 1인분)
  const [servings, setServings] = useState(1);

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
          <img
            src={chevronRightIcon}
            alt="back"
            className="w-6 h-6 rotate-180"
          />
        </button>
        <button>
          <img src={bookmarkIcon} alt="save" className="w-6 h-6" />
        </button>
      </div>

      <div className="overflow-y-auto pb-[150px]">
        {/* 3. 이미지 영역 (342px) */}
        <div className="w-full h-[342px] bg-[#D9D9D9]">
          <img
            src={bomdongImg}
            alt="봄동 비빔밥"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-[16px] pt-[24px]">
          {/* 4. 타이틀 및 설명 */}
          <h1 className="text-[18px] font-semibold leading-[150%] tracking-[-0.02em] text-black mb-[8px]">
            봄동 비빔밥
          </h1>
          <p className="text-[14px] font-medium leading-[150%] tracking-[-0.02em] text-[#A3A3A3] mb-[20px]">
            아삭한 봄동과 매콤달콤한 고추장 소스의 환상적인 조화!
          </p>

          {/* 5. 인분 조절 및 태그 */}
          <div className="flex justify-between items-center mb-[20px]">
            <div className="w-[145px] h-[47px] flex items-center justify-between border border-[#7FC24B] rounded-[16px] px-[12px] py-[4px]">
              <button
                onClick={() => setServings((prev) => (prev > 1 ? prev - 1 : 1))}
                className="w-[24px] h-[24px] flex items-center justify-center bg-[#EBF5E6] rounded-full active:opacity-70 transition-opacity"
              >
                <img src={minusIcon} alt="감소" className="w-[12px] h-[12px]" />
              </button>

              <span className="text-[20px] font-semibold text-black tracking-[-0.02em] flex items-baseline">
                {servings}
                <span className="text-[14px] font-medium text-black ml-[2px]">인분</span>
              </span>

              <button
                onClick={() => setServings((prev) => prev + 1)}
                className="w-[24px] h-[24px] flex items-center justify-center bg-[#EBF5E6] rounded-full active:opacity-70 transition-opacity"
              >
                <img src={plusIcon} alt="증가" className="w-[12px] h-[12px]" />
              </button>
            </div>

            <div className="flex gap-[8px]">
              <div className="h-[24px] bg-[#EBF5E6] border border-[#1E8219] px-[8px] py-[4px] rounded-[4px] text-[10px] font-semibold flex items-center gap-[4px]">
                <img src={starIcon} alt="star" className="w-[12px] h-[12px]" />
                <span className="text-[#1E8219]">난이도</span>
              </div>
              <div className="h-[24px] bg-[#EBF5E6] border border-[#1E8219] px-[8px] py-[4px] rounded-[4px] text-[10px] font-semibold flex items-center gap-[4px]">
                <img src={clockIcon} alt="time" className="w-[12px] h-[12px]" />
                <span className="text-[#1E8219]">25분</span>
              </div>
            </div>
          </div>

          {/* 6. 탭 메뉴 */}
          <div className="w-full h-[40px] flex bg-[#D4E9C3] rounded-[100px] p-[4px] mb-[20px]">
            <button className="w-[171px] h-[32px] bg-white rounded-[100px] shadow-sm font-medium text-[14px] text-black tracking-[-0.02em]">
              필요한 재료
            </button>
            <button className="flex-1 text-[#737373] text-[14px] font-medium tracking-[-0.02em]">
              조리 도구
            </button>
          </div>

          {/* 7. 재료 리스트 */}
          <div className="flex flex-col border-t border-[#999999]">
            <RecipeItem
              name="봄동"
              amount={`${100 * servings}g (${servings}단)`}
              isSubstitutable={false}
            />
            <RecipeItem
              name="밥"
              amount={`${200 * servings}g (${servings}공기)`}
              isSubstitutable={false}
            />
            <RecipeItem
              name="매실청"
              amount={`${servings}T 스푼`}
              isSubstitutable={true}
              alternatives={[
                { name: '설탕', amount: `${servings}T 스푼` },
                { name: '올리고당', amount: `${servings}T 스푼` },
              ]}
            />
            <RecipeItem
              name="된장"
              amount={`${servings}T 스푼`}
              isSubstitutable={false}
            />
            <RecipeItem
              name="고춧가루"
              amount={`${2.5 * servings} 숟가락`}
              isSubstitutable={false}
            />
            <RecipeItem
              name="멸치액젓"
              amount={`${1.5 * servings}T 스푼`}
              isSubstitutable={false}
            />
            <RecipeItem
              name="참기름"
              amount={`${2 * servings}T 스푼`}
              isSubstitutable={false}
            />
          </div>
        </div>
      </div>

      {/* 8. 요리 시작 버튼: [최종 정정] 피그마 인스펙터 green/600 (#52AC0D) 적용 */}
      <div className="absolute bottom-[40px] left-0 w-full px-[16px] z-50">
        <button className="w-full h-[52px] bg-[#52AC0D] rounded-[16px] font-bold text-[16px] text-white shadow-md active:bg-[#438B0B] transition-colors">
          요리 시작
        </button>
      </div>

      <div className="absolute bottom-0 w-full h-[30px] bg-white flex justify-center items-center">
        <div className="w-[134px] h-[5px] bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Qhaehdqlqlaqkq;