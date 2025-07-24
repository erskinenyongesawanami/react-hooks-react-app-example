import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // ✅ Step 3: Import the new component

function App() {
  return (
    <div className="App">
      <h1>Now</h1> {/* ✅ Step 1: Replaced the formatted time */}
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
      <TestComponent /> {/* ✅ Step 3: Added new component */}
    </div>
  );
}

export default App;
