 import React, { useEffect, useState} from 'react';
 //import './App.css';

function App() {
  const products= [
    {name: 'Phone', price: '$99.99'},
    {name: 'Cover', price: '$55.99'},
    {name: 'Sim', price: '$40.99'},
    {name: 'Charger', price: '$30.99'}
  ]

  return (
    <div className="App">
      <header className="App-header">
      <h1>MY New React Project</h1>

         {/* short verson */}
         {
          products.map(products => <Product products={products}></Product>)
        }

        <Counter></Counter>

        <Users></Users>
      </header>
    </div>

  );
}



// Component use
function Product(props){
  const productStyle={
  border: "1px solid gray",
  borderRadius: '5px',
  backgroundColor: 'lightgray',
  color: 'black',
  height: '250px',
  width: '250px',
  float: 'left',
  margin: '10px',
  padding: '20px'
  }

  const {name, price}= props.products
  return (
    <div style= {productStyle}>
     <h2>Name: {name}</h2>
     <h4>{price}</h4>
     <button>Bye Now</button>
    </div>
  )
}



// data Numbering
function Counter(){
  const [count, setCount] = useState(0)
 
   return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
   )
}



// data loding
function Users(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Users:{users.length}</h3>
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
     
    </div>
  )
}
export default App;
