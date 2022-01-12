import React from 'react';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Color: React.VFC<Props> = ({ onChange }) => (
  <div>
    <label>Color </label>
    <input 
      type="color"
      onChange={onChange}
    />
  </div>
)

export default Color;