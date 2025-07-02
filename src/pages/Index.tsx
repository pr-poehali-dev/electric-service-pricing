import Hero from "@/components/Hero";
import PriceList from "@/components/PriceList";
import EmergencyCall from "@/components/EmergencyCall";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <EmergencyCall />
      <PriceList />
    </div>
  );
};

export default Index;
