import PropTypes from "prop-types";
<<<<<<< HEAD
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
=======

const ContadorApp = ({ value }) => {
  const imprimeValor = () => {
    console.log({ value });
>>>>>>> main
  };

  return (
    <>
      <h1>CounterApp</h1>
<<<<<<< HEAD
      <h2>{counter}</h2>
      <button onClick={sumar}>sumar 1</button>
      <button onClick={restar}>restar 1</button>
      <button onClick={reset}>reset</button>
=======
      <h2>{value}</h2>
      <button onClick={imprimeValor}>apply</button>
>>>>>>> main
    </>
  );
};

ContadorApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default ContadorApp;
