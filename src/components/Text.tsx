import React from "react";

type Props = {
  // value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Text: React.VFC<Props> = ({ onChange }) => (
  <div>
    <label>Text</label>
    <input 
      type="text"
      // value={value}
      onChange={onChange}
    />
  </div>
)

export default Text;