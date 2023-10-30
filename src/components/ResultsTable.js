const ResultsTable = (props) => {
  const renderTableRows = (tableValues) => {
    const rows = [];
    const options = {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    const formatNumber = new Intl.NumberFormat("pt-BR", options);
    let montante = Number(tableValues.initial);
    let total = montante;
    let jurosAno;
    let jurosTotal = 0;
    for (let i = 1; i <= tableValues.duration; i++) {
      jurosAno = total * (Number(tableValues.interest) / 100);
      montante += Number(tableValues.perYear);
      total += Number(tableValues.perYear) + jurosAno;
      jurosTotal += jurosAno;
      rows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{formatNumber.format(total)}</td>
          <td>{formatNumber.format(jurosAno)}</td>
          <td>{formatNumber.format(jurosTotal)}</td>
          <td>{formatNumber.format(montante)}</td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Ano</th>
          <th>Total </th>
          <th>Juros(por ano)</th>
          <th>Juros(total)</th>
          <th>Montante investido</th>
        </tr>
      </thead>
      <tbody>{renderTableRows(props.tableValues)}</tbody>
    </table>
  );
};

export default ResultsTable;
