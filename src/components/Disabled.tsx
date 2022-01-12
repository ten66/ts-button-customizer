import React from "react";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Disabled: React.VFC<Props> = ({ onChange }) => (
  <div>
    <label>Disabled </label>
    <input 
      type="checkbox"
      onChange={onChange}
    />
  </div>
)

export default Disabled;