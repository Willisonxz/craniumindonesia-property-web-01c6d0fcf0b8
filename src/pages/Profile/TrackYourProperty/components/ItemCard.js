// material UI
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import styled from '@mui/system/styled';

const Item = styled('div')(({ theme }) => ({
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    borderRadius: '4px',
    width: '100%',
}));

const ItemCard = ({ ...params }) => {
    const { title, description } = params.itemCard;
    return (
        <Item>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <Box>
                <img src={params.iconSrc} alt={title}></img>
                <Typography mt='1rem' fontSize='1rem' fontWeight='600' gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography fontSize='1rem' color="text.secondary">
                    {description}
                </Typography>
            </Box>
        </Item>
    )
}
export default ItemCard;