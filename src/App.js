import Form from "@rjsf/core";
import { useState } from "react";
import './App.css';
import JsonEditor from "./components/JsonEditor.react";
const schema = {
  type: "object",
  properties: {
    title: {
      type: "string"
    },
    name: {
      type: "string"
    }
  }
};
function App() {
  const [formData, setFormData] = useState({})
  return (
    <div className="App">
      <Form schema={schema} formData={formData}
        onSubmit={e => setFormData(e.formData)} />
      <br></br>
      <JsonEditor jsonTemplate={formData} />
    </div>
  );
}

export default App;
