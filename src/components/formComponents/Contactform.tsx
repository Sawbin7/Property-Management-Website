import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contactform: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value, // dynamic key
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Message Sent!");
  };

  return (
    <div className="max-w-lg mx-auto mt-30 bg-white shadow-xl p-8 rounded-xl">
      <h2 className="text-2xl font-bold text-black mb-6 text-center">Contact Us</h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block font-medium mb-1 mr-3">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className=" border border-gray-300 p-3 rounded-lg focus:border-gray-500 outline-none"
            placeholder="First name"
            required
          /><span><input type = "ml-2 " name = "name" value = {form.name} onChange = {handleChange} className="border border-gray-300 p-3 rounded-lg focus:border-gray-500 outline-none"
            placeholder="Last name" required/></span>
        </div>

        <div >
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-gray-500 outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-gray-500 outline-none"
            placeholder="Write your message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-500 transition"
        >
          Send Message
        </button>

      </form>
    </div>
  );
};

export default Contactform;
