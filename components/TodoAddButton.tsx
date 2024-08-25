import React from "react";
import { HiPlus } from "react-icons/hi";

function TodoAddButton({
  setIsModalOpen,
}: {
  setIsModalOpen: (value: boolean) => void;
}) {
  return (
    <div>
      <button
        className="rounded-full bg-red-200  add-button flex justify-center items-center"
        onClick={() => setIsModalOpen(true)}
      >
        <HiPlus size={35} />
      </button>
    </div>
  );
}

export default TodoAddButton;
