import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [persons, setPersons] = useState([]);
  const [addUserBtn, setAddUserBtn] = useState("");
  const [doubleBtn, setDoubleBtn] = useState("");
  const [showMillionairBtn, setShowMillionairBtn] = useState("");
  const [sortBtn, setSortBtn] = useState("");
  const [calculateWealthBtn, setCalculateWealthBtn] = useState("");

  fetch("https://randomuser.me/api");
  return (
    <div className="container">
      <aside>
        <button className="add-user">Add User</button>
        <button className="double">Double Money</button>
        <button className="show-millionaires">show only millionaires</button>
        <button className="sort">sort by richest</button>
        <button className="calculate-wealth">Calculate entire wealth</button>
      </aside>

      <main className="main">
        <h2>
          <strong>Person</strong>Wealth
        </h2>
      </main>
    </div>
  );
}

export default App;
