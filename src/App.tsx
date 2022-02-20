import React, {useState} from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';


export interface IState {
  family: {

    fname: string
    lname: string
    age: number
  }[]

}

function App() {

  const [family, setFamily] = useState<IState["family"]>([
    {
      fname: "Anu",
      lname: "Lindroos",
      age: 29
    }
  ])

  return (
    <div className="App">
      <h1>My family</h1>
      <List family={family}/>
      <AddToList family={family} setFamily={setFamily}/>
      
    </div>
  );
}

export default App;
