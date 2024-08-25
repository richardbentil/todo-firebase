import { Field, Form } from 'formik'
import React from 'react'

function SignupForm() {
  return (
    <>
    <Form action="">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-semibold">Name</label>
              <Field
                type="text"
                name="name"
                placeholder="John Doe"
                className="border rounded px-4 py-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Example@gmail.com"
                className="border rounded px-4 py-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300"
              />
            </div>
            <div className="mb-10">
              <label htmlFor="password" className="block mb-1 font-semibold">Password</label>
              <Field
                type="password"
                name="password"
                placeholder="************"
                className="border rounded px-4 py-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
              >
                Sign up
              </button>
            </div>
          </Form>
    </>
  )
}

export default SignupForm