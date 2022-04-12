import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [addExpense, setAddExpense] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random(),
      ...enteredExpenseData
    }

    props.onAddExpense(expenseData);
    setAddExpense(false);  
  }

  const newExpenseHandler = () => {
    setAddExpense(prevState => true);
  }

  return (
    <div className='new-expense'>
      {addExpense ? 
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> :
        <button onClick={newExpenseHandler}>Add New Expenses</button> 
      }      
      
    </div>
  )
} 

export default NewExpense;