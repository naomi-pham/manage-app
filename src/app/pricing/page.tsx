import ContactSales from "@/components/pricing/ContactSales";
import PricingList from "@/components/pricing/PricingList";

const PricingPage = () => {
  return (
    <>
      <div className="mx-auto gap-6 mt-10 md:mt-16 flex container px-6 max-w-3xl flex-col justify-center text-center">
        <h1 className="text-5xl font-bold">Pricing</h1>
        <p className="text-xl">
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
