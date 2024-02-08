import ContactSales from "@/components/pricing/ContactSales";
import PricingList from "@/components/pricing/PricingList";

const PricingPage = () => {
  return (
    <>
      <div className="mx-auto mt-10 md:mt-16 flex max-w-xl flex-col justify-center text-center">
        <h1 className="text-5xl font-bold">Pricing</h1>
        <p className="text-xl mt-6">
          Use Manage for free with your whole team. Upgrade to enable unlimited
          issues, enhanced security controls, and additional features.
        </p>
      </div>
      <PricingList />
      <ContactSales />
    </>
  );
};

export default PricingPage;
