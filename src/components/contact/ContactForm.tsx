"use client";

import { ChangeEvent, useState } from "react";

const ContactForm = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    topic: "",
    description: "",
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <span>Full name</span>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        <span>Email</span>
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="name">
        <span>Topic</span>
        <input
          type="text"
          name="name"
          placeholder="Topic"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="name">
        <span>Description</span>
        <textarea
          rows={3}
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
