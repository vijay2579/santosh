function List() {
  const data = [
    {
      name: "Test 1",
      value: "Some value 1",
    },
    {
      name: "Test 2",
      value: "Some value 2",
    },
    {
      name: "Test 3",
      value: "Some value 3",
    },
  ];

  const Obj = {
    name: "Santu",
    designation: "Engineer",
    address: {
      city: "RNR",
    },
  };

  return (
    <>
      <ul>
        {data.map(function (item, index) {
          return <li key={index.toString()}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}

export default List;
