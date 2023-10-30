import logo from "./investment-calculator-logo.png";
import InputBox from "./components/InputBox";
import ResultsTable from "./components/ResultsTable";
import { useState } from "react";
const App = () => {
  const [tableValues, setTableValues] = useState({});
  const [showTable, setShowTable] = useState(false);
  const onCalculate = (data) => {
    setTableValues(data);
    setShowTable(true);
  };

  const onReset = () => {
    setShowTable(false);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo"></img>
        <h1>Calculadora de Investimento</h1>
      </header>
      <InputBox onCalculate={onCalculate} onReset={onReset} />
      {showTable ? (
        <ResultsTable tableValues={tableValues} />
      ) : (
        <div className="actions">Nenhum dado a ser calculado</div>
      )}
    </div>
  );
};

export default App;
