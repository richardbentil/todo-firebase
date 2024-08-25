import React from 'react'
import TodoDelete from './TodoDelete'
import { HiOutlinePencil, HiPencil } from 'react-icons/hi'

function TodoItem({item}: any) {
  return (
    <>
      <div className="rounded-xl border border-gray-200 my-4">
            <div
              className="flex items-center justify-between p-4 border-0"
            >
              <div>
                <h1 className="mb-2 text-xl">{item?.task}</h1>
                <p className="px-2 bg-red-200 rounded text-sm">{item?.priority}</p>
              </div>
              <div className="flex"><button className='me-3'><HiOutlinePencil /></button> <TodoDelete /></div>
            </div>
          </div>
    </>
  )
}

export default TodoItem