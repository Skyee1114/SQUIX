import Header from "../../components/Header";
import IntroSection from "../../components/IntroSection";
import SpinCircle from "../../components/SpinCircle";
import News from "../../components/News";
import ModelPage from "../../components/Models/ModelPage";
import Footer from "../../components/Footer";
import FAQ from "../../components/FAQ";
import RoadMap from "../../components/RoadMap";
import Careers from "../../components/Careers";
import HelpUs from "../../components/HelpUs";
import Team from "../../components/Team";


const Dashboard = () => {
  
  return (
    <div className="overflow-hidden">
      <div className="absolute w-full h-[1500px] bg-[url('./assets/img/bg-320.jpg')] sm:bg-[url('./assets/img/bg-834.jpg')] xl:bg-[url('./assets/img/bg-1512.jpg')] 3xl:bg-[url('./assets/img/bg-1920.jpg')] 5xl:bg-[url('./assets/img/bg-2560.jpg')] bg-no-repeat 6xl:bg-contain bg-top">
      </div>
      <Header />
      <IntroSection />  
      <SpinCircle/>
      <News />    
      <ModelPage />   
      <FAQ />
      <RoadMap />
      <HelpUs />
      <Team />
      <Careers />
      <Footer />
    </div>
    
  );
};

export default Dashboard;
