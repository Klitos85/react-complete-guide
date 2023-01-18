import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData)
    setEditing(false)
  }

  const startEditingHandler = () => {
    setEditing(true)
  }

  const stopEditingHandler = () => {
    setEditing(false)
  }

  return (
    <div className='new-expense'>
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  )
}

export default NewExpense
