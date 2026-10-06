import {useState} from 'react';
export const BoxComponent =({width, height, backgroundColor, count})=> {
const [getSzamlalo, setSzamlalo] = useState(count);
return <div
      style={{ width: width,
        height: height,
        backgroundColor: backgroundColor
      }}
    className="p-2 m-5 rounded"
        onClick={() => {
          setSzamlalo(getSzamlalo + 1);
        }}
      ><h1>{getSzamlalo}</h1></div>;
}