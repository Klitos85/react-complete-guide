import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  // Three states
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // Only one state
  /* const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })
  */

  const titleChangeHandler = (event) => {
    // Three states
    setEnteredTitle(event.target.value)
    // Only one state
    /* setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    })
    */
    // One state with previous state
    /* setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value }
    })
    */
  }

  const amountChangeHandler = (event) => {
    // Three states
    setEnteredAmount(event.target.value)
    // Only one state
    /* setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    })
    */
    // One state with previous state
    /* setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value }
    })
    */
  }

  const dateChangeHandler = (event) => {
    // Three states
    setEnteredDate(event.target.value)
    // Only one state
    /* setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    })
    */
    // One state with previous state
    /* setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value }
    })
    */
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData)

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2023-12-31'
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
