import React from "react";

const RegisterPage = () => {
  return (
    <div id="signin" className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side – Hero (Same as Login) */}
        <div
          className="relative h-96 lg:h-full bg-cover bg-center rounded-3xl lg:rounded-l-3xl lg:rounded-r-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1495467033336-2c4e4318fab7?w=1600&q=90')`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-purple-900/95 via-black/80 to-teal-900/90" />

          <div className="relative h-full flex flex-col justify-between p-10 text-white">
            {/* Top Quote */}
            <div>
              <p className="text-sm tracking-widest uppercase opacity-80">
                Welcome to the Future
              </p>
              <div className="h-px bg-white/30 w-16 mt-3" />
            </div>

            {/* Main Text – Same Scale */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Start Your
                <br />
                Journey
                <br />
                Today
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-md">
                Join thousands who read, write, and grow with us every day.
                <br />
                Your voice matters — let’s begin.
              </p>
            </div>

            <div />
          </div>
        </div>

        {/* Right Side – Registration Form (Exact Same Layout as Login) */}
        <div className="flex flex-col justify-center px-10 py-16 lg:px-20 bg-white">
          {/* Logo */}
          <div className="flex items-center justify-center mb-10">
            <i className="fas fa-feather-alt text-4xl text-purple-600 mr-3"></i>
            <span className="text-3xl font-bold text-gray-800">
              InsightFlow
            </span>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">
              Create Your Account
            </h2>
            <p className="text-gray-600 mt-2">
              It takes less than a minute to get started. Free forever.
            </p>
          </div>

          {/* Form – Identical to Login */}
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <i className="fas fa-user absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
                <i className="fas fa-eye-slash absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"></i>
              </div>
            </div>

            {/* Google Sign Up */}
            <button
              type="button"
              className="w-full py-4 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-gray-300 transition flex items-center justify-center gap-3 shadow-sm"
            >
              <i className="fab fa-google text-xl text-red-500"></i>
              Continue with Google
            </button>
          </form>

          {/* Sign In Link */}
          <p className="text-center mt-10 text-gray-600">
            Already have an account?{" "}
            <a
              href="#"
              className="text-purple-600 font-semibold hover:text-purple-700"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
