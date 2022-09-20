//Example 3
const fruitsArray = [
  {
    name: "Apple",
    units: 3,
    price: 0.25,
  },
  {
    name: "Mango",
    units: 6,
    price: 0.35,
  },
  {
    name: "Banana",
    units: 4,
    price: 0.15,
  },
];

fruitsArray.map((fruits, index) => {
  console.log(
    `${index + 1}) ${fruits.units} units of ${fruits.name}s costs $${(
      fruits.price * fruits.units
    ).toFixed(2)}`
  );
});

function Main(props) {
  return (
    <>
      <div className="main">
        <h4>This the main content</h4>
        <p>{props.stuff}</p>
        <div className="fruitDisplay">
          {fruitsArray.map((fruits, index) => {
            return (
              <div className="fruits">
                {index + 1}) {fruits.units} units of {fruits.name}s costs $
                {(fruits.price * fruits.units).toFixed(2)}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Main;
