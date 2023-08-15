import logo from './logo.svg';
import './App.css';
import Quiz from './quiz';



function App() {

  const handleClick = (option, answer) => {
    alert(`This is Carl's button!`);

  };

  return (
    <div className="App">

      <Quiz />
      <hr></hr>
      <h1>This is a new heading from Carl</h1>
      <p>New stuff</p>
      <button onClick={() => handleClick()}>Carl's Button</button>
    </div>
  );
}

// const App = () => {
//   // An array of data
//   const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Mango'];

//   // A function to render each item as a list element
//   const renderFruit = (fruit, index) => {
//     return <li key={index}>{fruit}</li>;
//   };

//   return (
//     <div>
//       <h1>Fruits List</h1>
//       <ul>{fruits.map(fruit =>
//         <li>{fruit}</li>
//       )}
//       </ul>
//     </div>
//   );
// };

export default App;
