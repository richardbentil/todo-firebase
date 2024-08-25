import TodoAddButton from '@/components/TodoAddButton'
import React, { useState } from 'react'

function Todos() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <div className="container px-3 md:px-6 py-8 md:flex md:justify-center relative">
      <div className="lg:w-1/3">
        <h1 className="text-2xl font-bold mb-7">To Do List</h1>
        <p className="font-semibold mb-5">This Week</p>
        <div>
          <p className="font-semibold text-red-400">Monday, 12th June</p>
        
        </div>
      </div>
    </div>
   <TodoAddButton />
    </>
  )
}

export default Todos