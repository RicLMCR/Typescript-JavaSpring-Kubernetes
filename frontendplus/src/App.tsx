import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CopyMessage from './components/copyMessage/CopyMessage';
import Header from './components/header/Header';
import List from './components/list/List';
import Counter from './components/counter/Counter';
import TypescriptTest from './components/typescriptTests/TypescriptTest';
import GenName from './components/conditionalProps/GenName';
import GenAge from './components/conditionalProps/GenAge';

interface IState {
  myList: {
    name: string;
    key: number;
  }[];
}

interface IREDUXSTATE {
  count: number;
}

const App = () => {
  //state to hold list object
  //useeffect hook to trigger API function call
  //function makes API call to retrive list object
  //randomise function to be placed at back end

  const [myList, setMyList] = useState<IState['myList']>([
    { name: 'Steve Smith', key: 1 },
    { name: 'Bob Banes', key: 2 },
    { name: 'John Jones', key: 3 },
  ]);

  // Store copy to clipboard popup message
  const [copyMessageState, setCopyMessageState] =
    useState<string>('Copy to Clipboard');

  // as a temp measure - no api call - just change the list
  const changeList = () => {
    const newEntry = [{ name: 'Dave', key: 4 }];
    setMyList(newEntry);
  };

  // Change copy to clipboard message and back again
  const timeChange = (textChange: string) => {
    setCopyMessageState(textChange);
    setTimeout(() => {
      setCopyMessageState('Copy to Clipboard');
    }, 2000);
  };

  // redux state call
  const myCount = useSelector<IREDUXSTATE>((state: any) => state.counter.count);
  // monitor changes to list and update

  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <div className="componentContainer">
        <div className="componentWrap">
          <List list={myList} />

          <button
            type="submit"
            onClick={() => {
              changeList();
            }}
          >
            Change List
          </button>
        </div>
        <div className="componentWrap">
          <CopyMessage copyMessage={copyMessageState} />
          <button onClick={() => timeChange('Succesfully Copied')}>
            Change copy sign
          </button>
        </div>
        <div className="componentWrap">
          <Counter />
        </div>
        <div className="componentWrap">
          <TypescriptTest />
        </div>
        <div className="componentWrap">
          <h1>Conditional Props & Types</h1>
            <GenName/>
            <GenAge/>
        </div>
      </div>

      <footer></footer>
    </div>
  );
};

export default App;
