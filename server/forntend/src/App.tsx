import React, { useState, ChangeEventHandler } from "react";
import NoteItem from "./components/NoteItem";

// let title = "";
const App = () => {
  // const [title, setTitle] = useState("hello");
  // const [description, setDescription] = useState("hello");

  const [values, setValues]=useState({
    title: "",
    description: ""
  })

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = ({target}) => {
    const {name, value} = target
    setValues({...values, [name]: value})

  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <form onSubmit={(evt) => {
        evt.preventDefault();
        console.log(values);
      }} className="space-y-6 bg-white shadow-md rounded p-5">
        <h1 className="font-semibold text-2xl text-center">Note Application</h1>
        <div>
        
          <input
            placeholder="Title"
            type="text"
            className="w-full border-b-2 border-gray-700 outline-none"
            onChange={handleChange}
            value={values.title}
            name="title"
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            className="w-full border-b-2 border-gray-700 outline-none resize-none h-36"
            value = {values.description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
        <div className="text-right">
          <button
        
            className="bg-blue-500 text-white px-5 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Note Items */}
      <NoteItem title="My first re-usable component" />
      <NoteItem title="Lorem ipsum dolor sit amet consectetur" />
      <NoteItem title="Hic perferendis at repellendus fuga" />
      <NoteItem title="In molestiae optio aspernatur repudiandae" />
    </div>
  );
};

export default App;