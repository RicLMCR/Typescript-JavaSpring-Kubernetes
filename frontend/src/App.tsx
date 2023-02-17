import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import List from "./components/list/List";

interface IState {
  myList: {
    name: string;
    key: number;
  }[];
}
const App = () => {
  //state to hold list object
  //useeffect hook to trigger API function call
  //function makes API call to retrive list object
  //randomise function to be placed at back end

  const [myList, setMyList] = useState<IState["myList"]>([
    { name: "Steve Smith", key: 1 },
    { name: "Bob Banes", key: 2 },
    { name: "John Jones", key: 3 },
  ]);

  // monitor changes to list and update
  // as a temp measure - no api call - just update
  const changeList = () => {
    setMyList([{ name: "Dave", key: 4 }]);
  };

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <List list={myList} />
      <button type="submit">Change List</button>
      <footer></footer>
    </div>
  );
};

export default App;
