import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const expenseElms = [];
  const [selectedYear, setSelectedYear] = useState('2020');
  
  props.expenses.forEach(item => {
    expenseElms.push(
      <ExpenseItem
        key={item.id} 
        date={item.date}
        amount={item.amount}
        title={item.title}
      />
    )
  })

  const filterChangeHandler = (newValue) => {
    setSelectedYear(newValue);
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterChange={filterChangeHandler} selected={selectedYear} />
      {expenseElms}      
    </Card>
  )
}

export default Expenses;