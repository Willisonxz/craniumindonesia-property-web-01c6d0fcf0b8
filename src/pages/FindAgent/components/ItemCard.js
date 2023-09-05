// material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';

const Item = styled('div')(({ theme }) => ({
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    borderRadius: '4px',
    width: '100%',
}));

const ItemCard = ({ ...params }) => {
    const { id, title, description } = params.itemCard;
    return (
        <Item>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography gutterBottom variant="p" component="div"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                            borderRadius: 1,
                            height: '30px',
                            width: '30px',
                            borderRadius: '50%',
                            margin: '10px 0px'
                        }}
                    >
                        {id}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Item>
    )
}
export default ItemCard;