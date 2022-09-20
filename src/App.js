import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Car from "./components/Car";

const message1 = "Hello";
const message2 = "What's going on?";
const message3 = "(C) 2007";

function greet(personName) {
  return { name: `Hello ${personName}` };
}

// example 1 of using array methods
const numbers = [1, 4, 9];
const roots = numbers.map(function (number) {
  return number + 1;
});

// example 2
const fruits = ["apple", "mango", "orange"];
const newFruits = fruits.map((fruit, index) =>
  console.log(`${index}. ${fruit}`)
);
// When usuing arrow we don't have to use return - it will still return

const user = {
  firstName: "Andrew",
  lastName: "Grenon",
  id: "Drivers License",
  isVerified: true,
};

// const id=user.id;
// const isVerified = user.isVerified;

const { id, isVerified } = user; //QUIRKY! this = user = user.id + user.isVerified?
console.log(id, isVerified);

const myObj = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "It's collaboration time",
    bs: "harness real-time e-markets",
  },
};

const { name, email } = myObj;
console.log(name, email);

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <h1>{greet("Reuben").name}</h1>
        <h2>How are you? </h2>
        <h3>The weather could be better</h3>
      </div>
      <Main stuff={message2}></Main>
      <Car colour="red" carName="Toyota" copyrightYear={message3}></Car>
      <Footer text={message3}></Footer>
    </>
  );
}

export default App;
