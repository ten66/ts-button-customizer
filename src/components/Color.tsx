import React from 'react';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Color: React.VFC<Props> = (props) => (
  <div>
    <label>Color </label>
    <input 
      type="color"
      onChange={props.onChange}
    />
  </div>
)

export default Color;