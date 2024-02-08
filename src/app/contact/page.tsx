import ContactForm from "@/components/contact/ContactForm";
import FormFields from "@/components/contact/FormFields";

const ContactPage = () => {
  return (
    <div className="space-y-16 py-24">
      <h1 className="text-center text-5xl font-bold">How can we help?</h1>
      {/* <ContactForm /> */}
      <FormFields />
    </div>
  );
};

export default ContactPage;
