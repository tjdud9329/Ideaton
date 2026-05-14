import MyIngredientCard from '../components/MyIngredientCard';
import SeasonalCard from '../components/SeasonalCard';
import RecipeCard from '../components/RecipeCard';
import Navbar from '../components/Layouts/Navbar';
import bellIcon from '../assets/Icon/bellIcon.svg';
import chevronIcon from '../assets/Icon/chevron-rightIcon.svg';
import { MyIngredients, Seasonal, Recipes } from '../mocks/Mockdata';

const Home = () => {
  return (
    <div className="mx-[16px] ">
      <div className=" flex overflow-y-auto no-scrollbar justify-between w-full h-[42px] mt-[42px]">
        <h1 className="font-bold text-[28px]">로고</h1>
        <button>
          <img src={bellIcon} alt="알림" className="w-[24px] h-[24px]" />
        </button>
      </div>
      <div className=" mt-[10px] ">
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
      <div className="w-full mt-[18px]">
        <p className="text-[#828282] text-[14px]">
          유통기한이 얼마 남지 않았어요
        </p>
        <div className="flex w-full h-[60px] gap-[12px] mt-[8px] items-center cursor-pointer overflow-x-auto no-scrollbar">
          {MyIngredients.map((item) => (
            <MyIngredientCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="w-full mt-[20px]">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-bold text-[18px]">이번 달 제철 식재료</h3>
          <div className="cursor-pointer">
            <img src={chevronIcon} alt="화살표" className="w-[24px] h-[24px]" />
          </div>
        </div>
        <div className="mt-[12px] flex flex-col gap-[12px] cursor-pointer">
          {Seasonal.map((item) => (
            <SeasonalCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="w-full mt-[29px] pb-[100px]">
        <div className="flex justify-between items-center w-full ">
          <h3 className="font-bold text-[18px]">추천 레시피</h3>
          <div className="cursor-pointer">
            <img src={chevronIcon} alt="화살표" className="w-[24px] h-[24px]" />
          </div>
        </div>
        <div className="mt-[12px] flex gap-[12px] cursor-pointer">
          {Recipes.map((item) => (
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
