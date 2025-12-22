import type { UseFormRegisterReturn } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type Props = {
  label: string;
  type:
    | "text"
    | "email"
    | "number"
    | "radio"
    | "select"
    | "date"
    | "password"
    | "textarea";
  options?: string[];
  error?: { message?: string };
} & UseFormRegisterReturn<string>;

const FormComponent = ({
  label,
  type,
  options = [],
  error,
  ...props
}: Props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col  mt-2 mb-4 ">
      {(type === "text" || type === "email" || type === "number") && (
        <input
          type={type}
          placeholder={label}
          className="border p-2 rounded w-full"
          {...props}
        />
      )}

      {type === "password" && (
        <>
          <div className="relative w-full ">
            <input
              type={visible ? "text" : "password"}
              placeholder={label}
              className="w-full p-2 pr-10 border rounded outline-none focus:border-2"
              {...props}
            />
            <span
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
              onClick={() => setVisible(!visible)}
            >
              {visible ? <Eye /> : <EyeOff />}
            </span>
          </div>
        </>
      )}

      {type === "textarea" && (
        <>
          <textarea
            placeholder={label}
            className="w-full p-2  border h-35 text-start rounded outline-none focus:border-2 "
            {...props}
          />
        </>
      )}

      {type === "date" && (
        <label className="flex flex-col w-full">
          {label}
          <input type="date" className="border p-2 rounded w-full" {...props} />
        </label>
      )}

      {type === "select" && (
        <select {...props} className="border p-2 rounded w-full">
          <option value="">{label}</option>
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}

      {type === "radio" && (
        <div className="flex gap-4 mt-1">
          <span>{label} :</span>
          {options.map((item) => (
            <label key={item} className="flex items-center gap-1">
              <input type="radio" value={item} {...props} />
              {item}
            </label>
          ))}
        </div>
      )}

      {error?.message && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default FormComponent;
