 //import React, { useState, useEffect } from 'react';
 import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from './components/Expenses/Expenses';


let DUMMY_EXPENSE = [];

const App = () => {


    const [expenses, setexpenses] = useState(DUMMY_EXPENSE);
    const addExpenseHandler = (expense) => {
      const updatedexpense = [expense, ...expenses]
      setexpenses(updatedexpense);
    }

    

    // function fetchData(){
    //     fetch('http://localhost:3001/userdetails').then(
    //         response => {
    //             return response.json();
    //         }
    //     ).then(
    //         data => {
    //             //console.log(data);
    //             setexpenses(data);
    //         }
    //     );
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const addExpenseHandler = (expense) => {
    //     fetch('http://localhost:3001/userdetails', {
    //         method: 'POST',
    //         body: JSON.stringify(expense),
    //         headers: {
    //             'content-Type': 'application/json'
    //         }
    //     }).then(
    //         response => {
    //             fetchData();
    //         }
    //     );
    // };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses item={expenses} />
        </div>
    );
}

export default App;
