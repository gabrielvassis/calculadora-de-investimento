import logo from "./investment-calculator-logo.png";
import InputBox from "./components/InputBox";
import ResultsTable from "./components/ResultsTable";
import { useState } from "react";
const App = () => {
  const [tableValues, setTableValues] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const onCalculate = (event) => {
    console.log(event);
    setTableValues(event);
    console.log(tableValues);
    setShowTable(true);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo"></img>
        <h1>Calculadora de Investimento</h1>
      </header>
      <InputBox onCalculate={onCalculate} />
      {showTable ? (
        <ResultsTable showResults={tableValues} />
      ) : (
        "Nenhum dado a ser calculado"
      )}
    </div>
  );
};

export default App;
