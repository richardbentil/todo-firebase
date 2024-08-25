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
        className="rounded-full bg-red-400  add-button flex justify-center items-center"
        onClick={() => setIsModalOpen(true)}
      >
        <HiPlus size={35} color="white" />
      </button>
    </div>
  );
}

export default TodoAddButton;
