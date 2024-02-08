import FormFields from "@/components/contact/FormFields";

const ContactPage = () => {
  return (
    <div className="mb-24 mt-10 space-y-16 md:mt-16">
      <div className="mx-auto max-w-xl space-y-6 text-center">
        <h1 className="text-5xl font-bold">How can we help?</h1>
        <p className="text-xl">
          Use Manage for free with your whole team. Upgrade to enable unlimited
          issues, enhanced security controls, and additional features.
        </p>
      </div>
      {/* <ContactForm /> */}
      <FormFields />
    </div>
  );
};

export default ContactPage;
