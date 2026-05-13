import MyIngredientCard from '../components/MyIngredientCard';
import SeasonalCard from '../components/SeasonalCard';
import RecipeItem from '../components/RecipeItem';
import Navbar from '../components/Layouts/Navbar';

const Home = () => {
  return (
    <div className="mx-[16px]">
      <div className="flex justify-between max-w-[358px] h-[42px] mt-[63px]">
        <h1>로고</h1>
        <button>버튼</button>
      </div>
      <div className="max-w-[255px] h-[58px] mt-[115px]">
        <p>반가워요! 지민님 🖐️</p>
        <h3>오늘 봄 제철 봄동비빔밥 어때요?</h3>
      </div>
      <div className="flex items-center justify-center bg-[#F1FFE6] max-w-[121px] h-[30px] mt-[186px] border border-[#7FC24B] rounded-full px-[16px]">
        <p className="text-[#7FC24B] text-[10px] font-bold leading-none tracking-tight">
          2026년 5월 봄 시즌
        </p>
      </div>
      <div className="flex max-w-[474px] h-[60px] mt-[248px]">
        <MyIngredientCard />
      </div>
      <div className="flex flex-col max-w-[358px] h-[172px] mt-[172px]">
        <h3>이번 달 제철 식재료</h3>
        <SeasonalCard />
      </div>
      <div className="flex flex-col max-w-[358px] h-[508px] mt-[529pxpx]">
        <h3>추천 레시피</h3>
        <RecipeItem />
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
