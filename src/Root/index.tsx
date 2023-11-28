import type { FC } from "react";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import BlogPage from "../pages/BlogPage";
import ModalVisibility from "../components/ModalVisibility";

const Root: FC = () => {
  return (
    <>
      <ModalVisibility />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Root;
