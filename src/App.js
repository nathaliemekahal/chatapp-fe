import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ChatPage from "./components/ChatPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <HomePage /> */}
      <ChatPage />
    </div>
  );
}

export default App;
