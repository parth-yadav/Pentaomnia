import React from "react";

const WinPrizes = () => {
  return (
    <section className="relative w-full bg-black text-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-700/30 via-red-500/20 to-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
          Win Prizes Worth Over{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-500">
            ₹5,000
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-gray-300 mb-8">
          Participate in exciting challenges and competitions to claim your
          rewards. Push your limits and unlock your potential!
        </p>
        <button
          className="px-8 py-4 bg-red-500 hover:bg-red-700 text-white font-bold text-lg rounded-lg shadow-lg transition-all"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Join the Action Now
        </button>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute top-0 left-0 w-32 h-32 bg-red-500 blur-3xl rounded-full opacity-40"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-300 blur-3xl rounded-full opacity-30"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default WinPrizes;
