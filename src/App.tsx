import React, { useState } from 'react';

import Color from './components/Color';
import Background from './components/Background';
import Opacity from './components/Opacity';


const App = () => {
  const [styles, setStyles] = useState({
    color: "black",
    background: "whilte",
    opacity: "1.0",
    borderRadius: "50%",
    fontSize: "30px",
  });
  const [disabled, setDisabled] = useState(false);
  const [text, setText] = useState("custom button");

  return (
    <div>
      <p>Button Description (useEffect使ってそれぞれの詳細情報を載せる)</p>
      <input 
        type="button"
        style={styles}
        disabled={disabled}
        value={text}
      />

      <Color 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setStyles({...styles, color: e.target.value});
        }}
      />
      <Background 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setStyles({...styles, background: e.target.value});
        }}
      />
      <Opacity 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setStyles({...styles, opacity: e.target.value});
        }}
      />
    </div>
  );
}

export default App;
