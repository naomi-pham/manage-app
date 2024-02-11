import PageTitle from "@/components/common/typography/PageTitle";
import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="mb-24 mt-10 space-y-16 md:mt-16">
      <PageTitle
        title="How can we help?"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsum
        eligendi voluptas eum voluptates facilis."
      />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
