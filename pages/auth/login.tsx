import Layout from "@/components/common/Layout";
import FaceBookGoogleButtons from "@/modules/FaceBookGoogleButtons";
import LoginForm from "@/modules/LoginForm";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Login() {
  
  const router = useRouter();
  return (
    <Layout>
      <div className="lg:columns-2">
        <div className="pb-3 mt-2 lg:mt-8 xl:mt-0 p-4 h-screen flex justify-center items-center overflow-y-auto">
          <div className="w-full lg:w-6/12">
            <h1 className="text-xl font-bold">Welcome back</h1>
            <p className="mb-4 lg:mb-0">Today is a new day. Its your day. You shape it</p>
            <p className="mb-4 lg:mb-8">Sign in to start managing your projects</p>
           <LoginForm router={router} />

            <div className="w-full my-3">
              <div className="flex">
                <span className="border-b w-2/3 mb-2"></span>
                <span className="mx-3">or</span>
                <span className="border-b w-2/3 mb-2"></span>
              </div>
            </div>
            <FaceBookGoogleButtons text="Sign in" page="login" router={router} />
            <div className="mb-8 flex justify-center">
              <p className="">Dont you have an account? <Link href="/auth/signup" className="text-blue-600">Sign up</Link></p>
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

export default Login;
