
import { Box, Typography, Divider, List } from "@mui/material";

import Transaction from "./Transaction";

const Transactions = ({transactions,setTransaction}) => {
    return (
        <Box><Typography variant="h5">Transaction History</Typography>
            <Divider />
            <List>
                {
                    transactions.map(transactions=>(
                    <Transaction transaction={transactions} setTransaction={setTransaction} transactions={transactions}/>
                    ))
                }
            </List>
        </Box>
    )
}

export default Transactions;