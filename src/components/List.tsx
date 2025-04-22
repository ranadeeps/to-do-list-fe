import Item from "./Item";

const List = ({ data }: { data: any[] }) => {
  console.log(data);
  return (
    <div>
      {data.map((item, key) => {
        return <Item keyValue={key} data={item}></Item>;
      })}
    </div>
  );
};

export default List;
