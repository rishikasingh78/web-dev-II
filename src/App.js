// create an imput field where a user enters there name . display the enter name in real time below the input field has the user type 
// create a react application demonstrating use of the context api 
// requirment - create the context , provide datat from a parent component and consume the data in the nested child component 
// end term practical sem 2 

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Enter Your Name</h2>

      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Your Name: {name}</h3>
    </div>
  );
}

export default App;