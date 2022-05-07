import React, { useState } from 'react';

function FetchTest() {
  const [text, setText] = useState('Default Stuff');

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/test', {
        method: 'GET'
    });
    console.log(response)
    const data = await response.json();
    console.log(data)
    setText(data.test);
  };
  return (
    <div>
      <button onClick={fetchData}>GetData</button>
      <h3>{text}</h3>
    </div>
  );
}

export default FetchTest;
