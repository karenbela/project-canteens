import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Service from './Components/Services/Service';
import Trending from './Components/Trending/Trending';
import Top from './Components/Top/Top';
import './index.css'; 

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <Trending />
      <Top />
    </div>
  );
};

export default MainPage;
