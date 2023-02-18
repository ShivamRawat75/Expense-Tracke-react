
import { Box, ListItem, ListItemText, styled, ListItemIcon } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';

const Detail = styled(ListItem)`

    margin-top:10px;

`

const Transaction = ({ transaction, setTransaction, transactions }) => {

    const color = transaction.amount > 0 ? 'Green' : 'Red';

    const deleteTransaction = (id) => {
        setTransaction(transactions.filter(transaction => transaction.id !== id))
    }

    return (
        <Box>
            <Detail style={{ background: `${color}`, color: '#fff' }}>

                <ListItemIcon> 
                    <DeleteIcon  onClick={()=>deleteTransaction(transaction.id)} />
                </ListItemIcon>
                <ListItemText>{transaction.text}</ListItemText>
                <ListItemText>{transaction.amount}</ListItemText>
            </Detail>
        </Box>
    )

}
export default Transaction;