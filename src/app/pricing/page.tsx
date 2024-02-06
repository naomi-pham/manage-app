import ContactSales from "@/components/pricing/ContactSales";
import PricingList from "@/components/pricing/PricingList";

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto mt-20 flex max-w-xl flex-col justify-center gap-4 text-center">
        <h1 className="text-5xl font-bold">Pricing</h1>
        <p className="text-xl">
          Use Manage for free with your whole team. Upgrade to enable unlimited
          issues, enhanced security controls, and additional features.
        </p>
      </div>
      <PricingList />
      <ContactSales />
    </div>
  );
};

export default PricingPage;
