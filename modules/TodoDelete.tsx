import { deleteDocument } from "@/lib/firebase-firestore/delete_document";
import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";
import { useMutation, useQueryClient } from "react-query";

function TodoDelete({ id }: { id: string }) {
  const queryClient = useQueryClient();
  const [msg, setMsg] = useState("");

  const { mutate, isLoading, isError }: any = useMutation(
    async (values: any) => {
      return await deleteDocument(id);
    },
    {
      onSuccess(data: any) {
        if (data?.errorCode) {
          setMsg("There was an error");
        } else {
          queryClient.invalidateQueries("todos");
          setMsg("deleted todo successful");
        }
      },
      onError(error: any) {
        setMsg(error.message);
      },
    }
  );
  return (
    <button disabled={isLoading} onClick={mutate}>
      {isLoading ? "Deleting..." : <HiTrash className="text-red-400" />}
    </button>
  );
}

export default TodoDelete;
