import React, { useState } from 'react';

const MyComponent = () => {
  const [value, setValue] = useState([]);

  const handleClick = function(message, name) {
    setValue([message, name]);
  };

  const handleButtonClick = (context, message, name) => {
    handleClick.call(context, message, name);
  };

  return (
    <div>
      <h1>{value[0]}</h1>
      <h2>{value[1]}</h2>
      <button onClick={() => handleButtonClick('nithish', 'Hello', 'John')}>
        Click me with dynamic invocation
      </button>
    </div>
  );
};

export default MyComponent;
