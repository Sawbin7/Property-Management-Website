import { useForm } from "react-hook-form";
import FormComponent from "./auth/FormComponent";
import { signInSchema, type signInType } from "../../schema/auth/Signin.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: signInType) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" max-w-md  mx-auto flex flex-col  justify-center shadow-lg p-4 space-y-6 mt-20 "
      >
        <h1 className="font-mono text-center font-bold text-2xl">
          Sign-In Form
        </h1>

        <FormComponent
          type="email"
          label="email"
          {...register("email")}
          error={errors.email}
        />
        <FormComponent
          type="password"
          label="password"
          {...register("password")}
          error={errors.password}
        />

        <button className="bg-black text-white  w-full  py-2  rounded">
          {" "}
          Sign In{" "}
        </button>
      </form>
    </>
  );
};

export default SignInForm;
