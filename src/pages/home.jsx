import MyIngredientCard from "../components/MyIngredientCard";
import SeasonalCard from "../components/SeasonalCard";
import RecipeItem from "../components/RecipeItem";


const Home = () => {
  return (
    <div>
      <div>Home</div>
      <MyIngredientCard />
      <SeasonalCard />
      <RecipeItem />  
    </div>   
  );
};

export default Home;
