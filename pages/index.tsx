import React from 'react'

function Home() {
  return (
    <>
     <div className="md:columns-2 h-screen">
      <div className="p-6 flex justify-center items-center h-4/5">
        <div>
        <h1 className="text-4xl font-semibold mb-3">Your everyday task</h1>
        <h4  className="text-2xl font-semibold mb-6">Manage your task</h4>
        <a href="/auth/login" className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white">Get started</a>
      </div>
      </div>
      <div className="p-6 h-4/5 flex justify-center items-center">you</div>
    </div>
    </>
  )
}

export default Home