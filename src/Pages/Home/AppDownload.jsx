import app from "../../assets/app.png";
import iphone from "../../assets/iphone.png";
import appstore from "../../assets/appstore.png";


const AppDownload = () => {
  return (
    <div className="my-10 pb-12 pt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="w-1/2 md:pr-6">
          <div className="w-full max-w-[300px] mx-auto mb-6 md:mb-0 relative">
            <img src={app} alt="App Mockup" className="h-1/2" />
            <img
              src={iphone}
              alt="App Mockup"
              className="absolute bottom-0 left-0 w-full"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-extrabold mb-4">
            Download Our App
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Get our handyman services on the go. Download our app for easy
            access to our services.
          </p>
          <div className=" justify-center md:justify-start space-x-4">
            <a
              href="https://demandium-web.6amtech.com/?page=main"
              target="_blank"
              rel="noopener noreferrer"
              className="flex  justify-center"
            >
              <img src={appstore} alt="App Store" className="w-1/2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
