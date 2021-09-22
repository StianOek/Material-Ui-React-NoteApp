import React, { useState } from 'react'
import  Container from '@material-ui/core/Container'
import  Typography  from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import AdbOutlinedIcon from '@mui/icons-material/AdbOutlined';
import  makeStyles from '@material-ui/core/styles/makeStyles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: "block"
    }
})

function Create() {

    const classes = useStyles();
    const history = useHistory();
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [titleError, setTitleError] = useState(false)
    const [contentError, setContentError] = useState(false)
    const [category, setCategory] = useState("todos")

    const handleSubmit = (e) => {
        e.preventDefault()

        setTitleError(false)
        setContentError(false)

        if (title === "") {
            setTitleError(true)
        }

        if (content === "") {
            setContentError(true)
        }

        if( title && content) {
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ title, content, category})
            }).then(() => history.push('/'))
        }
    }

    return (
        <Container>
            <Typography  variant="h6" component="h2" gutterBottom color="info">
                Ley down a note to remember
            </Typography>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field}
                    label="Title"
                    variant="outlined"
                    fullWidth
                    required
                    error={titleError}
                ></TextField>
                <TextField
                    onChange={(e) => setContent(e.target.value)}
                    className={classes.field}
                    label="Content"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={contentError}
                ></TextField>
                <FormControl className={classes.field}>
                    <FormLabel>Note category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value="money" control={<Radio />} label="Money" />
                        <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                        <FormControlLabel value="reminders" control={<Radio />} label="Reminder" />
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                    </RadioGroup>
                </FormControl>
                <Button  type="submit" color="primary" variant="contained" startIcon={<AdbOutlinedIcon />}>
                    Create
                </Button>

            </form>

            
            <br />
            
        </Container>
    )
}

export default Create
