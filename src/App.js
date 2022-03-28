import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 984.23,
      date: new Date(2022, 3, 12)
    },
    {
      title: 'Food',
      amount: 234.52,
      date: new Date(2022, 4, 11)
    },
    {
      title: 'Fish',
      amount: 111.23,
      date: new Date(2022, 6, 8)
    },
    {
      title: 'Fuel',
      amount: 333.23,
      date: new Date(2022, 2, 1)
    },
    {
      title: 'Traveling',
      amount: 231.27,
      date: new Date(2022, 9, 22)
    }
  ];

  const expenseElms = [];
  expenses.forEach(item => {
    expenseElms.push(
      
    )
  })

  return (
    <div>
      <h2>Let's get started!!</h2>
      {expenses.map((item) => {
        return (
          <ExpenseItem
            date={item.date}
            amount={item.amount}
            title={item.title}
          />
        );
      })}
    </div>
  );
}

export default App;
