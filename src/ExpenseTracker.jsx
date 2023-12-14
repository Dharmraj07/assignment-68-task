import React, { useState } from 'react';
import ItemList from './ItemList';

const ExpenseTracker = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [expenses, setExpenses] = useState([]);

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleAddExpense = () => {
    // Validate input fields before adding an expense
    if (enteredTitle.trim() === '' || enteredAmount.trim() === '' || enteredDate.trim() === '') {
      alert('Please fill out all fields.');
      return;
    }

    // Create a new expense object
    const newExpense = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: +enteredAmount, // Convert to number
      date: new Date(enteredDate),
    };

    // Update the expenses state
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

    // Clear the input fields
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const handleDeleteExpense = (expenseId) => {
    // Filter out the expense with the specified ID
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== expenseId));
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <form>
        <div>
          <label>Title:</label>
          <input type="text" value={enteredTitle} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Amount:</label>
          <input type="number" value={enteredAmount} onChange={handleAmountChange} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" value={enteredDate} onChange={handleDateChange} />
        </div>
        <button type="button" onClick={handleAddExpense}>
          Add Expense
        </button>
      </form>

      <ItemList expenses={expenses} handleDeleteExpense={handleDeleteExpense}/>
    </div>
  );
};

export default ExpenseTracker;
