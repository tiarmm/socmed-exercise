"use client";

import Forminput from "@/components/forms/Forminput";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { appConfig } from "@/utils/config";
import axios from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { RegisterValidationSchema } from "./schemas/RegisterValidationSchema";

const Register: React.FC = () => {
  const router = useRouter();
  const { baseUrl } = appConfig;

  const {touched, values, errors, handleSubmit, handleChange, handleBlur} = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterValidationSchema,
    onSubmit: async (values) => {
      const { data } = await axios.get(
        baseUrl + `/users?email=${values.email}`,
      );

      if (data.length) {
        return toast.error("Email already exist");
      }
      await axios.post(baseUrl + "/users", {
        name: values.name,
        email: values.email,
        password: values.password,
        isVerify: false,
      });

      toast.success("Register success");
      router.push("/login");
    },
  });

  return (
    <main className="container mx-auto px-4">
      <div className="flex justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              Welcome to Sosmed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* NAME */}
                <Forminput
                  name="name"
                  error={errors.name}
                  isError={!!touched.name && !!errors.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Name"
                  type="text"
                  value={values.name}
                />

                {/* EMAIL */}
                <Forminput
                  name="email"
                  error={errors.email}
                  isError={!!touched.email && !!errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Email"
                  type="text"
                  value={values.email}
                />
                {/* PASSWORD */}
                <Forminput
                  name="password"
                  error={errors.password}
                  isError={
                    !!touched.password && !!errors.password
                  }
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Password"
                  type="text"
                  value={values.password}
                />
              </div>
              <Button className="mt-6 w-full">Register</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Register;
