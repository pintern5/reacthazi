import { useState } from 'react';

export const CircleComponent = ({ width, height, backgroundColor, count }) => {
  const [getSzamlalo, setSzamlalo] = useState(count);

  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        borderRadius: "50%", 
        display: "flex",     
        justifyContent: "center",
        alignItems: "center",
        color: "white"      
      }}
      className="p-2 m-5" 
      onClick={() => {
        setSzamlalo(getSzamlalo + 1);
      }}
    >
      <h1>{getSzamlalo}</h1>
    </div>
  );
};
