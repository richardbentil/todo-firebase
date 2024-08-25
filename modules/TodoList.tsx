import { getAllTodos } from "@/lib/firebase-firestore/get_all_documents";
import React from "react";
import { useQuery } from "react-query";
import TodoItem from "./TodoItem";

function TodoList() {
  const { data, isLoading, isError }: any = useQuery("todos", async () => {
    const response = await getAllTodos("todos");
    return response;
  });

  let content: any;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = <p>Error fetching data</p>;
  }

  const list = data;

  if (!list || list.length === 0) {
    content = <p>No todos found</p>;
  }

  if (list) {
    content = (
      <>
        {list?.map((item: any) => (
          <React.Fragment key={item.id}>
            <TodoItem item={item} />
          </React.Fragment>
        ))}
      </>
    );
  }

  return <div>{content}</div>;
}

export default TodoList;
