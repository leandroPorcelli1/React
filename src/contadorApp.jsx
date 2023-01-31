import PropTypes from "prop-types";

const ContadorApp = ({ value }) => {
  const imprimeValor = () => {
    console.log({ value });
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <button onClick={imprimeValor}>apply</button>
    </>
  );
};

ContadorApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default ContadorApp;
