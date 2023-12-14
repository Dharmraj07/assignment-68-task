import React from 'react'

const ItemList = ({expenses,handleDeleteExpense}) => {
  return (
    <div>
        
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <strong>{expense.title}</strong> - ${expense.amount} on {expense.date.toISOString().split('T')[0]}
            <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList