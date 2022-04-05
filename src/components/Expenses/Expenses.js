import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
  console.log(props.expenses);
  const [selectedYear, setSelectedYear] = useState('2020');
  const filterByYear = (selectedYear) => {
    return props.expenses.filter(item => {
      return item.date.getFullYear().toString() === selectedYear;
    })
  }
  const [filteredExpenses, setFilteredExpenses] = useState(filterByYear(selectedYear));

  const filterChangeHandler = (newValue) => {
    setSelectedYear(newValue);
    setFilteredExpenses(filterByYear(newValue));
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterChange={filterChangeHandler} selected={selectedYear} />
      {filteredExpenses.length ? filteredExpenses.map((item, index) => {
        return <ExpenseItem
          key={index} 
          date={item.date}
          amount={item.amount}
          title={item.title}
        />
      }) : <p>No Items Found.</p>}      
    </Card>
  )
}

export default Expenses;