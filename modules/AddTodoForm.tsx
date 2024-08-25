import { Field, Form } from 'formik'
import React from 'react'

function TodoForm() {
  return (
    <>
    <div className="lg:w-3/12">
          <h1 className="text-xl font-bold">What do you want to do today?</h1>
          <p className="mb-8">Add tasks to your to-do list</p>
          <Form action="">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-semibold">Task</label>
              <Field
                type="text"
                name="task"
                placeholder="Go to the gym"
                className="border rounded px-4 py-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300"
              />
            </div>
            <div className="mb-10">
              <label htmlFor="" className="block mb-2">Priority</label>
              <Field
                placeholder="hello"
                className="border rounded px-4 py-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300"
              >
                <option value="">Select priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Field>
            </div>
            <div className="mb-4 flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
              >
                Add Todo
              </button>
            </div>
          </Form>
        </div>
    </>
  )
}

export default TodoForm