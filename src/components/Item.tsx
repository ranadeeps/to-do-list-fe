const Item = ({ data, keyValue }: { data: string; keyValue: number }) => {
  return (
    <div>
      <h2 key={keyValue}>{data}</h2>
    </div>
  );
};

export default Item;
