import React, { useState } from "react";

interface SignInData {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const [form, setForm] = useState<SignInData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign In Submitted:", form);
    alert("Sign In Successful!");
  };

  return (
    <div className="max-w-md mx-auto  bg-white shadow-xl p-8 rounded-xl mt-20">
      <h2 className="text-2xl font-bold text-black mb-6 text-center">Sign In</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
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

        {/* Password */}
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:border-gray-500 outline-none"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-500 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
