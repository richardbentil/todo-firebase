// components/TodoModal.js
import React from 'react';
import { MdClose } from 'react-icons/md';

const TodoModal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return <></>;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <div className="flex justify-end">
          <button
            className="text-red-500"
            onClick={() => onClose(false)}
          >
            <MdClose />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default TodoModal;
