import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form"; // type-only import
import { zodResolver } from "@hookform/resolvers/zod";

import Navbar from "../components/GlobalComponents/Navbar";
import FormComponent from "../components/formComponents/auth/FormComponent";

import { userRegister, type userRegisterType } from "../schema/auth/Register.schema";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<userRegisterType>({
    resolver: zodResolver(userRegister) as any, 
    defaultValues: {
      first_name: "",
      middle_name: undefined,
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone: "",
      gender: undefined,
      dob: undefined,
      state: undefined,
      city: undefined,
      address: undefined,
    },
  });

  const onSubmit: SubmitHandler<userRegisterType> = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      // Build full name for API
      const fullName = `${data.first_name} ${data.middle_name ? data.middle_name + " " : ""}${data.last_name}`;

      const response = await axios.post("http://pms.7crewexpress.com/api/register", {
        name: fullName,
        email: data.email,
        password: data.password,
        confirm_password: data.confirm_password,
        first_name: data.first_name,
        last_name: data.last_name,
        middle_name: data.middle_name || null,
        phone: data.phone,
        gender: data.gender || null,
        dob: data.dob || null,
        state: data.state || null,
        city: data.city || null,
        address: data.address || null,
      });

      if (response.data.status === 1) {
        setMessage(response.data.message || "Registration successful");
        reset();
        console.log("API Response:", response.data);
      } else {
        setMessage(response.data.message || "Registration failed. Please check your inputs.");
      }
    } catch (error: any) {
      if (error.response && error.response.data) {
        const apiErrors = error.response.data.data || [];
        setMessage(Array.isArray(apiErrors) ? apiErrors.join(", ") : "An error occurred");
      } else {
        setMessage("Network error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto flex flex-col shadow-lg p-4 space-y-6 mt-20"
      >
        <h1 className="font-mono text-center font-bold text-2xl">User Registration Form</h1>

        {message && (
          <p
            className={`text-center font-medium ${
              message.toLowerCase().includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        {/* Form Fields */}
        <FormComponent label="First Name" type="text" {...register("first_name")} error={errors.first_name} />
        <FormComponent label="Middle Name" type="text" {...register("middle_name")} error={errors.middle_name} />
        <FormComponent label="Last Name" type="text" {...register("last_name")} error={errors.last_name} />
        <FormComponent label="Email" type="email" {...register("email")} error={errors.email} />
        <FormComponent label="Password" type="password" {...register("password")} error={errors.password} />
        <FormComponent label="Confirm Password" type="password" {...register("confirm_password")} error={errors.confirm_password} />
        <FormComponent label="Phone Number" type="text" {...register("phone")} error={errors.phone} />
        <FormComponent type="radio" label="Gender" options={["male", "female", "other"]} {...register("gender")} error={errors.gender} />
        <FormComponent type="date" label="Date of Birth" {...register("dob")} error={errors.dob} />
        <FormComponent
          type="select"
          label="Select Province"
          options={[
            "Province-1 Koshi",
            "Province-2 Madhesh",
            "Province-3 Bagmati",
            "Province-4 Gandaki",
            "Province-5 Lumbini",
            "Province-6 Karnali",
            "Province-7 Susurpashchim",
          ]}
          {...register("state")}
          error={errors.state}
        />
        <FormComponent label="City" type="text" {...register("city")} error={errors.city} />
        <FormComponent label="Address" type="text" {...register("address")} error={errors.address} />

        <button type="submit" className="bg-black text-white py-2 rounded" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </>
  );
};

export default Register;
