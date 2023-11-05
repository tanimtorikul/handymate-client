const Banner = () => {
  return (
    <div
      className="hero min-h-[700px] relative overflow-hidden"
      style={{
        backgroundImage: "url(handy1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-50 absolute inset-0 bg-gray-900"></div>
      <div className="hero-content text-white relative z-10">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Treating Customers as <br /> Our Beloved Family
          </h1>
          <p className="text-lg mb-6">
            Providing the utmost care and service to make your experience <br />
            exceptional. Let us serve you with dedication and love.
          </p>
          <div className="flex gap-4">
            <button className="btn bg-[#ED1D24] text-white border-0 py-2 px-6 rounded-lg hover:bg-[#FF0D10]">
              Read More
            </button>
            <button className="btn bg-black text-white border-0 py-2 px-6 rounded-lg hover:bg-gray-800">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
