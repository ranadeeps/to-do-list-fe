import { useRef } from "react";

const TextInput = ({ data, fn }: { data: any; fn: any }) => {
  const inputRef: any = useRef(null);
  console.log(inputRef);
  const btnClick = () => {
    if (inputRef.current) {
      const curr_value = inputRef.current.value;
      fn([...data, curr_value]);
    }
  };
  return (
    <div>
      <input ref={inputRef} type="text"></input>
      <button onClick={() => btnClick()}>Save</button>
    </div>
  );
};

export default TextInput;
