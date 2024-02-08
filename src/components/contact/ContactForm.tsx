"use client";

import { ChangeEvent, useState } from "react";
import Button from "../common/Button";

const ContactForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-2xl flex-col gap-6 rounded-2xl bg-neutral-brightRed p-10"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-medium opacity-80">
          Full name
        </label>

        <input
          type="text"
          name="name"
          placeholder="Full name"
          onChange={handleChange}
          className="rounded-md border border-zinc-400 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-brightRed focus:ring-offset-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium opacity-80">
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="rounded-md border border-zinc-400 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-brightRed focus:ring-offset-2"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="font-medium opacity-80">
          Message
        </label>
        <textarea
          rows={3}
          name="message"
          placeholder="Message"
          onChange={handleChange}
          className="rounded-md border border-zinc-400 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-brightRed focus:ring-offset-2"
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ContactForm;
