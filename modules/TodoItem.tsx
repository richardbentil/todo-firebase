import React, { useState } from "react";
import TodoDelete from "./TodoDelete";
import { HiOutlinePencil, HiPencil, HiTrash } from "react-icons/hi";

function TodoItem({ item, setIsModalOpen, setItem }: any) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="rounded-xl border border-gray-200 my-4">
        <div className="flex items-center justify-between p-4 border-0">
          <div>
            <h1 className="mb-2 text-xl">{item?.task}</h1>
            <p className="">
              <span className="px-2 bg-red-200 rounded text-sm">
                {item?.priority}
              </span>
            </p>
          </div>
          <div className="flex">
            <button
              className="me-3"
              onClick={() => {
                setItem(item);
                setIsModalOpen(true);
              }}
            >
              <HiOutlinePencil />
            </button>{" "}
            <button className="me-3" onClick={() => setShow(true)}>
              <HiTrash className="text-red-400" />
            </button>{" "}
          </div>
        </div>
      </div>
      {show && (
        <div className="d-flex justify-between items-center bg-red-50 text-sm rounded p-1 px-2">
          <div>
            <p className="text-gray-400">Do you want to delete item</p>
          </div>
          <div className="flex">
            {" "}
            <TodoDelete id={item?.id} />
            <button onClick={() => setShow(false)} className="ms-2">
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoItem;
