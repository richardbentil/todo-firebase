import Layout from "@/components/common/Layout";
import SignupForm from "@/modules/SignupForm";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Signup() {
  const router = useRouter();
  return (
    <Layout>
      <div className="lg:columns-2">
      <div className="pb-3 mt-2 lg:mt-8 xl:mt-0 p-4 h-screen flex justify-center items-center overflow-y-auto">
          <div className="w-2/3 lg:w-6/12">
            <h1 className="text-xl font-bold">Sign up</h1>
            <p className="mb-4">Create an account</p>
            <SignupForm router={router} />

            <div className="w-full my-3">
              <div className="flex">
                <span className="border-b w-2/3 mb-2"></span>
                <span className="mx-3">or</span>
                <span className="border-b w-2/3 mb-2"></span>
              </div>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
              >
                Sign up with google
              </button>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
              >
                Sign up with facebook
              </button>
            </div>
            <div className="mb-8 flex justify-center">
              <p className="">Do you have an account?  <Link href="/auth/login" className="text-blue-600">Login</Link> </p>
            </div>
          </div>
        </div>
        <div className="p-4 flex justify-center items-center w-full hidden md:hidden lg:block">
          <div className="login-bg rounded-xl w-11/12">
         
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
