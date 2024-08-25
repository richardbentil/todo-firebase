import { Field, Form } from 'formik'
import React from 'react'

function LoginForm() {
  return (
    <>
     <Form action="">
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 font-semibold">
                  Email
                </label>
                <Field
                name="email"
                  type="email"
                  placeholder="Example@gmail.com"
                  className="border rounded px-4 py-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="block mb-1 font-semibold">
                  Password
                </label>
                <Field
                name="password"
                  type="password"
                  placeholder="************"
                  className="border rounded px-4 py-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300"
                />
              </div>
              <div className="mb-7 flex justify-end">
                <p className="">Forgot password?</p>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
                >
                  Sign in
                </button>
              </div>
            </Form>
    </>
  )
}

export default LoginForm