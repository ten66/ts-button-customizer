import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Background: React.VFC<Props> = ({ onChange }) => (
  <div>
    <label>Background </label>
    <input 
      type="color"
      onChange={onChange}/>
  </div>
)

export default Background;