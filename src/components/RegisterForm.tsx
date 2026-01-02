import React, { useState } from "react";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  sex: string;
  countryCode: string;
  phone: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}

const RegisterForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    sex: "",
    countryCode: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
     const target = e.target as HTMLInputElement;
    const { name, type, checked, value } = target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) {
      alert("You must agree to the terms and conditions.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Submitted:", form);
    alert("Registration Successful!");
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl p-8 rounded-xl mt-25  mb-20">
      <h2 className="text-2xl font-bold text-black mb-6 text-center">Sign Up</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstname"
              value={form.firstname}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:border-gray-500 outline-none"
              placeholder="First name"
              required
            />
          </div>

          <div className="flex-1">
            <label className="block font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={form.lastname}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:border-gray-500 outline-none"
              placeholder="Last name"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
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

        {/* Sex dropdown */}
        <div>
          <label className="block font-medium mb-1">Sex</label>
          <select
            name="sex"
            value={form.sex}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-gray-500 outline-none"
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Country code + phone */}
        <div className="flex gap-4">
          <div className="w-1/3">
            <label className="block font-medium mb-1">Country Code</label>
            <input
              type="text"
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:border-gray-500 outline-none"
              placeholder="+1"
              required
            />
          </div>
          <div className="w-2/3">
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:border-gray-500 outline-none"
              placeholder="1234567890"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-gray-500 outline-none"
            placeholder="Enter password"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-gray-500 outline-none"
            placeholder="Re-type password"
            required
          />
        </div>

        {/* Agree checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <label className="text-gray-700 text-sm">
            I agree to the <a href="/terms" className="text-blue-500 underline">terms and conditions</a>
          </label>
        </div>

        {/* Sign Up button */}
        <button
          type="submit"
          disabled={!form.agree}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
