import { useState } from "react";

const InputBox = (props) => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [perYearInvestment, setPerYearInvestment] = useState(0);
  const [interestPerYearInvestment, setInterestPerYearInvestment] = useState(0);
  const [durationInvestment, setDurationInvestment] = useState(0);
  const buttonClickHandler = () => {
    console.log("oi");
  };

  const initialInvestmentHandler = (event) => {
    setInitialInvestment(event.target.value);
  };

  const perYearInvestmentHandler = (event) => {
    setPerYearInvestment(event.target.value);
  };

  const interestPerYearInvestmentHandler = (event) => {
    setInterestPerYearInvestment(event.target.value);
  };

  const durationInvestmentHandler = (event) => {
    setDurationInvestment(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const tableValues = {
      initial: initialInvestment,
      perYear: perYearInvestment,
      interest: interestPerYearInvestment,
      duration: durationInvestment,
    };

    props.onCalculate(tableValues);
    /*setInitialInvestment(0);
    setPerYearInvestment(0);
    setInterestPerYearInvestment(0);
    setDurationInvestment(0);*/
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label>Investimento inicial</label>
            <input
              type="number"
              value={initialInvestment}
              onChange={initialInvestmentHandler}
            ></input>
          </p>
          <p>
            <label>Investimento ao fim do ano</label>
            <input
              type="number"
              value={perYearInvestment}
              onChange={perYearInvestmentHandler}
            ></input>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>% de juros ao ano</label>
            <input
              type="number"
              value={interestPerYearInvestment}
              onChange={interestPerYearInvestmentHandler}
            ></input>
          </p>
          <p>
            <label>Duração do investimento</label>
            <input
              type="number"
              value={durationInvestment}
              onChange={durationInvestmentHandler}
            ></input>
          </p>
        </div>
        <div className="actions">
          <input
            type="button"
            value="Resetar"
            onClick={buttonClickHandler}
            className="buttonAlt"
          ></input>
          <input type="submit" value="Calcular" className="button"></input>
        </div>
      </form>
    </div>
  );
};

export default InputBox;
