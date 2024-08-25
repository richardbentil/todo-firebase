import Header from "@/components/common/Header";
import Layout from "@/components/common/Layout";
import useAuth from "@/hooks/useAuthState";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Home() {
  const { user } = useAuth();
  return (
    <Layout>
      <Header user={user} />
      <div className="md:columns-2 h-screen">
        <div className="p-6 flex justify-center items-center h-4/5">
          <div>
            <h1 className="text-4xl font-semibold mb-3">Your everyday task</h1>
            <h4 className="text-2xl font-semibold mb-6">Manage your task</h4>
            <Link
              href="/auth/login"
              className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
            >
              Get started
            </Link>
          </div>
        </div>
        <div className="p-6 h-4/5 flex justify-center items-center hidden md:hidden lg:block">
          <div>
            <Image
              src="/img/mobile-view.png"
              width={220}
              height={300}
              alt="mobile-view"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
