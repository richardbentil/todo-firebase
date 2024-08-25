import Header from "@/components/common/Header";
import Layout from "@/components/common/Layout";
import TodoAddButton from "@/components/TodoAddButton";
import TodoList from "@/modules/TodoList";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Modal = dynamic(import("@/components/TodoModal"))
const TodoFormdal = dynamic(import("@/modules/AddTodoForm"))

function Todos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Layout>
      <Header />
      <div className="container px-3 md:px-6 py-8 md:flex md:justify-center relative">
        <div className="lg:w-1/3">
          <h1 className="text-2xl font-bold mb-7">To Do List</h1>

          <TodoList />
        </div>
      </div>
      <TodoAddButton setIsModalOpen={setIsModalOpen} />
      <Modal isOpen={isModalOpen} onClose={setIsModalOpen}>
        <TodoFormdal setIsModalOpen={setIsModalOpen} />
      </Modal>
    </Layout>
  );
}

export default Todos;
