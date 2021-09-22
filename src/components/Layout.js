import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory } from 'react-router';

const drawerWidth = 200;

const useStyles = makeStyles({
    root: {
        display: "flex"
    },
    page: {
        background: '#607D8B',
        width: "100%"
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    }
    
})

function Layout({ children }) {
    const classes = useStyles();
    const history = useHistory();

    const menuItems = [
        {
            text: "View notes",
            icon: <SubjectOutlined color="primary" />,
            path: "/"
        },
        {
            text: "New note",
            icon: <AddCircleOutlineOutlined color="primary" />,
            path: "/create"
        },
    ]

    return (
        <div className={classes.root}>

            <Drawer className={classes.drawer} variant="permanent" anchor="left" classes={{ paper: classes.drawerPaper}}>
                <div>
                    <Typography variant="h5">
                        NoTes
                    </Typography>
                </div>
            {/* List / Links */}
                <List>
                    {menuItems.map(item => (
                        <ListItem key={item.text} button onClick={() => history.push(item.path)}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <div className={classes.page}>
                {children}
            </div>
            
        </div>
    )
}

export default Layout
