import { signup } from "@/lib/firebase-auth/auth_signup_password";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from "formik";
import router from "next/router";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { PasswordInput } from "@mantine/core";
import * as Yup from "yup";
import { updateuserProfile } from "@/lib/firebase-auth/auth_update_profile";

const Error = ({ name }: { name: string }) => (
  <ErrorMessage name={name} component="div" className="text-sm text-red-500" />
);

function SignupForm({ router }: any) {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [msg, setMsg] = useState("");

  const { mutate, isLoading, isError }: any = useMutation(
    async (values: any) => {
      const { name, email, password } = values;
      return await signup(name, email, password);
    },
    {
      onSuccess(data: any, variables) {
        console.log(data)
        if (data?.errorCode) {
          setMsg(
            data?.errorCode?.includes("invalid-credential")
              ? "Invalid credentials"
              : data.errorMessage
          );
        } else {
          setMsg("Signup successful");
          updateuserProfile(data?.user, { displayName: variables.name });
          router?.push("/todos");
        }
      },
      onError(error: any) {
        setMsg(error.message);
      },
    }
  );
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={function (
        values: FormikValues,
        formikHelpers: FormikHelpers<FormikValues>
      ): void | Promise<any> {
        mutate(values, {
          onSuccess: () => {
           
            formikHelpers.resetForm();
          },
        });
      }}
      validationSchema={schema}
    >
      {() => (
        <Form action="">
          <div className="mb-2 lg:mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Name
            </label>
            <Field
              type="text"
              name="name"
              placeholder="John Doe"
              className="border rounded px-4 py-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300"
            />
            <Error name="name" />
          </div>

          <div className="mb-2 lg:mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <Field
              type="email"
              name="email"
              placeholder="Example@gmail.com"
              className="border rounded px-4 py-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300"
            />
            <Error name="email" />
          </div>
          <div className="mb-2 lg:mb-4">
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password
            </label>
            <Field
              name="password"
              placeholder="At least 8 characters"
              minLength={8}
              as={PasswordInput}
              autoComplete="new-password" // Enable Google Password Suggest
             
            />
            <Error name="password" />
          </div>
          <div className="mb-10 mb-5 lg:mb-7">
            <label htmlFor="confirmPassword" className="block mb-1 font-semibold">
              Confirm Password
            </label>
            <Field
              name="confirmPassword"
              placeholder=""
              as={PasswordInput}
              />
            <Error name="confirmPassword" />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full  bg-black hover:bg-gray-800 px-4 py-2 rounded text-white"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Sign up"}
            </button>
          </div>
          {isError && <p className="text-sm text-red-500">There was an error.</p>}
          {msg && <p className="text-sm text-green-500">{msg}</p>}
        </Form>
      )}
    </Formik>
  );
}

const passwordRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d*.!@$%^&#(){}[\]:;<>,.?/~_+\-=|]{8,}$/;

const schema = Yup.object().shape({
  name: Yup.string().required("Enter your name"),
  email: Yup.string()
    .required("Enter email")
    .email("Please enter a valid email"),
  password: Yup.string()
    .min(8, "Password must be 8 or more characters long")
    .matches(passwordRules, {
      message:
        "Please create a stronger password that contains upper and lower case letter, numbers and characters",
    })
    .required("Enter your password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});

export default SignupForm;
