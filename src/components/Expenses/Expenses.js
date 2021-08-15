import "./Expenses.css";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

function Expenses(props) {
  // Use State for the selected year
  const [selectedYear, setSelectedYear] = useState("2020");
  
  // Function to set the selected year
  const setFilter = (filteredYear) => {
    setSelectedYear(filteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === Number(selectedYear)
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear} onFilterChange={setFilter} />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
