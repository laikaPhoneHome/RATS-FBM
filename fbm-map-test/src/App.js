import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { InputMap } from './Components/InputMap.jsx/InputMap';
import { PostInfo } from './Components/InputMap.jsx/PostInfo';

function App() {
  const [data, setData] = useState([{location: [50,50]}]);
  const [postCode, setPostCode] = useState('');
  const [area, setArea] = useState('');
  return (
    <div className="App">
      <InputMap data={data} setData={setData} setPostCode={setPostCode} setArea={setArea} />
      <PostInfo  area={area} postCode={postCode} data={data} />
    </div>
  );
}

export default App;
