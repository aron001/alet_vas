import MiddleShadow from "../components/MiddleShadow";
import Footer from "../components/footer";
import ExploreDocument from "./components/ExploreDocument"
import ContactUs from "./components/ContactUs";
import Quotes from "./components/Quates";
export default function VasPage() {
  return (
    <div className="flex flex-col">
      <MiddleShadow />
      <ExploreDocument/>
      <ContactUs/>
      <Quotes/>
      
      <Footer />
    </div>
  );
}
