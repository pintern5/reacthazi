import './App.css'
import { useState } from 'react';
//import { Hello } from './Hello';
//import { Year } from './Year';
import { BoxComponent } from './BoxComponent';
import { CircleComponent } from './CircleComponent'; 

export const App = () => {
//const [getYear, setYear] = useState(2000);
//const [getName] = useState("Andrea");
  return (
    <div className="border">
     
    <BoxComponent width="200px" height="200px" backgroundColor="red" count={1} />
    <BoxComponent width="150px" height="150px" backgroundColor="green" count={2} />
    <BoxComponent width="100px" height="100px" backgroundColor="blue" count={5} />

    
    <CircleComponent width="200px" height="200px" backgroundColor="blue" count={3} />
    <CircleComponent width="150px" height="150px" backgroundColor="green" count={5} />
    <CircleComponent width="100px" height="100px" backgroundColor="red" count={7} />

    </div>
  )
}
