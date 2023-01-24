import axios from "axios";
import { useEffect, useState } from "react";
export function Content() {
  
  const [coffeee,setCoffeee] = useState([]);
  const getCoffee = () => {
    axios.get('https://api.sampleapis.com/coffee/hot').then(response => {
      console.log(response.data);
      setCoffeee(response.data);
    });
  }

  useEffect(getCoffee, []);
  
  return (
    <div >
      <h1>Welcome to React!</h1>
      {coffeee.map(coffee => (
        <p key={coffee.id}>{coffee.title}</p>
      ))}
    </div>
  )
}