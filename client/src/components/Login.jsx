import React from "react";

const LoginPage = () => {
  return (
    <div id="login" className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side - Hero */}
        <div
          className="relative h-96 lg:h-full bg-cover bg-center rounded-3xl lg:rounded-l-3xl lg:rounded-r-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1736196072978-dc24a6db7166?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-black/80 to-blue-900/90" />

          <div className="relative h-full flex flex-col justify-between p-10 text-white">
            <div>
              <p className="text-sm tracking-widest uppercase opacity-80 font-medium">
                A Wise Quote
              </p>
              <div className="h-px bg-white/40 w-20 mt-4" />
            </div>

            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Get
                <br />
                Everything
                <br />
                You Want
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-lg leading-relaxed">
                You can get everything you want if you work hard,
                <br />
                trust the process, and stick to the plan.
              </p>
            </div>

            <div />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center px-8 py-16 lg:px-20 bg-white">
          {/* Logo */}
          <div className="flex items-center justify-center mb-12">
            <i className="fas fa-brain text-4xl text-purple-600 mr-3"></i>
            <span className="text-3xl font-bold text-gray-800">Cogíe</span>
          </div>

          {/* Welcome Text */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-gray-600 mt-3 text-base">
              Enter your email and password to access your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <i className="fas fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <i className="fas fa-eye-slash absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"></i>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500 border-gray-300"
                />
                <span className="text-gray-700 font-medium">Remember me</span>
              </label>
              <a
                href="#"
                className="text-purple-600 hover:text-purple-700 font-semibold transition"
              >
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-4 bg-black hover:bg-gray-900 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-3"
            >
              <i className="fas fa-sign-in-alt"></i>
              Sign In
            </button>

            {/* Google Sign In */}
            <button
              type="button"
              className="w-full py-4 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-800 font-semibold rounded-xl transition-all flex items-center justify-center gap-4 shadow-md"
            >
              <i className="fab fa-google text-xl text-red-500"></i>
              <span>Sign In with Google</span>
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center mt-10 text-gray-600">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-purple-600 font-bold hover:text-purple-700 transition"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
