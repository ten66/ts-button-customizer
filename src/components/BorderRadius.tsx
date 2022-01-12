import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const BorderRadius: React.VFC<Props> = ({ onChange }) => (
  <div>
    <label>BorderRadius</label>
    <input 
      type="range"
      min="0"
      max="50"
      step="1"
      onChange={onChange}
    />
  </div>
)

export default BorderRadius;