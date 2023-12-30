import { useEffect } from "react";
import Categories from "../features/Home/Categories";
import Featured from "../features/Home/Featured";
import Hero from "../features/Home/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <Categories />
    </div>
  );
}

export default Home;
