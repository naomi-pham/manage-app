import PageTitle from "@/components/common/typography/PageTitle";
import ContactSales from "@/components/pricing/ContactSales";
import PricingList from "@/components/pricing/PricingList";

const PricingPage = () => {
  return (
    <>
      <PageTitle
        title="Pricing"
        desc="Use Manage for free with your whole team. Upgrade to enable unlimited
        issues, enhanced security controls, and additional features."
      />
      <PricingList />
      <ContactSales />
    </>
  );
};

export default PricingPage;
