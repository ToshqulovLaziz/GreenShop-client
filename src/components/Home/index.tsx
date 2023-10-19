import type { FC } from "react";
import Hero from "./Hero";
import Dashboard from "./Dashboard";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Dashboard />
    </>
  );
};

export default Home;
