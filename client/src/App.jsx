import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Features from "./components/Features";
import Blog from "./components/Blog";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import WhyChooseUs from "./components/WhyChooseUs";
import DesignSection from "./components/Design";
import CategoryPage from "./components/Categories";
import CreatePost from "./components/CreatePost";
import SinglePost from "./components/Singlepost";
import RegisterPage from "./components/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <SinglePost />
              <DesignSection />
              <WhyChooseUs />
              <Features />
              <Blog />
              <CreatePost />
            </>
          }
        />

        {/* Category Page */}
        <Route path="/categories" element={<CategoryPage />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
