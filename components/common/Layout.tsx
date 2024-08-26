import Head from "next/head";
import Script from "next/script";
import React from "react";

function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Head>
        <title>Todoist</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="A todo application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {children}{/* 
      <Script src="https://cdn.tailwindcss.com" /> */}
    </>
  );
}

export default Layout;
