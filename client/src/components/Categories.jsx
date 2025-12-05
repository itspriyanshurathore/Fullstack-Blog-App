import React, { useState } from "react";

export default function CategoryPage() {
  const categories = [
    "All",
    "AI",
    "Travel",
    "Food",
    "Tech",
    "Business",
    "Lifestyle",
    "Health",
  ];

  const blogs = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence",
      category: "AI",
      date: "24 Oct, 2021",
      comments: 136,
      author: "Windy Bond",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      img: "https://images.pexels.com/photos/1406716/pexels-photo-1406716.jpeg",
    },
    {
      id: 2,
      title: "Top 10 Travel Places in 2025",
      category: "Travel",
      date: "10 Feb, 2024",
      comments: 98,
      author: "Amelia Rose",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    },
    {
      id: 3,
      title: "Healthy Food Habits for Busy People",
      category: "Food",
      date: "14 Jan, 2024",
      comments: 78,
      author: "Oliver Smith",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      img: "https://images.pexels.com/photos/1553969/pexels-photo-1553969.jpeg",
    },
    {
      id: 4,
      title: "AI Tools Every Developer Should Use",
      category: "AI",
      date: "8 Jul, 2024",
      comments: 101,
      author: "Sophia Mia",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      id: 5,
      title: "Travel Guide: Thailand on a Budget",
      category: "Travel",
      date: "2 May, 2024",
      comments: 44,
      author: "Daniel R",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg",
    },
    {
      id: 6,
      title: "Voices of Hope & Humanity",
      category: "Lifestyle",
      date: "1 Jan, 2022",
      comments: 170,
      author: "Mia Kendall",
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
      img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <div
    
    id="categories" 
     className="w-full py-20 px-6 md:px-24 bg-white">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900">
        Browse by Category
      </h2>
      <p className="text-gray-600 mt-2">Explore topics that inspire you</p>

      {/* CATEGORY BUTTONS */}
      <div className="flex gap-4 overflow-x-auto py-4 mt-6 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition
              ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FEATURED STYLE BLOG CARDS */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] group"
          >
            {/* Image */}
            <img
              src={blog.img}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              alt="blog"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex gap-4 text-sm opacity-90">
                <span>📅 {blog.date}</span>
                <span>💬 {blog.comments} Comments</span>
              </div>

              <h3 className="text-2xl font-bold mt-2 leading-snug">
                {blog.title}
              </h3>

              <div className="flex items-center justify-between mt-4">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={blog.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="font-medium">{blog.author}</span>
                </div>

                {/* Button */}
                <button className="px-5 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
