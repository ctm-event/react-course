import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
  const expenseElms = [];
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

  return (
    <Card className='expenses'>
      {expenseElms}      
    </Card>
  )
}

export default Expenses;