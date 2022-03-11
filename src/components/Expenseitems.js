import "./Expenseitem.css";

function ExpenseItems() {

  const date = new Date(2021,2,11);
  console.log(date);
  return (
    <div className="expense-item">
      <div>{date.toDateString()}</div>
      <div className="expese-item__description">
        <h2>{1+1}</h2>
      </div>
      <div className="expense-item__price">298.3</div>
    </div>
  );
}
export default ExpenseItems;
