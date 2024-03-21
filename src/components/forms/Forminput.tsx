import { FormikHandlers } from "formik";
import { HTMLInputTypeAttribute } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface ForminputProps {
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange: FormikHandlers["handleChange"];
  onBlur: FormikHandlers["handleBlur"];
  value: string;
  isError: boolean;
  error: string | undefined;
}

const Forminput: React.FC<ForminputProps> = ({
  name,
  placeholder,
  type,
  onChange,
  onBlur,
  value,
  isError,
  error,
}) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={name} className={isError ? "text-red-500" : ""}>
        {name}
      </Label>
      <Input
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {isError ? <div className="text-xs text-red-500">{error}</div> : null}
    </div>
  );
};

export default Forminput;
