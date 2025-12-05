import React from "react";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Hymn to the United Nations",
      date: "24 Oct, 2021",
      comments: 136,
      desc: "Get inspired by this revived W.H. Auden’s Hymn to the UN.",
      img: "https://images.pexels.com/photos/1406716/pexels-photo-1406716.jpeg",
      author: "Windy Bond",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 5,
      title: "The World is Changing Fast",
      date: "22 May, 2022",
      comments: 98,
      desc: "Understanding how the world evolves with collective action.",
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
      author: "Amelia Rose",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 2,
      title: "Why do we mark International Days?",
      date: "24 Oct, 2021",
      comments: 130,
      img: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
      author: "Oliver Smith",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 3,
      title: "Peace, dignity and equality on a healthy planet",
      date: "24 Oct, 2021",
      comments: 140,
      img: "https://images.pexels.com/photos/1553969/pexels-photo-1553969.jpeg",
      author: "Sophia Mia",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 4,
      title: "A Sustainable Future Begins Today",
      date: "14 Sept, 2023",
      comments: 210,
      img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      author: "Daniel R",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      id: 6,
      title: "Voices of Hope & Humanity",
      date: "1 Jan, 2022",
      comments: 170,
      img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg",
      author: "Mia Kendall",
      avatar: "https://randomuser.me/api/portraits/women/31.jpg",
    },
  ];

  return (
    <div className="w-full py-20 px-6 md:px-24 bg-white">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-gray-900">
        Your Story Helps Others
      </h2>
      <p className="text-gray-600 mt-2">Latest updates and inspiring stories</p>

      {/* GRID — 3 cards per row */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.slice(0, 6).map((blog) => (
          <div
            key={blog.id}
            className="relative rounded-2xl overflow-hidden shadow-xl h-[420px] group"
          >
            {/* Background Image */}
            <img
              src={blog.img}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              alt="featured"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x300?text=No+Image";
              }}
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            {/* Card Content */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              {/* Date + Comments */}
              <div className="flex gap-4 text-sm opacity-90">
                <span>📅 {blog.date}</span>
                <span>💬 {blog.comments} Comments</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mt-2 leading-snug">
                {blog.title}
              </h3>

              {/* Author + Button */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3">
                  <img
                    src={blog.avatar}
                    className="w-10 h-10 rounded-full object-cover"
                    alt="avatar"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/50?text=No+Avatar";
                    }}
                  />
                  <span className="font-medium">{blog.author}</span>
                </div>

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
