import { getAllTodos } from "@/lib/firebase-firestore/get_all_documents";
import React from "react";
import { useQuery } from "react-query";
import TodoItem from "./TodoItem";
import useAuth from "@/hooks/useAuthState";
import { categorizeTodos } from "@/utils/categorize_todos";
import { getFormattedDate } from "@/utils/getTodaysDate";

function TodoList({ setIsModalOpen, setItem }: any) {
  const { user }: any = useAuth();

  const { data, isLoading, isError }: any = useQuery(
    "todos",
    async () => {
      const response = await getAllTodos(user?.uid);
      return response;
    },
    { enabled: Boolean(user?.uid) }
  );

  let content: any;

  if (isLoading) {
    content = (
      <div className="h-3/5 flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    content =  <div className="h-3/5 flex justify-center items-center"><p>Error fetching data</p></div>;
  }

  const list = categorizeTodos(data);

  const today = list?.today;

  const thisWeek = list?.week;

  const pastTodos = list?.pastTodos;

  if (!data || data.length === 0) {
    content = <p className="text-center">No todos found</p>;
  }

  if (data?.length > 0) {
    content = (
      <>
        <p className="font-semibold mb-5">This Week</p>
        <div>
          <p className="font-semibold text-red-400">{getFormattedDate()}</p>
        </div>
        {today?.map((item: any) => (
          <React.Fragment key={item.id}>
            <TodoItem
              item={item}
              setIsModalOpen={setIsModalOpen}
              setItem={setItem}
            />
          </React.Fragment>
        ))}
        {thisWeek?.map((item: any) => (
          <React.Fragment key={item.id}>
            <TodoItem
              item={item}
              setIsModalOpen={setIsModalOpen}
              setItem={setItem}
            />
          </React.Fragment>
        ))}
        {pastTodos?.map((item: any) => (
          <React.Fragment key={item.id}>
            <TodoItem
              item={item}
              setIsModalOpen={setIsModalOpen}
              setItem={setItem}
            />
          </React.Fragment>
        ))}

        {thisWeek?.map((item: any) => (
          <React.Fragment key={item.id}>
            <TodoItem
              item={item}
              setIsModalOpen={setIsModalOpen}
              setItem={setItem}
            />
          </React.Fragment>
        ))}
      </>
    );
  }

  return <div>{content}</div>;
}

export default TodoList;
