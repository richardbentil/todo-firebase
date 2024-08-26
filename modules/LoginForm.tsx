import { signin } from "@/lib/firebase-auth/auth_signin_password";
import { PasswordInput } from "@mantine/core";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from "formik";
import React, { useState } from "react";
import { useMutation } from "react-query";
import * as Yup from "yup";

const Error = ({ name }: { name: string }) => (
  <ErrorMessage name={name} component="div" className="text-sm text-red-500" />
);

function LoginForm({ router }: any) {
  const initialValues = { email: "", password: "" };
  const [msg, setMsg] = useState("");
  const { mutate, isLoading, isError }: any = useMutation(
    async (values: any) => {
      const { email, password } = values;
      return await signin(email, password);
    },
    {
      onSuccess(data: any, variables, context) {
        if (data?.errorCode) {
          setMsg(
            data?.errorCode?.includes("invalid-credential")
              ? "Invalid credentials"
              : data.errorMessage
          );
        } else {
          setMsg("Login successful");
          router?.push("/todos");
        }
      },
      onError(error: any, variables, context) {
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
        <Form>
          <div className="mb-2 lg:mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email
            </label>
            <Field
              name="email"
              type="email"
              placeholder="Example@gmail.com"
              className="border rounded px-3 py-1 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300"
            />
            <Error name="email" />
          </div>
          <div className="mb-2 lg:mb-4">
            <label htmlFor="password" className="block mb-1 font-semibold">
              Password
            </label>
            <Field
              name="password"
              placeholder="************"
              as={PasswordInput}
              
            />
            <Error name="password" />
          </div>
          <div className="mb-5 lg:mb-7 flex justify-end">
            <p className="text-blue-600">Forgot password?</p>
          </div>
          <div className="mb-2 lg:mb-4">
          <button
              type="submit"
              className="w-full  bg-black hover:bg-gray-800 px-3 py-1 rounded text-white"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Sign in"}
            </button>
          </div>
          {isError && (
            <p className="text-sm text-red-600">There was an error.</p>
          )}
          {msg && <p className="text-sm text-green-600">{msg}</p>}
        </Form>
      )}
    </Formik>
  );
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Enter email")
    .email("Please enter a valid email"),
  password: Yup.string().required("Enter your password"),
});

export default LoginForm;
