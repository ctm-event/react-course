import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: '01',
      title: 'Car Insurance',
      amount: 984.23,
      date: new Date(2022, 3, 12)
    },
    {
      id: '02',
      title: 'Food',
      amount: 234.52,
      date: new Date(2020, 4, 11)
    },
    {
      id: '03',
      title: 'Fish',
      amount: 111.23,
      date: new Date(2019, 6, 8)
    },
    {
      id: '04',
      title: 'Fuel',
      amount: 333.23,
      date: new Date(2021, 2, 1)
    },
    {
      id: '05',
      title: 'Traveling',
      amount: 231.27,
      date: new Date(2021, 9, 22)
    }
  ];

  const [expenseData, setExpenseData] = useState(expenses);

  const addExpenseHandler = (expenseData) => {
    expenses.unshift(expenseData);
    setExpenseData(expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}  />
      <Expenses expenses={expenseData} />
    </div>
  );
}

export default App;
