//import React from 'react'
import { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2019, 2, 21),
  },
  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 2, 22),
  },
  { id: 'e3', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 28) },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 500,
    date: new Date(2022, 3, 2),
  },
]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  /*return React.createElement(
		'div',
		{},
		React.createElement('h2', {}, 'Let\'s get started!'),
		React.createElement(Expenses, { items: expenses })
	)*/

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
