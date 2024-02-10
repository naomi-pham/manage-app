import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="mb-24 mt-10 space-y-16 md:mt-16">
      <div className="container mx-auto mt-10 flex max-w-3xl flex-col justify-center gap-6 px-6 text-center md:mt-16">
        <h1 className="text-5xl font-bold">How can we help?</h1>
        <p className="text-2xl text-zinc-600 leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsum
          eligendi voluptas eum voluptates facilis.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
