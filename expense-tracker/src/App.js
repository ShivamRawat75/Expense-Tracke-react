
import './App.css';

import { Typography, styled, Box } from '@mui/material';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';

import { useState } from 'react';

const Header = styled(Typography)`

  
  font-size:36px;
  color:blue;
  text-transform: uppercase;


`
const Component=styled(Box)`

    display: flex;
    background: #f6f6;
    width: 800px;
    padding:10px;
    border-radius: 20px;
    margin:auto;

    & > div{
      height:70vh;
      width:50%;
      padding:10px;
    }


`

function App() {

  const [transactions, setTransaction] = useState([

    { id: 1, text: 'Momos', amount: -20 },
    { id: 2, text: 'Salary', amount: 3000 },
    { id: 3, text: 'Book', amount: -100 },
    { id: 4, text: 'Bonus', amount: 1500 }


  ])



  return (
    <Box className="App">

      <Header>
        Expense Tracker
      </Header>
      <Component>

      <Box>

        <Balance transactions={transactions}/>
        <ExpenseCard transactions={transactions}/>
        <NewTransactions setTransaction={setTransaction} />

      </Box>

      <Box>

        <Transactions transactions={transactions} setTransaction={setTransaction} />
      
      </Box>

      </Component>
    </Box>
  );
}

export default App;
