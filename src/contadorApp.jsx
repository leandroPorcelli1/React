import PropTypes from "prop-types";
import { useState } from "react";

const ContadorApp = ({ value }) => {
 
  const [counter, setCounter] = useState(value);

  const sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={sumar}>sumar 1</button>
      <button onClick={restar}>restar 1</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

ContadorApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default ContadorApp;
