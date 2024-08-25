import Header from "@/components/common/Header";
import Layout from "@/components/common/Layout";
import TodoAddButton from "@/components/TodoAddButton";
import useAuth from "@/hooks/useAuthState";
import TodoList from "@/modules/TodoList";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Modal = dynamic(import("@/components/TodoModal"));
const TodoForm = dynamic(import("@/modules/AddTodoForm"));

function Todos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [item, setItem] = useState<any>()
  const { user, loading }: any = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <Header user={user} />
      <div className="container px-3 lg:px-6 py-8 md:flex md:justify-center relative">
        <div className="md:w-2/3 lg:w-1/3">
          <h1>{user?.displayName}</h1>
          <h1 className="text-2xl font-bold mb-7">To Do List</h1>

          <TodoList setIsModalOpen={setIsModalOpen} setItem={setItem}  />
        </div>
      </div>
      <TodoAddButton setIsModalOpen={setIsModalOpen} />
      <Modal isOpen={isModalOpen} onClose={setIsModalOpen}>
        <TodoForm setIsModalOpen={setIsModalOpen} user={user} item={item} />
      </Modal>
    </Layout>
  );
}

export default Todos;
