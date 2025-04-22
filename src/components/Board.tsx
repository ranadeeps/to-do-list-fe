import { useState } from "react";
import List from "./List";
import TextInput from "./TextInput";

const Board = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <TextInput data={data} fn={setData}></TextInput>
      <List data={data}></List>
    </div>
  );
};

export default Board;
