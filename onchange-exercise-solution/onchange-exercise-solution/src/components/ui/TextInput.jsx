import './TextInput.css';

export const TextInput = ({ changeFn }) => (
  <input className="text-input" onChange={changeFn}></input>
);
