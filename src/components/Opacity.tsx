import React from 'react';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Opacity: React.VFC<Props> = ({ onChange }) => (
  <div>
    <label>Opacity </label>
    <input
      type="range"
      min="0"
      max="1"
      step="0.1"
      onChange={onChange}
    />
  </div>
)

export default Opacity;