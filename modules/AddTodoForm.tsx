import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addDocument } from "@/lib/firebase-firestore/add_document";
import { setTimeout } from "timers";
import { updateDocument } from "@/lib/firebase-firestore/update_document";

const Error = ({ name }: { name: string }) => (
  <ErrorMessage name={name} component="div" className="text-sm text-red-500" />
);

function TodoForm({ setIsModalOpen, user, item }: any) {
  const initialValues = { task: item?.task, priority: item?.priority };
  const queryClient = useQueryClient();

  const [msg, setMsg] = useState("");

  const { mutate, isLoading, isError, data }: any = useMutation(
    async (values: any) => {
      const { task, priority } = values;
      if (item?.id) {
        return await updateDocument(item?.id, { task, priority });
      } else {
        return await addDocument({
          userId: user?.uid,
          task,
          priority,
          createdAt: new Date(),
        });
      }
    },
    {
      onSuccess(data: any) {
        if (data?.errorCode) {
          setMsg(
            data?.errorCode?.includes("invalid-credential")
              ? "Invalid credentials"
              : data.errorMessage
          );
        } else {
          setMsg("Added/Updated todo successfully");
          queryClient.invalidateQueries("todos");
          setTimeout(() => {
            setMsg("");
            setIsModalOpen(false);
          }, 1000);
        }
      },
      onError(error: any, variables, context) {
        setMsg(error.message);
      },
    }
  );
  return (
    <>
      <div className="">
        <h1 className="text-xl font-bold">What do you want to do today?</h1>
        <p className="mb-8">Add tasks to your to-do list</p>
        <Formik
          initialValues={initialValues}
          onSubmit={function (
            values: FormikValues,
            formikHelpers: FormikHelpers<FormikValues>
          ): void | Promise<any> {
            mutate(values, {
              onSuccess: () => {
                formikHelpers.resetForm();
              },
            });
          }}
          validationSchema={schema}
        >
          {() => (
            <Form action="">
              <div className="mb-4">
                <label htmlFor="task" className="block mb-1 font-semibold">
                  Task
                </label>
                <Field
                  type="text"
                  name="task"
                  placeholder="Go to the gym"
                  className="border rounded px-4 py-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300"
                />
                <Error name="task" />
              </div>
              <div className="mb-10">
                <label htmlFor="priority" className="block mb-2">
                  Priority
                </label>
                <Field
                  as="select"
                  name="priority"
                  className="border rounded px-4 py-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300"
                >
                  <option value="">Select priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Field>
                <Error name="priority" />
              </div>
              {isError && (
                <p className="text-sm text-red-600">There was an error.</p>
              )}
              {data?.id && <p className="text-sm text-green-600">{msg}</p>}
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded text-white"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : item?.id ? "Edit todo" : "Add to do"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

const schema = Yup.object().shape({
  task: Yup.string().required("Enter task"),
  priority: Yup.string()
    .oneOf(["High", "Medium", "Low"], "Select one of the following")
    .required("Enter your password"),
});

export default TodoForm;
