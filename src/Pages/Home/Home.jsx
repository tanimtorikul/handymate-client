import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import PopularServices from "../Services/PopularServices";
import WhyUs from "./WhyUs";
import Contact from "./Contact";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>HandyMate | Home</title>
      </Helmet>
      <Banner />
      <PopularServices></PopularServices>
      <Contact></Contact>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
