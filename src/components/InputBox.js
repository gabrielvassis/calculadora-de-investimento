function InputBox(props) {
  const buttonClickHandler = () => {
    console.log("oi");
  };

  return (
    <div>
      <form className="form" onSubmit={props.submitHandler}>
        <div className="input-group">
          <p>
            <label>Investimento inicial</label>
            <input type="text"></input>
          </p>
          <p>
            <label>Investimento ao fim do ano</label>
            <input type="text"></input>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>% de juros ao ano</label>
            <input type="number"></input>
          </p>
          <p>
            <label>Duração do investimento</label>
            <input type="number"></input>
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
}

export default InputBox;
