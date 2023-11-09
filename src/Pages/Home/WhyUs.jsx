import CountUp from "react-countup";

const WhyUs = () => {
  return (
    <div className="bg-[#FAFBFC]">
      <div className="text-center mb-6">
        <p className="mb-4 py-4 text-3xl font-semibold">Why Choose Us</p>
        <h2 className="text-4xl font-medium">Because we are the best..</h2>
      </div>
      <div className="">
        <div>
          <div className="flex flex-wrap p-7 justify-center items-center rounded-lg text-white text-center">
            <div className="w-1/2 md:w-1/4 px-4 mb-4">
              <div className="text-3xl text-[#323334] sm:text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={1000} duration={5} separator="," />+
              </div>
              <p className="text-lg text-[#333b52] sm:text-xl">
                Service Providers
              </p>
            </div>
            <div className="w-1/2 md:w-1/4 px-4 mb-4">
              <div className="text-3xl text-[#3d444b] sm:text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={50000} duration={5} separator="," />+
              </div>
              <p className="text-lg text-[#333b52] sm:text-xl">Orders Served</p>
            </div>
            <div className="w-1/2 md:w-1/4 px-4 mb-4">
              <div className="text-3xl text-[#323334] sm:text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={10000} duration={5} separator="," />+
              </div>
              <p className="text-lg text-[#333b52] sm:text-xl">
                5 Star Reviewed
              </p>
            </div>
            <div className="w-1/2 md:w-1/4 px-4 mb-4">
              <div className="text-3xl text-[#323334] sm:text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={100} duration={5} separator="," />+
              </div>
              <p className="text-lg text-[#333b52] sm:text-xl">
                Ongoing Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
