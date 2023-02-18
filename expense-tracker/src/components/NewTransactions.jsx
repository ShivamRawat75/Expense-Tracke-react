
import { Box, Typography, TextField, Button, styled } from "@mui/material"

import { useState } from "react"

const Container = styled(Box)`

    display:flex;
    flex-direction: column;
    & > h5, &> div, & > Button{
        margin-top:30px;
    }
`


const NewTransaction = ({setTransaction}) => {

    const [text,setText]=useState('');
    const [amount,setAmount]=useState();

    const addTrasaction=()=>{
        const transaction={
            id:Math.floor(Math.random()*1000000),
            text:text,
            amount:+amount
        }
        setTransaction(prevState=>[transaction, ...prevState]);
    }

    return (
        <Container>
            <Typography variant="h5" >New Transaction</Typography>
            <TextField label="Enter expense" onChange={(e)=>setText(e.target.value)}/>
            <TextField label="Enter amount" onChange={(e)=>setAmount(e.target.value)}/>
            <Button variant="contained" onClick={()=>addTrasaction()}>Add Transaction</Button>
        </Container>
    )


}

export default NewTransaction;