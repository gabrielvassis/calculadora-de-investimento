import logo from "./investment-calculator-logo.png";

import InputBox from "./components/InputBox";

function App() {
  const submitHandler = (event) => {
    console.log("oi");
    event.preventDefault();
  };
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo"></img>
        <h1>Calculadora de Investimento</h1>
      </header>
      <InputBox submitHandler={submitHandler} />
    </div>
  );
}

export default App;
