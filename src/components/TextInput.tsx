import { useRef } from "react";
import "./styles/TextInput.css"
const TextInput = ({ data, fn }: { data: any; fn: any }) => {
  const inputRef: any = useRef(null);
  const btnClick = () => {
    if (inputRef.current) {
      const curr_value = inputRef.current.value;
      fn([...data, curr_value]);
    }
  };
  return (
    <div>
      <input className="input" ref={inputRef} type="text"></input>
      <button className="button"  onClick={() => btnClick()}>Save</button>
    </div>
  );
};

export default TextInput;
