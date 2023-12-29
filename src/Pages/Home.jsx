import { useEffect } from "react";
import Categories from "../features/Home/Categories";
import Featured from "../features/Home/Featured";
import Hero from "../features/Home/Hero";

function Home() {
  useEffect(function () {
    async function fetchShoe() {
      const response = await fetch(" http://localhost:3000/shoes");
      const data = await response.json();
      console.log(data);
    }
    fetchShoe();
  }, []);
  return (
    <div>
      <Hero />
      <Featured />
      <Categories />
    </div>
  );
}

export default Home;
