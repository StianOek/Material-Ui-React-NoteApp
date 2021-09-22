import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton  from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { DeleteOutline } from '@mui/icons-material';

function NoteCard({ note, handleDelete }) {
    return (
        <div>
            <Card elevation={1}>
                <CardHeader 
                 action={
                     <IconButton onClick={() => handleDelete(note.id)}>
                         <DeleteOutline />
                     </IconButton>
                 }
                 title={note.title}
                 subheader={note.category}
                />
                <CardContent>
                    <Typography varient="body2" color="textSecondary">
                        {note.content}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard
