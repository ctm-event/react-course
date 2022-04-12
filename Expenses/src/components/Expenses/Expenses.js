import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const filterChangeHandler = (newValue) => {
    setSelectedYear(newValue);
  }

  const filteredExpenses = props.expenses.filter(item => {
    return item.date.getFullYear().toString() === selectedYear;
  })

  let expenseContent = <p style={{color: '#fff', padding: '0 16px'}}>No expenses found.</p>

  if (filteredExpenses.length) {
    expenseContent = filteredExpenses.map((item, index) => {
      return <ExpenseItem
        key={index} 
        date={item.date}
        amount={item.amount}
        title={item.title}
      />
    })
  }
    

  return (
    <Card className='expenses'>
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter onFilterChange={filterChangeHandler} selected={selectedYear} />
      {expenseContent}      
    </Card>
  )
}

export default Expenses;