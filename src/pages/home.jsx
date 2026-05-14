import MyIngredientCard from '../components/MyIngredientCard';
import SeasonalCard from '../components/SeasonalCard';
import RecipeCard from '../components/RecipeCard';
import Navbar from '../components/Layouts/Navbar';
import bellIcon from '../assets/bellIcon.svg';
import chevronIcon from '../assets/chevronIcon.svg';
import didqocn from '../assets/양배추.png';
import clwm from '../assets/치즈.png';
import aotlf from '../assets/매실.png';
import dhdl from '../assets/오이.png';
import qhaehdqlqlaqkq from '../assets/봄동비빔밥.png';
import soddlehlswkdrnr from '../assets/냉이된장국.png';

export const MOCK_DATA = {
  Myingredients: [
    { id: 1, name: '양배추', weight: '400g', day: '2', image: didqocn },
    { id: 2, name: '치즈', weight: '50g', day: '8', image: clwm },
  ],
  Seasonal: [
    {
      id: 1,
      name: '매실',
      weight: '1kg',
      site: '사이트',
      price: '11900',
      image: aotlf,
    },
    {
      id: 2,
      name: '오이',
      weight: '1개',
      site: '사이트',
      price: '1000',
      image: dhdl,
    },
  ],
  Recipes: [
    {
      id: 1,
      title: '봄동 비빔밥',
      level: '초급',
      time: '10분',
      image: qhaehdqlqlaqkq,
    },
    {
      id: 2,
      title: '냉이 된장국',
      level: '중급',
      time: '20분',
      image: soddlehlswkdrnr,
    },
  ],
};

const Home = () => {
  return (
    <div className="mx-[16px] ">
      <div className=" flex overflow-y-auto no-scrollbar justify-between w-full h-[42px] mt-[42px]">
        <h1 className="font-bold text-[28px]">로고</h1>
        <button>
          <img src={bellIcon} alt="알림" className="w-[24px] h-[24px]" />
        </button>
      </div>
      <div className="h-[58px] mt-[10px] ">
        <p className="text-[16px]">반가워요! 지민님 🖐️</p>
        <h3 className="font-bold text-[20px]">
          오늘 봄 제철 봄동비빔밥 어때요?
        </h3>
      </div>
      <div className=" flex items-center justify-center bg-[#F1FFE6] max-w-[121px] h-[30px] mt-[13px] border border-[#7FC24B] rounded-full px-[12px] py-[6px]">
        <p className="text-[#7FC24B] text-[12px] leading-none tracking-tight">
          2026년 5월 봄 시즌
        </p>
      </div>
      <div className="flex max-w-[474px] h-[60px] mt-[32px] gap-[12px] item-center cursor-pointer">
        {MOCK_DATA.Myingredients.map((item) => (
          <MyIngredientCard key={item.id} item={item} />
        ))}
      </div>

      <div className="w-full h-[172px] mt-[20px]">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-bold text-[18px]">이번 달 제철 식재료</h3>
          <div className="cursor-pointer">
            <img src={chevronIcon} alt="화살표" className="w-[24px] h-[24px]" />
          </div>
        </div>
        <div className="mt-[12px] flex flex-col gap-[12px] cursor-pointer">
          {MOCK_DATA.Seasonal.map((item) => (
            <SeasonalCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="w-full h-[508px] mt-[29px] ">
        <div className="flex justify-between items-center w-full ">
          <h3 className="font-bold text-[18px]">추천 레시피</h3>
          <div className="cursor-pointer">
            <img src={chevronIcon} alt="화살표" className="w-[24px] h-[24px]" />
          </div>
        </div>
        <div className="mt-[12px] flex gap-[12px] cursor-pointer">
          {MOCK_DATA.Recipes.map((item) => (
            <RecipeCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
