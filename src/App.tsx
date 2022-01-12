import React, { useState } from 'react';

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
      <h1>React + TypeScript</h1>
      <h2>関数コンポーネント練習用</h2>

      <input 
        type="button"
        style={styles}
        disabled={disabled}
        value={text}
      />
    </div>
  );
}

export default App;
