
import cta from '../../assets/servicee.jpg'; // Import the image

const Contact = () => {
  return (
    <div className="relative bg-[#b89a9a] py-12 my-12">
      <div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{ backgroundImage: `url(${cta})` }} 
      ></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl text-white font-extrabold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white mb-6">
            Elevate your space with our expert handyman services.
          </p>
          <button
            className="bg-white text-[#4h4h44h] py-3 px-8 rounded-full font-semibold hover:bg-blue-200 hover:text-blue-800 shadow-md transform hover:scale-105 transition-transform"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
