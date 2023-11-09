import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel
      showThumbs={true}
      thumbWidth={100}
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
      className="w-full max-w-7xl mx-auto rounded-lg md:rounded-none"
    >
      <div className="carousel-item relative h-[400px] md:h-[600px]">
        <img
          src="handy1.jpg"
          alt="Slide 1"
          className="w-full h-full object-cover"
        />
        <div className="carousel-caption absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Treating Customers as <br /> Our Beloved Family
          </h1>
          <p className="text-lg mb-6">
            Providing the utmost care and service to make your experience <br />
            exceptional. Let us serve you with dedication and love.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn bg-[#35C36F] text-white border-0 py-2 px-6 rounded-lg hover:bg-[#FF0D10]">
              Read More
            </button>
            <button className="btn bg-black text-white border-0 py-2 px-6 rounded-lg hover:bg-gray-800">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="carousel-item relative h-[400px] md:h-[600px]">
        <img
          src="handy2.jpg"
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
        <div className="carousel-caption absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Your Trusted Handyman Service
          </h1>
          <p className="text-lg mb-6">
            We are here to fix, repair, and improve your home with care and
            expertise. Your satisfaction is our top priority. Let us handle the
            rest!
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn bg-[#35C36F] text-white border-0 py-2 px-6 rounded-lg hover:bg-[#FF0D10]">
              Learn More
            </button>
            <button className="btn bg-black text-white border-0 py-2 px-6 rounded-lg hover:bg-gray-800">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="carousel-item relative h-[400px] md:h-[600px]">
        <img
          src="handy3.jpg"
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
        <div className="carousel-caption absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Quality Repairs for Happy Homes
          </h1>
          <p className="text-lg mb-6">
            We take pride in our craftsmanship and attention to detail. From
            small fixes to major renovations, we are dedicated to making your
            home a better place.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn bg-[#35C36F] text-white border-0 py-2 px-6 rounded-lg hover:bg-[#FF0D10]">
              Discover More
            </button>
            <button className="btn bg-black text-white border-0 py-2 px-6 rounded-lg hover:bg-gray-800">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
