import React, { useState } from 'react';

import Color from './components/Color';
import Background from './components/Background';
import Opacity from './components/Opacity';
import BorderRadius from './components/BorderRadius';
import FontSize from './components/FontSize';
import Disabled from './components/Disabled';
import Text from './components/Text';

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
      <BorderRadius 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setStyles({...styles, borderRadius: e.target.value+"%"});
        }}
      />
      <FontSize 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setStyles({...styles, fontSize: e.target.value+"px"});
        }}
      />
      <Disabled 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setDisabled(e.target.checked);
        }}
      />
      <Text 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
