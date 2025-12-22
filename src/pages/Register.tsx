import Navbar from "../components/GlobalComponents/Navbar";
import FormComponent from "../components/formComponents/auth/FormComponent";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  userRegister,
  type userRegisterType,
} from "../schema/auth/Register.schema";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userRegister),
    defaultValues: {
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone: "",
      gender: "",
      dob: "",
      state: "",
      city: "",
      address: "",
    },
  });

  const onSubmit = (data: userRegisterType) => {
    console.log("Submitted Data:", data);
    reset();
  };

  return (
    <>
      <Navbar />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto flex flex-col shadow-lg p-4 space-y-6 mt-20"
      >
        <h1 className="font-mono text-center font-bold text-2xl">
          User Registration Form
        </h1>

        <FormComponent
          label="First Name"
          type="text"
          {...register("first_name")}
          error={errors.first_name}
        />

        <FormComponent
          label="Middle Name"
          type="text"
          {...register("middle_name")}
          error={errors.middle_name}
        />

        <FormComponent
          label="Last Name"
          type="text"
          {...register("last_name")}
          error={errors.last_name}
        />

        <FormComponent
          type="email"
          label="Email"
          {...register("email")}
          error={errors.email}
        />

        <FormComponent
          type="password"
          label="Password"
          {...register("password")}
          error={errors.password}
        />

        <FormComponent
          type="password"
          label="Confirm Password"
          {...register("confirm_password")}
          error={errors.confirm_password}
        />

        <FormComponent
          label="Phone Number"
          type="text"
          {...register("phone")}
          error={errors.phone}
        />

        <FormComponent
          type="radio"
          label="Gender"
          options={["male", "female", "other"]}
          {...register("gender")}
          error={errors.gender}
        />

        <FormComponent
          type="date"
          label="Date of Birth"
          {...register("dob")}
          error={errors.dob}
        />

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

        <FormComponent
          label="City"
          type="text"
          {...register("city")}
          error={errors.city}
        />

        <FormComponent
          label="Address"
          type="text"
          {...register("address")}
          error={errors.address}
        />

        <button type="submit" className="bg-black text-white py-2 rounded">
          Register
        </button>
      </form>
    </>
  );
};

export default Register;
