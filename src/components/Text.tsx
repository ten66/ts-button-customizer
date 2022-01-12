import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Text: React.VFC<Props> = ({ onChange }) => (
  <div>
    <label>Text</label>
    <input 
      type="text"
      onChange={onChange}
    />
  </div>
)

export default Text;