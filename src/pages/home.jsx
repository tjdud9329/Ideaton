import MyIngredientCard from '../components/MyIngredientCard';
import SeasonalCard from '../components/SeasonalCard';
import RecipeItem from '../components/RecipeItem';
import Navbar from '../components/Layouts/Navbar';
import bell from '../assets/bell.png';
import chevron from '../assets/chevron.png';

const MOCK_DATA = {
  Myingredients: [
    { id: 1, name: '양배추', weight: '400g', day: '2' },
    { id: 2, name: '치즈', weight: '50g', day: '8' },
  ],
  Seasonal: [
    { id: 1, name: '매실', weight: '1kg', site: '사이트', price: '30000' },
    { id: 2, name: '오이', weight: '1개', site: '사이트', price: '1000' },
  ],
  Recipes: [
    { id: 1, title: '봄동 비빔밥', level: '초급', time: '10분' },
    { id: 2, title: '냉이 된장국', level: '중급', time: '20분' },
  ],
};

const Home = () => {
  return (
    <div className="relative mx-[16px]">
      <div className="absolute flex justify-between w-full h-[42px] top-[63px]">
        <h1 className="font-bold text-[28px]">로고</h1>
        <button>
          <img src={bell} alt="알림" className="w-[24px] h-[24px]" />
        </button>
      </div>
      <div className="absolute h-[58px] top-[115px]">
        <p className="text-[16px]">반가워요! 지민님 🖐️</p>
        <h3 className="font-bold text-[20px]">
          오늘 봄 제철 봄동비빔밥 어때요?
        </h3>
      </div>
      <div className="absolute flex items-center justify-center bg-[#F1FFE6] max-w-[121px] h-[30px] top-[186px] border border-[#7FC24B] rounded-full px-[16px]">
        <p className="text-[#7FC24B] text-[10px] font-bold leading-none tracking-tight">
          2026년 5월 봄 시즌
        </p>
      </div>
      <div className="absolute flex max-w-[474px] h-[60px] top-[248px] gap-[12px] item-center">
        {MOCK_DATA.Myingredients.map((item, index) => (
          <MyIngredientCard key={index} />
        ))}
      </div>

      <div className="absolute  w-full  h-[172px] top-[328px]">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-bold text-[18px]">이번 달 제철 식재료</h3>
          <div>
            <img src={chevron} alt="화살표" className="w-[24px] h-[24px]" />
          </div>
        </div>
        <div className="mt-[12px] flex flex-col gap-[12px] ">
          {MOCK_DATA.Seasonal.map((item, index) => (
            <SeasonalCard key={index} />
          ))}
        </div>
      </div>

      <div className="absolute w-full h-[508px] top-[529px]">
        <div className="flex justify-between items-center w-full ">
          <h3 className="font-bold text-[18px]">추천 레시피</h3>
          <div>
            <img src={chevron} alt="화살표" className="w-[24px] h-[24px]" />
          </div>
        </div>
        <div className="mt-[12px] flex gap-[12px]">
          {MOCK_DATA.Recipes.map((item, index) => (
            <RecipeItem key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
