import logo from './logo.svg';
import './App.css';
import Nuna from './components/Nuna';
import Textform from './components/Textform';
import About from './components/About';
import Navbar from './components/Navbar';
import React,{useState} from 'react';

function App() {
  const [Mode,setMode] = useState('light');

  return (
<>

<Navbar  mode={Mode}></Navbar>
<Nuna></Nuna>
<div className="container" >
<Textform heading="Enter the word analyze" />

<About></About>
<About></About>
</div>

    </>
  );
}

export default App;
