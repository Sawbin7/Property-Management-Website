import Navbar from "../GlobalComponents/Navbar";
import {
  ContactSchema,
  type ContactType,
} from "../../schema/user/Contact.schema";
import FormComponent from "./auth/FormComponent";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Contactform = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactSchema),

    defaultValues: {
      userName: "",
      email: "",
      message: "",
    },
  });

  const contactSubmit = (data: ContactType) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Navbar />

      <form
        onSubmit={handleSubmit(contactSubmit)}
        className="max-w-md  mx-auto flex flex-col  justify-center shadow-lg p-4 space-y-6 mt-20  "
      >
        <h1 className="font-mono text-center font-bold text-2xl">
          Contact Form
        </h1>
        <FormComponent
          label="UserName"
          type="text"
          {...register("userName")}
          error={errors.userName}
        />
        <FormComponent
          label="email"
          type="email"
          {...register("email")}
          error={errors.email}
        />
        <FormComponent
          label="Enter your message"
          type="textarea"
          {...register("message")}
          error={errors.message}
        />
        <button
          type="submit"
          className="bg-black text-white  w-full  py-2  rounded"
        >
          Submit
        </button>{" "}
      </form>
    </>
  );
};

export default Contactform;
