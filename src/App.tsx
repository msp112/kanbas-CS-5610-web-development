import React from 'react';
import logo from './logo.svg';
import './App.css';
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas"; 

function App() {
  return (
    <div>
      <Labs/>
      <Kanbas/>
      <HelloWorld/> 
    </div>
    
// if the HelloWorld component would have been implemented in
// HelloWorld/index.tsx, the import statement would have been the
// same. This simplifies deciding implementing components as single
// file or a folder. If the extension is ommitted from the import
// statement, then first it will attempt to import a file called
// HelloWorld.tsx. If it fails it will then attempt to import
// index.tsx in a folder called HelloWorld, e.g., HelloWorld/tsx.
// Since the HelloWorld component is trivial, we decided to use
// a single file, e.g., HelloWorld.tsx


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
} // Returns the output of the algorithm as HTML 

export default App;
