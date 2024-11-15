import Hero from "./components/Hero";
import MainService from "./components/MainService";
import Footer from "./components/footer";
import SatisfiedClients from "./components/SatisfiedClients";
import WhyUseAlet from "./components/WhyUseAlet";
import Cover from "./components/cover";
import TestmonialCard from "./components/TestmonialCard";
import Faq from "./components/Faq";
import WhyUseAletSms from "./components/WhyUseAletSms";
import MiddleShadow from "./components/MiddleShadow";
import Features from "./components/Features";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero redirecTo="string"></Hero>
      <MiddleShadow/>
     
      <SatisfiedClients />
      <WhyUseAlet/>
      <WhyUseAletSms/>
< Features/>
      <MainService />
      <TestmonialCard />
      <Faq />
      

     
      <Cover />
      <Footer />
    </div>
  );
}
