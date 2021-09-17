import React from 'react'
import { Container } from '@mui/material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    btn: {
        fontSize: 60,
        backgroundColor: 'red'
    },
    text: {
        color: 'red'
    }
})

function Create() {

    const classes = useStyles();

    return (
        <Container>
            <Typography  variant="h6" component="h2" gutterBottom color="textSecondary">
                Ley down a note to remember
            </Typography>

            <Button  type="submit" color="primary" variant="outlined" startIcon={<AdbOutlinedIcon />}>
                Create
            </Button>
            <br />
            
        </Container>
    )
}

export default Create
