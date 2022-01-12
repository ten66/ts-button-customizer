import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FontSize: React.VFC<Props> = ({ onChange }) => (
  <div>
    <label>FontSize</label>
    <input 
      type="range"
      min="10"
      max="40"
      step="1"
      onChange={onChange}
    />
  </div>
)

export default FontSize;