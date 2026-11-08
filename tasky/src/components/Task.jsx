import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';



import DeleteIcon from '@mui/icons-material/Delete';

const Task = (props) => {

    return (
        <Grid
        key={props.id}
        size={{ xs: 12, md: 4 }}
        >
            <Card
                sx={{
                backgroundColor: props.done ? '#e0e0e0' : '#f3e5f5',
                border: '2px solid #7b1fa2',
                borderRadius: '12px',
                padding: '20px',
                boxShadow: 3
                }}
            >
                <CardHeader
                title={props.title}
                sx={{
                    backgroundColor: '#7b1fa2',
                    color: 'white',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    padding: '20px',
                    textAlign: 'center'
                }}
                />

                <CardContent>
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    mb: 2,
                    padding: '20px'
                    }}
                >
                    <Typography
                        component="p"
                        variant="subtitle2"
                        sx={{ fontWeight: 'bold', color: '#4a148c' }}
                    >
                        Due: {props.deadline}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Chip
                        label={props.done ? "Completed" : "Pending"}
                        color={props.done ? "success" : "warning"}
                        size="small"
                    />
                </Box>

                <Typography
                    component="p"
                    variant="subtitle1"
                    align="center"
                    sx={{ fontStyle: 'italic' }}
                >
                    {props.description}
                </Typography>
                </CardContent>

                <CardActions
                sx={{
                    justifyContent: 'space-between',
                    padding: '20px'
                }}
                >
                <Button
                    variant="contained"
                    size="small"
                    color="success"
                    onClick={props.markDone}
                >
                    Done
                </Button>

                <Button
                    variant="contained"
                    size="small"
                    color="error"
                    startIcon={<DeleteIcon />}
                    onClick={props.deleteTask}
                    sx={{ borderRadius: '20px', textTransform: 'none' }}
                >
                    Delete
                </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default Task;